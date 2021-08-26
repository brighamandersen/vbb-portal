import React from "react";
import { Link, useLocation } from "react-router-dom";
import fullLogo from "../assets/vbb-full-logo.png";
import miniLogo from "../assets/vbb-picture-logo.png";

function Navbar() {
  const location = useLocation();
  const loggedIn = location.pathname !== "/";

  return (
    <nav
      className="navbar sticky-top  navbar-expand-lg navbar-light"
      id="vbb-full-bar"
    >
      <a
        id="full-logo"
        href="https://www.villagebookbuilders.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={fullLogo} alt="Logo" />
      </a>
      <a
        id="mini-logo"
        href="https://www.villagebookbuilders.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={miniLogo} alt="Logo" />
      </a>
      <Link to="/" id="bar-header-link">
        <h1 id="bar-header">
          Vbb Portal
          <span className="badge badge-secondary">NEW</span>
        </h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        {loggedIn ? (
          <div className="btn-pair">
            <a
              className="btn btn-light donate-btn"
              type="button"
              href="https://www.villagebookbuilders.org/donate/"
              target="_blank"
              rel="noopener noreferrer"
            >
              DONATE
            </a>
            <Link className="btn btn-light signout-btn" to="/">
              SIGN OUT
            </Link>
          </div>
        ) : (
          <div className="btn-pair">
            <Link to="/register" className="btn btn-light register-btn">
              REGISTER
            </Link>
            <Link to="/dashboard" className="btn btn-light signin-btn">
              SIGN IN
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
