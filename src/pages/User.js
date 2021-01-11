import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

export default function User() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

// set to only run once, else it overrides my handleChanges
  useEffect( () => {
    axios.get("/api/user")
      .then(res => {
        setDisplayName(res.data.displayName);
        setEmail(res.data.email);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  function handleChange(event) {
    if (event.target.name === "displayName") {
    setDisplayName(event.target.value);

    } else {
      setEmail(event.target.value);
    }
  }

  function handleDelete() {
    axios.delete("/api/user/delete")
    .then(res => console.log("Success", res))
    .catch(err => console.log("Error:", err));
  }
  //redirect to a deleted page to confirm it was done

  function handleUpdate() {
    const updateObj = {
      displayName: displayName,
      email: email
    };

    axios.put("/api/user/update", updateObj )
    .then(res => console.log("Success", res))
    .catch(err => console.log("Error:", err));
  }
  // confirm on the page that info was updated with an update message that pops up.

// after register should say registered, and then should say to login, set up to pull up login screen and pull over email address, all user has to do is reinput the password
  function handleAuthorize(event) {
    axios.get("/api/twitter/authorize")
    .then(res => console.log(res))
    .catch(err => console.log("Error:", err));
  }

  return (
    <div>
    <Header />
    <div>User info:<br />
      <form>
      <label>Name: <input type="text" name="displayName" onChange={ handleChange } value={displayName}></input></label>
      <label>email: <input type="email" onChange={ handleChange } value={ email }></input></label>
      </form>
    </div>
    <button onClick={ handleUpdate }>Update Changes</button><br/>
    <button name="authTwitter" onClick={ handleAuthorize }>Authorize Twitter</button><br/>
    <button onClick={ handleDelete }>Delete account</button>
    <Footer />
    </div>
  );
}
