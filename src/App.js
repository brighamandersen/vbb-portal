import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Booking from "./routes/Booking";
import Dashboard from "./routes/Dashboard";
import Register from "./routes/Register";
import Landing from "./routes/Landing";
import SessionDetails from "./routes/SessionDetails";
import SessionsContext from "./SessionsContext";
import { generateSessionId } from "./helpers";

const defaultSessions = [
  {
    id: generateSessionId(),
    display: "test1",
    endDate: "12-25-2021",
    notes: "",
  },
  {
    id: generateSessionId(),
    display: "test2",
    endDate: "FIXME",
    notes: "",
  },
];

function App() {
  const [sessions, setSessions] = useState(defaultSessions);

  return (
    <SessionsContext.Provider value={{ sessions }}>
      <Router>
        <Navbar />
        <div className="content">
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/booking" component={Booking} />
          <Route
            // exact
            path="/session-details/:id"
            component={SessionDetails}
          />
        </div>
        <footer>&copy; Village Book Builders | All Rights Reserved</footer>
      </Router>
    </SessionsContext.Provider>
  );
}

export default App;
