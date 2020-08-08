import React, { Component } from "react";
//import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import FadeInSection from "../FadeInSection";

export default class About2 extends Component {
    render() {
        return (
            <container-fluid>

                    <Col className="about-quote"> 
                        <div>
                            <h1>Digitally mature companies are 23% more profitable than their less mature peers.</h1> 
                        </div>
                    </Col>

                    <Col className="about2-text" md={7}>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </Col>

                    <Col className="graph-image">
                        <div>
                            <img src="./images/pie-chart.png" alt="charts graphic"/>
                          {/*Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>*/}
                        </div>
                                        
                    </Col>
    
            </container-fluid>
        )
    }
}