import React from "react";
import Home from "../routes/Home/Home";
import About from "../routes/About/About";
import Contact from "../routes/Contact/Contact";

function Body(props) {
  return props.st === "about" ? (
    <About />
  ) : props.st === "contact" ? (
    <Contact />
  ) : (
    <Home />
  );
}

export default Body;
