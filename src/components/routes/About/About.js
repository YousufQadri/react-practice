import React, { Fragment } from "react";
import "./About.css";
import userImg from "../../../imgs/no-user.png";
import building1 from "../../../imgs/building1.jpg";

function About() {
  return (
    <Fragment className="container">
      <div className="pimg1">
        <div className="ptext">
          <span className="About-mainHead border font-weight-bold">
            Creativity is what IT matters
          </span>
        </div>
      </div>

      <section className="section section-dark">
        <h2 className="display-5 font-weight-bold py-5">Our Story</h2>
        <p className="pb-3">
          Our journey started when graduates met together, while working in
          Silicon Valley, and decided to set the groundwork for a world-class
          technology organization in Pakistan. Our aim is to foster
          entrepreneurship in the region and technological innovation at a
          global scale.
        </p>
        <div className="row">
          <div className="col mb-4">
            <img src={userImg} alt="user" className="rounded-circle" />
          </div>
          <div className="col mb-4">
            <img src={userImg} alt="user" className="rounded-circle" />
          </div>
          <div className="col">
            <img src={userImg} alt="user" className="rounded-circle" />
          </div>
          <div className="col">
            <img src={userImg} alt="user" className="rounded-circle" />
          </div>
        </div>
      </section>

      <div className="pimg2">
        <div className="ptext">
          <span className="display-4 border trans font-weight-bold ">
            Top Notch Quality
          </span>
        </div>
      </div>

      <section className="section section-light">
        <h2 className="display-5 font-weight-bold py-4">Our Creativity Hubs</h2>
        <div className="row">
          <div className="col mb-4">
            <img src={building1} alt="user" className="rounded" />
            <p className="font-weight-bold my-4">Karachi</p>
          </div>
          <div className="col mb-4">
            <img src={building1} alt="user" className="rounded" />
            <p className="font-weight-bold my-4">USA</p>
          </div>
          <div className="col">
            <img src={building1} alt="user" className="rounded" />
            <p className="font-weight-bold my-4">Dubai</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
