import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Pages
import HomePage from "./pages/Home"; // home page is main functional page with calendar
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
        // may need some 404 catch page for someone that is not logged in trying to access a page. As well as redirect to go to home page if logged in and user goes to root
      </Switch>
    </Router>
    </div>
  );
}

export default App;
