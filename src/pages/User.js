import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

export default async function User() {
  const token = localStorage.getItem("authorization");
  console.log(token);
  await axios.get("/api/user", { headers: { authorization: token } } )
    .then(res => {
      console.log(res);
    })
    .catch(e => {
      console.log(e);
    });

  function handleClick() {
    // delete user

  }

  return (
    <div>
    <Header />
    User info:
    <button onClick={ handleClick }>Delete account</button>
    <Footer />
    </div>
  );
}
