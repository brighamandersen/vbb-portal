import React from "react";
import { Link } from "react-router-dom";

function SuccessStep(props) {
  if (props.state.currentStep !== 6) {
    return null;
  }
  return (
    <div className="form-group step-form">
      <p>Thanks for applying! Now you have access to your Dashboard!</p>
      <Link to="/dashboard" className="btn btn-light signin-btn">
        GO TO DASHBOARD
      </Link>
    </div>
  );
}

export default SuccessStep;
