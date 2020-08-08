import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import FadeInSection from "../FadeInSection";


export default class About1 extends Component {
    render() {
        return (
            <container-fluid>
            <div className="about1-chunk" id="about">
                <div className="about-title">
                    <Col > 
                            <h1>What we do</h1> 
                    </Col>
                </div>

                <div className="about1-images">
                <Row>
                    <Col md={4}> 
                       <img src={require("./images/combo-chart.png")} alt="combo chart" className="combo"/>
                    </Col>

                    <Col md={4}>
                        <img src={require("./images/setting.png")} alt="light-bulb" className="light-bulb"/> 
                    </Col>

                    <Col md={4}>
                        <img src={require("./images/robot.png")} alt="chatbot" className="bot"/>
                    </Col>
                </Row>
                </div>

                <div className="about1-text">
                    <Row>
                        <Col md={4}>
                                <p>Track your business data and display growth patterns on a beautiful, organized interface</p>
                        </Col>

                        <Col md={4}>
                            <p>Receive valuable, personalized tips to help grow your business based on performance trends</p>
                        </Col>

                        <Col md={4}>
                            <p> Access our collection of resources and advice whenever you want through Valeo, our devoted chatbot!</p>
                        </Col>
                    </Row>
                </div>
            </div>
            </container-fluid>
        )
    }
}