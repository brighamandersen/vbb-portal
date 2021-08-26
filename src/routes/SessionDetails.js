import React, { useContext, useState } from "react";

import { Link, useHistory, useParams } from "react-router-dom";
import SessionsContext from "../utils/SessionsContext";

function SessionDetails() {
  const { id } = useParams();
  let history = useHistory();
  const { sessions, updateSession, deleteSession } =
    useContext(SessionsContext);

  const session = sessions.filter((s) => s.id === id)[0];
  if (!session) history.push("/dashboard");

  const [confirmUnbooking, setConfirmUnbooking] = useState(false);
  const [didCommunicate, setDidCommunicate] = useState("");
  const [proceedToUnbook, setProceedToUnbook] = useState("");

  function unbookSession() {
    deleteSession(session.id);
    history.push("/dashboard");
  }

  return (
    <div className="dk-cream-bg">
      <div
        className="session-details-card col-card mx-auto p-4"
        style={{ borderRadius: "30px" }}
      >
        {!confirmUnbooking ? (
          <>
            <div className="d-block px-4 mb-4">
              <h5>Adjust Mentoring Session ({session?.id}):</h5>
              <h4 className="session-details-link session-details-location px-5">
                {session?.display}
              </h4>
            </div>
            <div className="d-block mb-2">
              <label className="ml-4">Adjust End Date:</label>
              <input
                type="date"
                className="mx-4"
                value={session?.endDate}
                onChange={(e) =>
                  updateSession(session?.id, "endDate", e.target.value)
                }
              />
            </div>
            <div className="d-block w-100 mb-2 px-4">
              <label>
                Add/Edit Notes: <br />
                (Mentee name, mentee interests, session notes, etc.)
              </label>
              <textarea
                className="w-100"
                rows="3"
                value={session?.notes}
                onChange={(e) =>
                  updateSession(session?.id, "notes", e.target.value)
                }
              />
            </div>
            <div className="d-block my-2 w-100 p-3">
              <Link to="/dashboard" className="btn px-4 goback-btn">
                GO BACK
              </Link>
              <button
                className="btn unbook-btn float-right"
                onClick={() => setConfirmUnbooking(true)}
              >
                UNBOOK SLOT
              </button>
              <br />
              <br />
            </div>
          </>
        ) : (
          <>
            <h5 style={{ paddingLeft: "20%" }}>Sure you want to unbook?</h5>
            <div className="d-block px-4 py-2 mb-4">
              <label>
                Have you communicated with your mentee and with your mentor
                advisors about this unbooking at least one week in advance?
              </label>
              <select
                value={didCommunicate}
                onChange={(e) => setDidCommunicate(e.target.value)}
              >
                <option value="..." style={{ display: "none" }}></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <br />
            <br />
            <div className="d-block px-4 mb-4">
              <label>
                Are you sure you wish to proceed with this unbooking?
              </label>
              <select
                value={proceedToUnbook}
                onChange={(e) => setProceedToUnbook(e.target.value)}
              >
                <option value="..." style={{ display: "none" }}></option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <br />
            <br />
            <div className="d-block my-2 w-100 p-3">
              <button
                className="btn px-4 goback-btn"
                onClick={() => setConfirmUnbooking(false)}
              >
                GO BACK
              </button>
              <button
                className="btn unbook-btn float-right"
                disabled={
                  !didCommunicate ||
                  didCommunicate === "no" ||
                  !proceedToUnbook ||
                  proceedToUnbook === "no"
                }
                onClick={unbookSession}
              >
                UNBOOK SLOT
              </button>
              <br />
              <br />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SessionDetails;
