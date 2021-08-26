import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import menteeComputer from "../assets/vbb-mentee-computer.png";
import {
  BlankOption,
  BOOKING_SKELETON,
  LANGUAGES,
  LIBRARIES,
  SESSION_SKELETON,
  TIMES,
  TIME_ZONES,
  WEEKDAYS,
} from "../constants";
import { generateEndDate, generateSessionId } from "../helpers";
import SessionsContext from "../SessionsContext";

function Booking() {
  const [myBooking, setMyBooking] = useState(BOOKING_SKELETON);
  const { addSession } = useContext(SessionsContext);
  let history = useHistory();

  function updateBooking(attr, val) {
    const temp = { ...myBooking };
    temp[attr] = val;
    setMyBooking(temp);
  }

  function bookSession() {
    if (!window.confirm("Are you sure you want to book this session?")) return;

    let newBooking = { ...SESSION_SKELETON };
    newBooking.id = generateSessionId();
    newBooking.display = `${myBooking.language} on ${myBooking.weekday}s @ ${myBooking.time} (${myBooking.timeZone})`;
    newBooking.endDate = generateEndDate();
    addSession(newBooking);
    history.push("/dashboard");
  }

  const LabelWithSelect = ({ field, label, options }) => (
    <div className="label-select-box">
      <label htmlFor={field}>{label}:</label>
      <select
        name={field}
        value={myBooking[field]}
        onChange={(e) => updateBooking(field, e.target.value)}
      >
        {BlankOption}
        {field === "timeZone"
          ? TIME_ZONES.map((tz) => (
              <option key={tz.abbrev} value={tz.abbrev}>
                {tz.full}
              </option>
            ))
          : options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
      </select>
    </div>
  );

  LabelWithSelect.propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
  };

  return (
    <div className="twocol-container">
      <div id="booking-box">
        <h1 id="booking-header">Book Your Weekly Mentoring Session Below!</h1>
        <p>
          Select a day and time that you have available each week.
          <br />
          We'll match you with a child who needs you as their mentor.
        </p>
        <br />
        <LabelWithSelect
          field="language"
          label="Mentoring Language"
          options={LANGUAGES}
        />
        <LabelWithSelect
          field="timeZone"
          label="Your Time Zone"
          options={TIME_ZONES}
        />
        <LabelWithSelect
          field="library"
          label="Mentoring Library"
          options={LIBRARIES}
        />
        <LabelWithSelect
          field="weekday"
          label="Day of the Week"
          options={WEEKDAYS}
        />
        <LabelWithSelect field="time" label="Time of Day" options={TIMES} />
        <br />
        <br />
        <Link to="/dashboard" className="btn goback-btn">
          GO BACK
        </Link>
        <button
          className="btn btn-light float-right"
          id="requestsession-btn"
          disabled={
            !myBooking.language ||
            !myBooking.timeZone ||
            !myBooking.library ||
            !myBooking.weekday ||
            !myBooking.time
          }
          onClick={bookSession}
        >
          BOOK SESSION
        </button>
      </div>
      <img
        src={menteeComputer}
        id="booking-picture"
        alt="Pic"
        style={{ width: "600px", margin: "5vw" }}
      />
    </div>
  );
}

export default Booking;
