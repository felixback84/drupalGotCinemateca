import React, {useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';

// react-bootstrap components
import { 
  Card,
  Media,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const SingleHouse = () => {

	const [currentLordName, setCurrentLordName] = useState(null);
	const [currentFounderName, setCurrentFounderName] = useState(null);
	const location = useLocation();
	const { item } = location.state;
	
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
      <div
        className="full-page register-page section-image"
        data-image={require("assets/img/full-screen-image-3.jpg")}
      >
        <div className="content d-flex align-items-center">
          <Container style={{marginTop:100,marginBottom:100}}>
            <Card className="card-register card-plain text-center">
              <Card.Header>
                <Row className="justify-content-center">
                  <Col md="8">
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
                  <Col md="8">
                    <Media>
                      <div className="media-left">
                        <div className="icon">
                          <i className="nc-icon nc-planet"></i>
                        </div>
                      </div>
                      <Media.Body>
                        <h4>Coat of Arms</h4>
                        <p>
                          {item.coatOfArms}
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
                        <h4>Words</h4>
                        <p>
                          {item.words}
                        </p>
                      </Media.Body>
                    </Media>
                    <Media>
                      <div className="media-left">
                        <div className="icon">
                          <i className="nc-icon nc-circle-09"></i>
                        </div>
                      </div>
                      <Media.Body>
                        <h4>Titles</h4>
                        {
													<div>
														
														{
									
															item.titles.map((txt,i)=>(
                                
																		<p>{txt}</p>
																	
															))
														}
														
													</div>
												}
                      </Media.Body>
                    </Media>
										<Media>
                      <div className="media-left">
                        <div className="icon">
                        <i className="nc-icon nc-planet"></i>
                        </div>
                      </div>
                      <Media.Body>
                        <h4>Current Lord</h4>
												<p>
													{currentLordName}
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
                        <h4>Founded</h4>
												<p>
													{item.founded}
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
        <div
          className="full-page-background"
          style={{
            backgroundImage: "url(" + require("assets/img/full-screen-image-3.jpg") + ")"
          }}
        ></div>
      </div>
    </>
  );
};

export default SingleHouse;


