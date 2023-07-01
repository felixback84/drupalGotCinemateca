import React from "react";
import { Link, useLocation } from "react-router-dom";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Col,
} from "react-bootstrap";

function AdminNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const location = useLocation();
  return (
    <>
      <Navbar
        className="position-absolute w-100"
        expand="lg"
        variant={collapseOpen ? "white" : "transparent"}
      >
        <Container>
          <div className="navbar-wrapper">
            <Navbar.Brand>
              <img src={require("assets/img/batch.png")} alt="got-logo" style={{height:100,width:100}}/>
              <h1 style={{marginTop:1}}>GOT</h1>
            </Navbar.Brand>
          </div> 
          <button
            className="navbar-toggler navbar-toggler-right border-0"
            type="button"
            onClick={() => setCollapseOpen(!collapseOpen)}
          >
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
          </button>
          <Navbar.Collapse className="justify-content-end" in={collapseOpen}>
            <Nav navbar>
            <Nav.Item className="mr-1">
              <Nav.Link to="/public/got" as={Link}>
                  
                  Game Of Thrones
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="mr-1">
                <Nav.Link to="/public/houses" as={Link}>
                  
                  Houses
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link to="/public/yourhouse" as={Link}>
                  Your house
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
