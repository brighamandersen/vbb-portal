import React from "react";
import { Link } from "react-router-dom";
import vbbInAction from "../assets/vbb-in-action.png";

function Landing() {
  return (
    <div className="twocol-container">
      <div className="column" id="signin-box">
        <h1 id="welcome-header">Welcome to VBB Portal!</h1>
        <h4 id="portal-purpose">
          Let's give hope to children through mentoring.
        </h4>
        <br />
        <div id="google-box">
          <Link className="btn btn-light signin-btn" to="/dashboard">
            SIGN IN
          </Link>
        </div>
        <br />
        <hr id="sep-bar" />
        <br />
        <div id="create-account-box">
          <p>Don't have an account with us yet?</p>
          <Link to="/register" className="btn btn-light register-btn">
            REGISTER
          </Link>
        </div>
      </div>
      <img src={vbbInAction} id="signin-picture" alt="Pic" />
    </div>
  );
}

export default Landing;
