import React from "react";

function Step4(props) {
  if (props.state.currentStep !== 4) {
    return null;
  }
  return (
    <div className="form-group step-form">
      <h5>
        Here's how you can support your mentee. <br />
        Your donation covers more than you think.
      </h5>
      <p>
        A monthly donation of $5 will allow your mentee to have regular access
        to a computer, headphones, Wi-Fi connection, a safe learning
        environment, and Khan Academy's award-winning educational programs.
      </p>
      <a
        className="btn btn-light donate-btn"
        type="button"
        href="https://www.villagebookbuilders.org/donate/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: "50px" }}
      >
        DONATE
      </a>
      <br />
      <br />
    </div>
  );
}

export default Step4;
