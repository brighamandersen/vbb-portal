import React from "react";
import { Link } from "react-router-dom";
import fullLogo from "../assets/vbb-full-logo.png";
import miniLogo from "../assets/vbb-picture-logo.png";

function Navbar({ loggedIn, setLoggedIn }) {
  function logOut() {
    setLoggedIn(false);
  }

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
        <img
          src={fullLogo}
          alt="Logo"
          style={{ width: "200px", marginLeft: "30px" }}
        />
      </a>
      <a
        id="mini-logo"
        href="https://www.villagebookbuilders.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={miniLogo} alt="Logo" style={{ width: "45px" }} />
      </a>
      <Link to="/" id="bar-header-link">
        <h1 id="bar-header" style={{ marginBottom: "-25px" }}>
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
              style={{ marginRight: "20px" }}
            >
              DONATE
            </a>
            <button
              className="btn btn-light signout-btn"
              type="button"
              onClick={logOut}
            >
              SIGN OUT
            </button>
          </div>
        ) : (
          <div className="btn-pair">
            <Link
              to="/register"
              className="btn btn-light register-btn"
              style={{ marginRight: "20px" }}
            >
              REGISTER
            </Link>
            <Link to="/" className="btn btn-light signin-btn">
              SIGN IN
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
