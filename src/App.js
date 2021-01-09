import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Pages
import HomePage from "./pages/Home"; // home page is main functional page with calendar
import SplashPage from "./pages/Splash"; // has log in and register as well
import UserPage from "./pages/User";
import ErrorPage from "./pages/Error";

function App(props) {
  // get header, then try route,

// checking for log in happens by cookie on BE, but need to check for something from the BE to be able to serve certain pages or not?


  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={ SplashPage }/> // once authorization is stored in header, then redirect to /home
        <Route exact path="/home" component={ HomePage }/>
        <Route exact path="/user" component={ UserPage }/>
        <Route component={ ErrorPage }/> // route ends up here if doesn't match any of the above.
        // may need some 404 catch page for someone that is not logged in trying to access a page. As well as redirect to go to home page if logged in and user goes to root
      </Switch>
    </Router>
    </div>
  );
}

export default App;
