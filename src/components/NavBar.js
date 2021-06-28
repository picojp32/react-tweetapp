import '../App.css';
import React from 'react'
import {Link} from 'react-router-dom';

const NavBar = () =>{

  return(
    <li className="navBar">
      <Link to = "/">Home</Link> 
      <Link to = "/Username">Profile</Link> 
    </li>
  )
}

export default NavBar;
