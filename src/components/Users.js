import { useState, useContext } from 'react';
import {Redirect} from "react-router-dom"
import "../App.css"
import AppContext from '../context/AppContext';

const Users = () => {
  const appContext = useContext(AppContext);
  const [newUser, setNewUser] = useState('')
  const [isRedirect, setIsRedirect] = useState(false);

  const newUserHandler = (e) => {
    setNewUser(e.target.value);
  };

  const userHandler = () => {
    appContext.setUser(newUser);
    setNewUser('')
    setIsRedirect(true);
  };

  return(
    <div className="user-container">
      <p className="profile-title">Profile</p>
      <p className="user-title">User Name</p>
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
      { isRedirect && <Redirect to='/' />} 
    </div>
  )

}

export default Users;