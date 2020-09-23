import React from "react";
import logo from "../../logo.svg";
import "./Navbar.styles.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="navbar__image" />
      <ul className="navbar__links">
        <li>
          <a href="/" className="navbar__link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="navbar__link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="navbar__link active">
            Tours
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
