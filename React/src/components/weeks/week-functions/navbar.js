import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">VALEO DASHBOARD</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-dash">
          <Link to="/list" className="nav-link">View Logs</Link>
          </li>
          <li className="navbar-dash">
          <Link to="/create" className="nav-link">Create New Log</Link>
          </li>
          {/* <li className="navbar-item">
          <Link to="/profile" className="nav-link">Profile</Link>
          </li> */}
          {/* <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li> */}
        </ul>
        </div>
      </nav>
    );
  }
}