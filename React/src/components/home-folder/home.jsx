import React, { Component } from "react";
import "./home.css"; 
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './login';
import LogoutButton from './logout';

export default class Home extends Component {
  render() {
    return (
      <container-fluid id="home">
       <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Work+Sans&display=swap" rel="stylesheet"></link>

        <div className="topnav">
          <LoginButton></LoginButton>
          <LogoutButton></LogoutButton>
          <a href="#contact">Contact</a>
          <a href="home.jsx#about">About</a>
        </div>
     
     <div className="home-chunk">
     <Row>
        <div className="title">
          <Col>
          <h1>VALEO</h1>
          </Col>
        </div>
        
        <div className="home">
          <Col>
            <img src={require("./images/leaves.png")} alt="thrive" className="leaves"/>
          </Col>
        </div>
    
        <div className="home-text">
          <Col>
          <h5> A reliable tool to track your business progress and improve. Count on us to help you grow your business during these tough times.</h5>
          </Col>
        </div>
      </Row>

        <div  className="start-button">
         <Col>
          <a href='https://www.google.ca/' target="_blank" rel="noopener noreferrer">
            <Button variant="primary">GET STARTED</Button>{' '}
          </a>
          </Col>
        </div>
      </div>
      </container-fluid>

      
    ); 
  }
}


