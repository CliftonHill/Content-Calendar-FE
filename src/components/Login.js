import React, { useState } from "react";
import axios from "axios";

// need to set up axios to send form data as state

export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function handleChange (e) {
  if (e.target.name === "email") {
    setEmail(e.target.value);
  } else {
    setPassword(e.target.value);
  }
}

function handleSubmit (e) {
  e.preventDefault();

  axios.post("/api/user/login", { email, password})
    .then((result) => console.log(result));
}

  return (
    <form onSubmit={ handleSubmit } >
      <label>Email: <input type="email" name="email" value={email} onChange={ handleChange } placeholder="you@email.com" required/></label><br />
      <label>Password: <input type="password" name="password" value={password} onChange={ handleChange } placeholder="********" required/></label>
      <button type="submit" name="button">Submit</button>
    </form>
    )
  }
