import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./week-functions/navbar"
import WeeksList from "./week-functions/weeks-list";
import EditWeek from "./week-functions/edit-week";
import CreateWeek from "./week-functions/create-week";
import ViewWeek from "./week-functions/view-week";
import MainGraph from "./week-functions/main-graph";
import EditUser from "./week-functions/edit-user";
import "./dash.css";

function Week() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={MainGraph} />
      <Route path="/edit/:id" component={EditWeek} />
      <Route path="/create" component={CreateWeek} />
      <Route path="/view/:id" component={ViewWeek} />
      <Route path="/list" component={WeeksList} />
      <Route path="/profile" component={EditUser} />
      {/* <Route path="/user" component={CreateUser} /> */}
      <div className="dash-space"></div>
      </div>        
    </Router>
  );
}

export default Week;