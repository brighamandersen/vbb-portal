import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SessionsContext from "../SessionsContext";

function Dashboard() {
  const hasBooking = false; //FIXME TEMPORARY
  const { sessions } = useContext(SessionsContext);
  console.log("sessions", sessions);

  return (
    <div className="twocol-container dk-cream-bg">
      <div className="column col-card" id="mentoring-session-box">
        <h1 className="vbb-header">My Weekly Mentoring Session</h1>

        {sessions?.length > 1 ? (
          <ul>
            {sessions.map((session) => (
              <li className="mb-2 mr-2" key={session.id}>
                <Link
                  className="session-details-link"
                  to={`/session-details/${session.id}`}
                >
                  {session.display}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <h4 className="no-bookings">
              <b>Uh oh!</b> You don't have any mentoring sessions booked yet.
            </h4>
            <h4 className="make-booking-header">
              Press the green button below to make your first booking!
            </h4>
          </>
        )}
        <div className="btns">
          <a href="/booking/" className="btn btn-light book-btn dashboard-btn">
            + Book Mentoring Session
          </a>
          <br />
          <a
            className="btn btn-light gcal-btn dashboard-btn"
            href="https://calendar.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Sessions Calendar
          </a>
        </div>
      </div>
      <div className="column col-card" id="mentoring-resources-box">
        <h1 className="vbb-header">Mentoring Resources</h1>
        <div className="twocol-container" id="mentoring-resources-fields">
          <a
            className="btn btn-light dashboard-btn l1-btn"
            href="https://360.articulate.com/review/content/73bf3afe-47f9-4f9f-aa4d-70bf27fbe8d5/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mentor Training Module
          </a>
          <a
            className="btn btn-light dashboard-btn l5-btn"
            href="mailto:mentor@villagebookbuilders.org"
          >
            Contact your Mentor Advisor
          </a>
          {/*bold the contact*/}
          <a
            className="btn btn-light dashboard-btn l3-btn"
            href="https://docs.google.com/document/d/e/2PACX-1vR5-WnzhSJ88pfh2yctr7JuRXglAD55q8eluMPnLA1fTIyeKxxrGvL4r7D7wZh8mvd6WTL9GJJ1tkdD/pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mentoring Guide
          </a>
          <a
            className="btn btn-light dashboard-btn l6-btn"
            href="https://idroo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whiteboard
          </a>
          <a
            className="btn btn-light dashboard-btn l2-btn"
            href="https://www.khanacademy.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Khan Academy
          </a>
          <a
            className="btn btn-light dashboard-btn l4-btn"
            href="https://classroom.google.com/u/0/h"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Classroom
          </a>
          <a
            className="btn btn-light dashboard-btn l3-btn"
            href="https://www.facebook.com/groups/villagementors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Village Mentors FB Group
          </a>
          <a
            className="btn btn-light dashboard-btn l6-btn"
            href="https://apps.google.com/meet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Meets
          </a>
          <a
            className="btn btn-light dashboard-btn l7-btn"
            href="https://www.facebook.com/VillageBookBuilders"
            target="_blank"
            rel="noopener noreferrer"
          >
            VBB Facebook Page
          </a>
          <a
            className="btn btn-light dashboard-btn l8-btn"
            href="https://www.villagebookbuilders.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VBB Home Website
          </a>
        </div>
        <p className="questions-notice">
          <b>
            If you would like to change a mentoring session, have questions
            about mentoring, or ANY QUESTIONS, please
            <a href="mailto:mentor@villagebookbuilders.org">
              {" "}
              contact your mentor advisor{" "}
            </a>
            at mentor@villagebookbuilders.org! <br></br>
          </b>
        </p>{" "}
      </div>
    </div>
  );
}

export default Dashboard;
