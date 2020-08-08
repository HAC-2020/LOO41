import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import FadeInSection from "../FadeInSection";


export default class About1 extends Component {
    render() {
        return (
            <container-fluid>
                
                    <Col className="about-title"> 
                        <div>
                            <h1><em>What we do</em></h1> 
                        </div>
                    </Col>

                    <Col className="about1-text">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </Col>

                    <br></br>
                    <br></br>
                    <br></br>
                    {/*however much space content takes up*/}

            </container-fluid>
        )
    }
}