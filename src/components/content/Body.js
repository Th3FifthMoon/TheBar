import React from "react";
import { useState } from "react";
import { Container, Col, Row, ListGroup, ListGroupItem } from "react-bootstrap";
import barmenu from '../../data/barmenu';
import DrinkItems from "./DrinkItems";

export default function Body() {
    const [menuCategory, setCategory] = useState('Beer');
    var theMenu = [];
  
    for (const [key, index] of Object.entries(barmenu)) {
      theMenu.push(
        <ListGroupItem key={index} className={ (key == menuCategory) ? "list-group-item-secondary text-center" : "" } onClick={() => {
          setCategory(key); }
        }
      >{key}</ListGroupItem>);   
    }

    return (
        <div className="wrapper">
            <Container fluid>
                <Row>
                    <Col>

                    </Col>
                    <Col className="my-5 align-left">
                        <DrinkItems menuItems={barmenu[menuCategory]} />
                    </Col>
                    <Col>
                        <Container className="px-4">
                            <Row className="gx-5">
                                <Col className="my-5 mx-3">
                                <ListGroup className="list-group">
                                    {theMenu}
                                </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}