import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  // location of user Home where calendar is displayed, should log in directly to this page when going to root location if user token is still active.
    // I think Home and Splash would both be routed to within the App, once I understand React Router


  return (
    <div>
    <Header />
    Calendar View
    <Footer />
    </div>
  );
}
