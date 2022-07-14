import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laquinta_logo from "../../img/laquinta_logo.png";

export default function Footer(){
    var date = new Date()
    var currentTime = date.toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles"
    });

    var amPM = currentTime.split(' ');
    var timeparts = currentTime.split(':');
    var OpenOrClosed = (amPM[1] == 'PM') && (( timeparts[0] > 4  && timeparts[0] < 9 ) || ( timeparts[0] == 4 && timeparts[1] >= 30)) ? 
                    <h5 className="text-center mt-3 l-green">OPEN</h5> : <h5 className="text-center mt-3 text-danger">CLOSED</h5>;


    return (
        <footer className="mt-auto flex mb-0 pb-0 flex fixed-bottom">
            <Container fluid className="bg-light mb-0 pb-0">                   
                <Row>
                    <Col>
                        <Container>
                            <Col>
                            <Row>
                                {OpenOrClosed}
                            </Row>
                            <Row>
                                <p className="text-center fs-6 my-0">Mon - Sat</p>
                            </Row>
                            <Row>
                                <p className="text-center fs-6 my-0">4:30 PM - 9:00 PM</p>
                            </Row>
                            </Col>
                        </Container>
                    </Col>
                    <Col>
                        <p className="text-center my-4 fs-10">317 N G St. Madera, CA 93637</p>
                    </Col>
                    <Col>
                    <img src={ laquinta_logo } className="img-fluid float-end" alt="la quinta logo" />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}