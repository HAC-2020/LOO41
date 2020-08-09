import React, { Component } from "react";
import "./home.css"; 
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';
// import LoginButton from './login';
// import LogoutButton from './logout';

export default class Home extends Component {
  render() {
    return (
      <container-fluid id="home">
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Work+Sans&display=swap" rel="stylesheet"></link>
        <Row id="page">
            <Col md={5} id="left"> 
                <div class="circle" />
                <div class="circle2" />
                    <div className="title">
                    <img src={require("./valeo.png")} alt="valeo" className="valeo"/>
                    <p className="slogan"><i>no business left behind.</i></p>
                    <Button variant="outline-success" className="start">GET STARTED</Button>
                    </div>
        
            </Col>
            <Col md={7} id="right">
                <div className="spacer"></div>
                <p className="mission">
                    inclusivity. sustainability. growth.
                </p>
                <p className="goal"><b>
                    Build your <b className="digital">digital</b> empire. </b>
                </p>
                <ul>
                    <li>Track your business data and display growth patterns on a beautiful, organized interface</li>
                    <li>Receive valuable, personalized tips to help grow your business based on performance trends</li>
                    <li>Access our collection of resources and advice whenever you want through Valeo, our devoted chatbot!</li>
                </ul>
            </Col>
        </Row>

      </container-fluid>

      
    ); 
  }
}


