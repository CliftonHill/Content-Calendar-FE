import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import Footer from "../components/Footer";

export default function Splash() {
  const [ requestLoginForm, setRequestLoginForm ] = useState(false);
  const [ requestRegisterForm, setRequestRegisterForm ] = useState(false);
  // Otherwise, run login route if logging in, or registration if registering, then

 function handleClick (e) {
   if (e.target.textContent === "Login") {
     setRequestRegisterForm(false);
     setRequestLoginForm(true);
   } else if (e.target.textContent === "Register") {
     setRequestLoginForm(false);
     setRequestRegisterForm(true);
   }
 }

 //need reverse, or set above handleClick to handle both and differentiate based on the e input


  return (
    <div>
    <header>
      <h1>Logo - Splash Page</h1>
      <div onClick={ handleClick }>Login</div>
   </header>

      <main>
        <button onClick={ handleClick }>Register</button>
        { requestLoginForm && <Login />}
        { requestRegisterForm && <Register />}

      </main>
      <Footer />
    </div>
  );
}
