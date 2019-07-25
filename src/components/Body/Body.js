import React from "react";
import Home from "../routes/Home/Home";
import About from "../routes/About/About";
import Contact from "../routes/Contact/Contact";
import WithLoader from "../WithLoader/WithLoader";

function Body(props) {
  const HomeWithLoader = WithLoader(Home),
    AboutWithLoader = WithLoader(About),
    ContactWithLoader = WithLoader(Contact);

  return props.st === "about" ? (
    <AboutWithLoader />
  ) : props.st === "contact" ? (
    <ContactWithLoader />
  ) : (
    <HomeWithLoader />
  );
}

export default Body;
