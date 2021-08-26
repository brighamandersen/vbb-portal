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

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/booking" component={Booking} />
        <Route
          exact
          path="/sessiondetails/:sessionid"
          component={SessionDetails}
        />
      </div>
      <footer>&copy; Village Book Builders | All Rights Reserved</footer>
    </Router>
  );
}

export default App;
