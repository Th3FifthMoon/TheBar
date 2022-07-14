import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Header(){
    return (
        <Container fluid className="bg-light">
            <Row>
                <Col><h1 className="text-center l-green my-2">BrightSide Bar</h1></Col>
            </Row>
        </Container>

    )
}