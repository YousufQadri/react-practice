import React, { Fragment } from "react";
import "./Header.css";

function Header(props) {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="navbar-brand">
          <h3>ReactApp</h3>
        </div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={props.checkState}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={props.checkState}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={props.checkState}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Header;
