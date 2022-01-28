import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <nav className="nav-bar d-flex">
      <ul className="d-flex nav-container">
        <li>Logo</li>

        <li>
          <Link className="menu-item" to="/">
            Home
          </Link>
          <Link className="menu-item" to="/about">
            About
          </Link>
          <Link className="menu-item" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
