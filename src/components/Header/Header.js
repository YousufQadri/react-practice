import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    links: [
      {
        title: "Home",
        path: "/"
      },
      {
        title: "About",
        path: "/about"
      },
      {
        title: "Contact",
        path: "/contact"
      }
    ]
  };

  render() {
    const { links } = this.state;
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
          <div className="navbar-brand">
            <h3>CreativO</h3>
          </div>
          }
          <ul className="nav justify-content-end text-white">
            {links.map((item, index) => (
              <li key={index} className="nav-item">
                <Link to={item.path} className="nav-link">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
