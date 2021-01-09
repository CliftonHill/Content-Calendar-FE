import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
const axios = require("axios").default;

export default function Home() {
  // location of user Home where calendar is displayed, should log in directly to this page when going to root location if user token is still active.
    // I think Home and Splash would both be routed to within the App, once I understand React Router

  const [displayName, setDisplayName ] = useState("User Name");

  axios.get("/api/user")
    .then(response => {
      setDisplayName(response.data.displayName)
      console.log(response.data.displayName);
      // need to find out why this logs 2-3 times, maybe need to try useEffect hook which supposedly can perform action only once.
    })
    .catch(err => console.log(err));

  const browserHistory = useHistory();

  function handleClick () {
    browserHistory.push("/user");
  }

  return (
    <div>
    <Header />
    <div><button onClick={ handleClick }>{ displayName }</button> Calendar View</div>
    <Footer />
    </div>
  );
}
