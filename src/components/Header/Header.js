import React, { Fragment } from "react";
import "./Header.css";

function Header() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="navbar-brand">
          <h3>ReactApp</h3>
        </div>
        <ul className="nav nav-tabs justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Services
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Header;
