import React from "react";

export default function Register() {

  return (
    <form action="/api/user/register" method="POST">
      <label>Name: <input type="text" name="name" placeholder="Your Name" required /></label><br />
      <label>Email: <input type="email" name="email" placeholder="you@email.com" required/></label><br />
      <label>Password: <input type="password" name="password" placeholder="********" required/></label>
      <button type="submit" name="button">Submit</button>
    </form>
    )
  }
