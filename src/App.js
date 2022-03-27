import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Router from "./Routes";
import Signup from "./components/Signup";


function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
