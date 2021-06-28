import React,{useState} from "react"
import AppContext from "./context/AppContext";
import {Router, Route, Switch} from "react-router-dom"
import './App.css';
import Tweet from './components/Tweet';
import Users from './components/Users'
import NavBar from './components/NavBar'

const App = () => {
  const [user, setUser] = useState("");

 return (
   <AppContext.Provider
    value={{
      user:user,
      setUser: setUser
    }}>
      <Router>
        <NavBar />
      <Switch>
        <Route path="/" exact component={() => <Tweet user={user}/>}/>
        <Route path ="/userName" exact component={() => <Users setUser={setUser}/>}/>
      </Switch> 
    </Router>    
   </AppContext.Provider>
  );
}

export default App;