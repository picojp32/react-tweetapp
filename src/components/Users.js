import { useState, useContext } from 'react';
import { Route } from 'react-router';
import "../App.css"
import AppContext from '../context/AppContext';
import Tweet from './Tweet';

const Users = () => {
  const appContext = useContext(AppContext);
  const [newUser, setNewUser] = useState('')

  const newUserHandler = (e) => {
    setNewUser(e.target.value);
  };

  const userHandler = () => {
    appContext.setUser(newUser);
    <Route exact path="/" component={Tweet}/>
    setNewUser('')
  };

  return(
    <div className="user-container">
      <h1 className="profile-title">Profile</h1>
      <input
        type="Text"
        value={newUser}
        className="user-input"
        onChange={newUserHandler}
        placeholder="Username..."
      />
      <button
        type="submit"
        onClick={userHandler}
        className='save-button'>
        Save
      </button> 
    </div>
  )

}

export default Users;