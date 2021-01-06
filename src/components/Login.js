import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, useHistory } from "react-router-dom";
import axios from "axios";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange (e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  const history = useHistory();

  async function handleSubmit (e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/user/login", { email, password});
      console.log(res);
        if (!res.data.error) {

        localStorage.setItem("authorization", "Bearer: " + res.data); // works, but Cesar said new code doesn't need, so this can be removed (1/6/21)
        history.push("/home");
      } else {
        console.log("1st", res.data.error)
      }
  } catch (error) {
    console.log("catch", error);
  }

  }

  return (
    <form onSubmit={ handleSubmit } >
      { errorMsg && <div className="errorMsg">Error: { errorMsg }</div> }
      <label>Email: <input type="email" name="email" value={email} onChange={ handleChange } placeholder="you@email.com" required/></label><br />
      <label>Password: <input type="password" name="password" value={password} onChange={ handleChange } placeholder="********" required/></label>
      <button type="submit" name="button">Submit</button>
    </form>
    )
  }
