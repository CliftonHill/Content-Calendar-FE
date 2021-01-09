import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

export default function User() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");


  axios.get("/api/user")
    .then(res => {
      setDisplayName(res.data.displayName);
      setEmail(res.data.email);
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });

  function handleChange(event) {
    if (event.target.name === "displayName") {
    setDisplayName(event.target.value);
    } else {
      setEmail(event.target.value);
    }
  }

  function handleClick() {
    // delete user

  }
//*** add in axios.put to update, and connect to delete route

  return (
    <div>
    <Header />
    <div>User info:<br />
      <form>
      <label>Name: <input type="text" name="displayName" onChange={ handleChange } value={displayName}></input></label>
      <label>email: <input type="email" onChange={ handleChange } value={ email }></input></label>
      </form>
    </div>
    <button onClick={ handleClick }>Delete account</button>
    <Footer />
    </div>
  );
}
