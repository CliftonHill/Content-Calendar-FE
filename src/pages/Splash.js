import React from "react";
import Footer from "../components/Footer";

export default function Splash() {


  return (
    <div>
    <header>
      <h1>Logo</h1>
      <div>Login</div>
   </header>
    // header, includes login top right
      // main w/ register button that expands into registration form, or is turned into login via login button
      <main>
        Login / Registration form
      </main>
      <Footer />
    </div>
  );
}
