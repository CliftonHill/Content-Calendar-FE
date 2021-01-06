import React, { useState } from "react";
import axios from "axios";

export default function Register() {
const [ displayName, setDisplayName ] = useState("");
const [ email, setEmail ] = useState("");
const [ password, setPassword ] = useState("");
const [errorMsg, setErrorMsg] = useState("");

function handleChange (e) {
  if (e.target.name === "displayName") {
    setDisplayName(e.target.value);
  } else if (e.target.name === "email") {
    setEmail(e.target.value);
  } else {
    setPassword(e.target.value);
  }
}


function handleSubmit (e) {
  e.preventDefault();

  axios.post("api/user/register", { displayName, email, password })
    .then((res) => {
      console.log(res)
      // if (!res.data.error) {
      //   console.log(res);
      // } else {
      //   setErrorMsg(res.data.error);
      //   console.log(res.data.error);
      // }
    })
    .catch(e => {
      setErrorMsg(JSON.parse(e[0].msg));
      console.log(e)
    });
}

  return (
    <form onSubmit={ handleSubmit }>
      { errorMsg && <div className="errorMsg">Error: { errorMsg }</div> }
      <label>Name: <input type="text" name="displayName" value={ displayName } onChange={ handleChange } placeholder="Your Name" required /></label><br />
      <label>Email: <input type="email" name="email" value={ email } onChange={ handleChange } placeholder="you@email.com" required/></label><br />
      <label>Password: <input type="password" name="password" value={ password } onChange={ handleChange } placeholder="********" required/></label>
      <button type="submit" name="button">Submit</button>
    </form>
    )
  }
