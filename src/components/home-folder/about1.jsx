import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import FadeInSection from "../FadeInSection";


export default class About1 extends Component {
    render() {
        return (
            <container-fluid>
            <div className="about1-chunk">
                <div className="about-title">
                    <Col > 
                            <h1>What we do</h1> 
                    </Col>
                </div>

                <div className="about1-text">
                    <Row>
                        <Col md={4}>
                                <p>Track your business data and display growth patterns in a beautiful, organized interface</p>
                        </Col>

                        <Col md={4}>
                            <p>Provide you with valuable tips to help grow your business based on performance trends</p>
                        </Col>

                        <Col md={4}>
                            <p>Something else that sounds cool to allow you to access our collection of resources and advice whenever you want.</p>
                        </Col>
                    </Row>
                </div>
            </div>
            </container-fluid>
        )
    }
}