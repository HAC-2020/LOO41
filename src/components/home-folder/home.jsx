import React, { Component } from "react";
//import "./home.css"; 
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
  render() {
    return (
      <container-fluid id="home">
        <div className="topnav">
          <a href="#home">Log In</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
     
        <div>
          <Col className="title">
          <br></br>
          <h1>VALEO</h1>
          </Col>
        </div>
        
        <div>
          <Col className="home-text">
          <h5>We're here to help you grow your business during these tough times. I just wrote something random here and it will be changed.</h5>
          </Col>
          <br></br>
        </div>

        <div>
         <Col>
          <a href='https://www.google.ca/' target="_blank" rel="noopener noreferrer">
            <Button variant="primary">GET STARTED</Button>{' '}
          </a>
          </Col>
        </div>
      </container-fluid>

      
    ); 
  }
}


