import React, { Component } from "react";
//import "./home.css"; 
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './login';
import LogoutButton from './logout';

export default class Home extends Component {
  render() {
    return (
      <container-fluid id="home">
       
        <div class="topnav">
          <LoginButton></LoginButton>
          <LogoutButton></LogoutButton>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
     
        <div>
          <h1>VALEO</h1>
          <h5>We're here to help you grow your business during these tough times. I just wrote something random here and it will be changed.</h5>
          <br></br>
          <a href='https://www.google.ca/' target="_blank" rel="noopener noreferrer">
            <Button variant="primary">GET STARTED</Button>{' '}
          </a>
        </div>
      </container-fluid>

      
    ); 
  }
}


