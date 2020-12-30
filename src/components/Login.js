import React, { useState } from "react";
import axios from "axios";

// need to set up axios to send form data as state

export default function Login() {
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

  function handleSubmit (e) {
    e.preventDefault();

    axios.post("/api/user/login", { email, password})
      .then((res) => {
        if (!res.data.error) {
        console.log(res);
        localStorage.setItem("authorization", "Bearer: " + res.data); // *** doesn't work
       } else {
          throw { error: res.data.error }
        }
    }).catch(e => {
        setErrorMsg(e.error);
        console.log(e);
    });
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
