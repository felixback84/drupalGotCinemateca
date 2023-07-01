import React from "react";

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

function AuthFooter() {
  return (
    <>
      <footer className="footer position-absolute fixed-bottom">
        <Container>
          <nav>
            <ul className="footer-menu d-flex justify-content-center">
              <li>
                <a className="m-0" href="https://cinematecadebogota.gov.co/" onClick={(e) => e.preventDefault()}>
                  Cinemateca
                </a>
              </li>
              <li>
                <a className="m-0" href="https://github.com/felixback84" onClick={(e) => e.preventDefault()}>
                  Github
                </a>
              </li>
  
            </ul>
            <p className="copyright text-center m-0">
              © {new Date().getFullYear()}{" "}
              <a href="https://www.linkedin.com/in/carlos-alberto-talero-jacome-5a348241/">Carlos A. Talero J</a>, made with
              love for a better web
            </p>
          </nav>
        </Container>
      </footer>
    </>
  );
}

export default AuthFooter;
