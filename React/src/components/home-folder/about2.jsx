import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import FadeInSection from "../FadeInSection";

export default class About2 extends Component {
    render() {
        return (
            <container-fluid>
                <div className="about2-chunk">
                    <Col className="about-quote"> 
                        <div>
                            <h1>89% of all companies have already adopted a digital-first business strategy or plan to do so. </h1> 
                        </div>
                    </Col>

                    <Col className="forbes">
                        <h5>(Forbes Magazine)</h5>
                    </Col>

                <Row className="about2-row">
                    <Col className="about2-text" md={7}>
                        <div>
                            <p>Something about digitalization! Super important to help your business *thrive* :)</p>
                        </div>
                    </Col>

                    <div className="about2-images">
                    <Col>
                        <div> 
                            <img src={require("./images/digital-marketing.png")} alt="digitalization" className="digital"/> 
                        </div> 
                    </Col>
                    </div>
                </Row>
                </div>
            </container-fluid>
        )
    }
}