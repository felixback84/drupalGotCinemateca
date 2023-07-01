import React, { useState } from 'react';
// router
import { Link } from 'react-router-dom';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar, 
  Nav,
  Container,
  Col,
  Form
} from "react-bootstrap";

function LockScreenPage() {
  
  return (
    <>
      <div
        className="full-page lock-page"
        data-color="blue"
        data-image={require("assets/img/bg4.jpg")}
      >
        <div className="content d-flex align-items-center">
          <Container>
            <Col className="mx-auto" lg="4" md="8">
              <Card className="card-lock text-center card-plain">
                <Card.Header>
                  <div className="author">
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/stark.png")}
                    ></img>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title as="h4">Jhon Snow</Card.Title>
                  <Form.Group>
                    <Form.Control
                      placeholder="Enter Password"
                      type="password"
                    ></Form.Control>
                  </Form.Group>
                </Card.Body>
                <Card.Footer>
                  <Button
                    className="btn-round"
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault()
                    }}
                    variant="info"
                  >
                    <Link to="/public/got">Unlock</Link>
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Container>
        </div>

        <div
          className="full-page-background"
          style={{
            backgroundImage: "url(" + require("assets/img/bg4.jpg") + ")"
          }}
        ></div>
      </div>
    </>
  );
}

export default LockScreenPage;
