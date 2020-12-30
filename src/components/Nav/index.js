import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper row">
        <Link to="/" className="center-align col s8 hoverable" id="name">
          <span className="flow-text">Umut A. ALPTEKIN</span>
        </Link>

        <a className="dropdown-trigger left-align col s4" href="#!" data-target="dropdown1">
          <i className="material-icons hoverable">menu</i></a>
        <ul id="dropdown1" className="dropdown-content">
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;