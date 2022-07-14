import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laquinta_logo from "../../img/laquinta_logo.png";

export default function Footer(){
    return (
        <footer className="mt-auto flex mb-0 pb-0 flex fixed-bottom">
            <Container fluid className="bg-light mb-0 pb-0">                   
                <Row>
                    <Col></Col>
                    <Col>
                        <p className="text-center my-4">317 N G St. Madera, CA 93637</p>
                    </Col>
                    <Col>
                    <img src={ laquinta_logo } className="img-fluid float-end" alt="la quinta logo" />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}