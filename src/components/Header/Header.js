import React from "react";

function Header(props) {
  const nav = ["Home", "About", "Contact"];
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="navbar-brand">
          <h3>CreativO</h3>
        </div>

        <ul className="nav justify-content-end text-white">
          {nav.map((item, index) => (
            <li key={index} className="nav-item">
              <a className="nav-link" href="#" onClick={props.changeState}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
