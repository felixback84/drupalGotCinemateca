import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import {
  Card,
  Media,
  Container,
  Row,
  Col,
  Modal
} from 'react-bootstrap';

function ModalHouse({item}) {
  const [show, setShow] = useState(false);
  const [currentLordName, setCurrentLordName] = useState(null);
  const [currentFounderName, setCurrentFounderName] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	useEffect(() => {
    currentLord(item.currentLord)
    founder(item.founder)
  }, []);
	
	const currentLord = async(url) => {
		try{
			const nameLord = await fetch(url)
			const nameFinal = await nameLord.json()
			setCurrentLordName(nameFinal.name)
		} catch (error) {
      console.log('Error:', error);
    }
	}

	const founder = async(url) => {
		try{
			const nameLord = await fetch(url)
			const nameFinal = await nameLord.json()
			setCurrentFounderName(nameFinal.name)
		} catch (error) {
      console.log('Error:', error);
    }
	}

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        <p className='text-primary ml-0'>Read more</p>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="content d-flex align-items-center">
            <Container style={{marginTop:100,marginBottom:100}}>
              <Card className="card-register card-plain text-center">
                <Card.Header>
                  <Row className="justify-content-center">
                    <Col md="12">
                      <div className="header-text">
                        <Card.Title as="h2">
                          {item.name}
                        </Card.Title>
                        <Card.Subtitle as="h4">
                          {item.region}
                        </Card.Subtitle>
                        <hr></hr>
                      </div>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row className="justify-content-center">
                    <Col md="12">
                      <Media>
                        <Media.Body>
                          <h4>Coat of Arms</h4>
                          <p>
                            {item.coatOfArms}
                          </p>
                        </Media.Body>
                      </Media>
                      <Media>
            
                        <Media.Body>
                          <h4>Words</h4>
                          <p>
                            {item.words}
                          </p>
                        </Media.Body>
                      </Media>
                      <Media>
                      
                        <Media.Body>
                          <h4>Titles</h4>
                          {
                            <div>
                              <Card.Body className="all-icons">
                              {
                    
                                item.titles.map((txt,i)=>(
                                  
                                  <p>{txt}</p>
                                    
                                ))
                              }
                              </Card.Body>
                            </div>
                          }
                        </Media.Body>
                      </Media>
                      <Media>
                        
                        <Media.Body>
                          <h4>Current Lord</h4>
                          <p>
                            {currentLordName}
                          </p>
                        </Media.Body>
                      </Media>

                      <Media>
                        
                        <Media.Body>
                          <h4>Founded</h4>
                          <p>
                            {item.founded}
                          </p>
                        </Media.Body>
                      </Media>

                      <Media>
                        
                        <Media.Body>
                          <h4>Founder</h4>
                          <p>
                            {currentFounderName}
                          </p>
                        </Media.Body>
                      </Media>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          </div>

        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default ModalHouse;