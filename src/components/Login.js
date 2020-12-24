import React from "react";
import Axios from "axios";

export default function Login() {

  return (
    <form action="/api/user/login" method="POST">
      <label>Email: <input type="email" name="email" placeholder="you@email.com" required/></label><br />
      <label>Password: <input type="password" name="password" placeholder="********" required/></label>
      <button type="submit" name="button">Submit</button>
    </form>
    )
  }
