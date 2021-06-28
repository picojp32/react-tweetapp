import { useState, useEffect, useContext} from "react";
import AppContext from "../context/AppContext";
import "../App.css"
import moment from "moment";
import List from "./List"
import Loader from "./Loader"

const Tweet = () => {
  const appContext = useContext(AppContext);
  const [text, setText] = useState("");
  const maxLength = 140;
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [tweetData, setTweetData] = useState([]);

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    setIsLoading(true);
    
    const tweetPostData = {
      content: text,
      userName: appContext.user,
      date: moment().format(),
    };

    const request = {
      method: 'POST',
      headers: 
        {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(tweetPostData)  
    };
 
    fetch("https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet", request)
    .then(response => response.json())
    .then(data => setTweetData([...tweetData,data]))
      setText('');
    setTimeout(()=>{
        setIsLoading(false);
    },[500])
  };
   
  useEffect(() => {
    setIsLoading(true); 
    fetch("https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet")
    .then((response) => {
      response.json().then(data => {
        localStorage.getItem("profileName",appContext.user)
        setTweetData(data.tweets.filter(tweets => tweets.userName === appContext.user))
         })
    })
    setIsLoading(false);
  }, [appContext.user]); 

  useEffect (() =>{
    if(!appContext.user && !tweetData.text) {
      setIsDisabled(true);
    } else{
      setIsDisabled(false)
    }
  }, [appContext, tweetData]);

  useEffect(() => {
    if (text.length < maxLength) {
      setIsDisabled(false);
    } else {
      window.confirm("The tweet can't contain more then 140 chars.")  
    } 
  }, [text.length]);

  return (

    <form>
      <div className="form-container">
      <textarea
        disabled={isDisabled}
        rows='10'
        cols='90'
        name='text'
        className='tweet'
        value={text}
        maxLength= {maxLength}
        placeholder='What you have in mind...'
        onInput={textHandler}
      />
      {!isLoading && (
        <button
          onClick={handleClick}
          disabled={isDisabled}
          type="submit"
          className={`submit-button submit-button-${isDisabled}`}>
          Tweet
        </button>
      )}
      {isLoading && <Loader />}
      <List tweetData={tweetData} />
    </div>
    </form> 
  ); 
}


export default Tweet;