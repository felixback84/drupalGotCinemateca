import React, { useEffect, useState } from 'react';
// react-bootstrap components
import { 
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const YourHouse = () => {
  const [data, setData] = useState(null)

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('');


  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleSubmit = async () => {
    //event.preventDefault();
    try {
      const apiUrl = 'http://34.86.90.227/node?_format=json';
      const credentials = 'SmhvblNub3c6SmhvblNub3c='
      // const articleData = {
      //   data: {
      //     type: 'node--houses',
      //     attributes: {
      //       title: title,
      //       body: {
      //         value: body,
      //         format: 'plain_text'
      //       }
      //     } 
      //   }
      // };
      const articleData = {
        type:[
            {
                target_id:"houses"
            }
        ],
        title:[
            {   
                value:"My House on GOT 2023 - 3"
            }
        ],
        body:[
            {
                value:"Im a king now on 2024!!!"
            }
        ],
        field_region:[
            {
                value:"Melgar"
            }
        ]
    }

      const options = {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin':'*',
						'Content-Type': 'application/json',
						'Authorization': `Basic ${credentials}`
        },
        body: JSON.stringify(articleData)
      }
      const response = await fetch(apiUrl,options);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
      <div
        className="full-page register-page section-image"
        data-image={require("assets/img/full-screen-image-4.jpg")}
      >
        <div className="content d-flex align-items-center">
          <Container style={{marginTop:150,marginBottom:100}}>
            <Row>
              <Col md="9">
                <Card className="stacked-form">
                  <Card.Header>
                    <Card.Title as="h4">Create your own house</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form
                      //onSubmit={handleSubmit()}
                    >
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          onChange={(event) => setTitle(event.target.value)}
                          placeholder="Enter email"
                          //type=""
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Region</label>
                        <Form.Control
                          onChange={(event) => setBody(event.target.value)}
                          placeholder="Password"
                          //type="password"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Coat of arms</label>
                        <Form.Control
                          onChange={(event) => setBody(event.target.value)}
                          placeholder="Password"
                          // type="password"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Words</label>
                        <Form.Control
                          onChange={(event) => setBody(event.target.value)}
                          placeholder="Password"
                          //type="password"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Titles</label>
                        <Form.Control
                          onChange={(event) => setBody(event.target.value)}
                          placeholder="Password"
                          //type="password"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Current Lord</label>
                        <Form.Control
                          onChange={(event) => setBody(event.target.value)}
                          placeholder="Password"
                          //type="password"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Founded</label>
                        <Form.Control
                          onChange={(event) => setBody(event.target.value)}
                          placeholder="Password"
                          type="date"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Founder</label>
                        <Form.Control
                          onChange={(event) => setBody(event.target.value)}
                          placeholder="Password"
                          //type="password"
                        ></Form.Control>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                  <Card.Footer>
                    <Button   
                      onClick={handleSubmit}
                      className="btn-fill" 
                      type="submit" 
                      variant="info"
                    >
                      Create house
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="full-page-background"
          style={{
            backgroundImage: "url(" + require("assets/img/full-screen-image-4.jpg") + ")"
          }}
        ></div>
      </div>
    </>
  )
};

export default YourHouse;
