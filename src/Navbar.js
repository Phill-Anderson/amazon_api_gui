import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Номууд
        </Link>
        <a href="navbar-item" onClick={props.onLogOut}>
          Logout
        </a>
      </div>
    </nav>
  );
}
