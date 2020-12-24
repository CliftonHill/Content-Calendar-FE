import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function UserView() {
  // location of user Home where calendar is displayed, should log in directly to this page when going to root location if user token is still active.
    // I think Home and Splash would both be routed to within the App, once I understand React Router

  function deleteUser () {

  }

  function handleClick() {
    // delete user
  }

  return (
    <div>
    <Header />
    User info
    <button onClick={ handleClick }>Delete account</button>
    <Footer />
    </div>
  );
}
