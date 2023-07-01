import React from "react";
import { Link, useLocation } from "react-router-dom";

// react-bootstrap components
import {  
  Navbar,
  Container,
} from "react-bootstrap";

function AuthNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const location = useLocation();
  return (
    <> 
      <Navbar
        className="position-absolute w-100"
        expand="lg"
        variant={collapseOpen ? "white" : "transparent"}
      >
        <Container className="justify-content-md-center">
          
          <div className="navbar-wrapper">
            <Navbar.Brand href="#pablo" onClick={(e) => e.preventDefault()}>
              <img src={require("assets/img/batch.png")} alt="got-logo" style={{height:100,width:100}}/>
              <h1 style={{marginTop:1}}>GOT</h1>
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default AuthNavbar;
