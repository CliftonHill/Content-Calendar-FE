import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Pages
import HomePage from "./pages/Home";
import SplashPage from "./pages/Splash";
import UserPage from "./pages/User";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false); //logging in happens globablly, so I may need Redux? or just pass it through
// if user is logged in and goes to main page, then redirect to API/user/login. Need logic built in

  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={ SplashPage }/>
        {isLoggedIn && <Route exact path="/home" component={ HomePage }/>}
        {isLoggedIn && <Route exact path="/user" component={ UserPage }/>}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
