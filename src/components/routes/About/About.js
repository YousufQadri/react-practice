import React, { Fragment } from "react";
import "./About.css";

function About() {
  return (
    <Fragment>
      <div className="About-bg">
        <div className="container text-center pt-5 display-3 text-secondary font-weight-bold">
          Creativity is what IT matters
        </div>
      </div>
      <div className="container text-center">
        <h1 className="display-4 font-weight-bold py-4">Story</h1>
        <div className="col self-align-center">
          <p className="pb-5 font-size-1">
            Our journey started when graduates met together, while working in
            Silicon Valley, and decided to set the groundwork for a world-class
            technology organization in Pakistan. Our aim is to foster
            entrepreneurship in the region and technological innovation at a
            global scale.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
