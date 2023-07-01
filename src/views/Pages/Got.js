import React from "react";

// react-bootstrap components
import { 
  Badge,
  Button,
  Card,
  Form,
  Media,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "react-bootstrap";

function Got() {
  return (
    <>
      <div
        className="full-page register-page section-image"
        data-color="purple"
        data-image={require("assets/img/full-screen-image-1.jpg")}
      >
        <div className="content d-flex align-items-center">
          <Container style={{marginTop:100,marginBottom:100}}>
            <Card className="card-register card-plain text-center">
              <Card.Header>
                <Row className="justify-content-center">
                  <Col md="8">
                    <div className="header-text">
                      <Card.Title as="h2">
                        Game of Thrones
                      </Card.Title>
                      <Card.Subtitle as="h4">
                        Ice and Fire - George R. R. Martin
                      </Card.Subtitle>
                      <hr></hr>
                    </div>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row className="justify-content-center">
                  <Col md="8">
                    <Media>
                      <div className="media-left">
                        <div className="icon">
                          <i className="nc-icon nc-planet"></i>
                        </div>
                      </div>
                      <Media.Body>
                        <h4>Houses</h4>
                        <p>
                          Here you can write a feature description for your
                          dashboard, let the users know what is the value that
                          you give them.
                        </p>
                      </Media.Body>
                    </Media>
                    <Media>
                      <div className="media-left">
                        <div className="icon">
                        <i className="nc-icon nc-planet"></i>
                        </div>
                      </div>
                      <Media.Body>
                        <h4>Create your own House</h4>
                        <p>
                          Here you can write a feature description for your
                          dashboard, let the users know what is the value that
                          you give them.
                        </p>
                      </Media.Body>
                    </Media>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </div>
        <div
          className="full-page-background"
          style={{
            backgroundImage: "url(" + require("assets/img/full-screen-image-1.jpg") + ")"
          }}
        ></div>
      </div>
    </>
  );
}

export default Got;
