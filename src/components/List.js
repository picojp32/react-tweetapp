import "../App.css";

const List = (props) => {
  const {tweetData} = props
  return (
          <div className="tweet-list">
            <ul>
              {tweetData.sort((a, b)=>b.date.localeCompare(a.date)).map((tweets) => ( 
                <div key={tweets.id}>
                  <div  className="tweet-item">
                  <div className="tweet-header">
                    <div className="post-date">{tweets.date}</div>
                    <div className="post-user">{tweets.userName}</div>
                  </div>
                  <div>
                    <div className="post-context">{tweets.content}</div>
                  </div>                  
                </div>   
              </div>    
                               
                ))}
            </ul>
          </div>
  );
};

export default List;