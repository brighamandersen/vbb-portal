import React, { Component } from "react";
import { Link } from "react-router-dom";
import vbbInAction from "../assets/vbb-in-action.png";

export class Landing extends Component {
  responseGoogle = (response) => {
    console.log("failure response", response);
    alert("Google authorization failed ", response);
  };
  validateGoogle = (response) => {
    this.props.onGauth(response.accessToken);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="twocol-container">
        <div className="column" id="signin-box">
          <h1 id="welcome-header">Welcome to VBB Portal!</h1>
          <h4 id="portal-purpose">
            Let's give hope to children through mentoring.
          </h4>
          <br />
          <div id="google-box">
            <Link
              className="btn btn-light signin-btn"
              type="button"
              href="/dashboard"
            >
              SIGN IN
            </Link>
          </div>
          <br />
          <hr id="sep-bar" />
          <br />
          <div id="create-account-box">
            <p
              style={{
                paddingLeft: "0px",
                fontSize: "20px",
                color: "#ff914d",
                fontWeight: "bolder",
              }}
            >
              Don't have an account with us yet?
            </p>
            <Link
              className="btn btn-light register-btn"
              type="button"
              href="/register"
            >
              REGISTER
            </Link>
          </div>
        </div>
        <img
          src={vbbInAction}
          id="signin-picture"
          alt="Pic"
          style={{ width: "600px", margin: "5vw" }}
        />
      </div>
    );
  }
}

export default Landing;
