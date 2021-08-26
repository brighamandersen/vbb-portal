import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import Booking from "./routes/Booking";
import Dashboard from "./routes/Dashboard";
import Register from "./routes/Register";
import Landing from "./routes/Landing";
import SessionDetails from "./routes/SessionDetails";
import SessionsContext from "./utils/SessionsContext";
import useLocalStorage from "./utils/useLocalStorage";

function App() {
  const [sessions, setSessions] = useLocalStorage("sessions", []);

  function addSession(newSession) {
    setSessions([...sessions, newSession]);
  }

  function updateSession(id, paramToChange, newValue) {
    const temp = [...sessions];
    const index = sessions.findIndex((obj) => obj.id === id);
    temp[index][paramToChange] = newValue;
    setSessions(temp);
  }

  function deleteSession(id) {
    const temp = sessions.filter((s) => s.id !== id);
    setSessions(temp);
  }

  return (
    <SessionsContext.Provider
      value={{ sessions, addSession, updateSession, deleteSession }}
    >
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
