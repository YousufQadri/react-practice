import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="navbar-brand">
          <h3>CreativO</h3>
        </div>

        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={props.changeState}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={props.changeState}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={props.changeState}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
