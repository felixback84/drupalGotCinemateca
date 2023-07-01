import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
// react-bootstrap components
import { 
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";

// compo
import ModalHouse from "../Components/ModalHouse"

const Houses = () => {
  const [dataApi, setDataFromApi] = useState(null);
  const [dataDrupal, setDataFromDrupal] = useState(null);

  useEffect(() => {
    fetchDataFromApi()
		//fetchDataFromDrupal()
  }, []);

  const fetchDataFromApi = async () => {
    try {
			// middle house
      const responseHouses = await fetch('https://anapioficeandfire.com/api/houses')
      const jsonHouses = await responseHouses.json()
			// hook
			setDataFromApi(jsonHouses)
    } catch (error) {
      console.log('Error:', error);
    }
  };

	const fetchDataFromDrupal = async () =>{
		try {
			const credentials = 'SmhvblNub3c6SmhvblNub3c='
			
			// middle house
      const responseHousesDrupal = await fetch('http://34.86.90.227/jsonapi/node/houses',
				{
					method: 'GET',
					headers: {
						'Access-Control-Allow-Origin':'*',
						'Content-Type': 'application/json',
						'Authorization': `Basic ${credentials}`
					},
				}
			)
			console.log({responseHousesDrupal})
      const jsonHousesDrupal = await responseHousesDrupal.json()
			// hook
			//setDataFromDrupal(jsonHousesDrupal)
    } catch (error) {
      console.log('Error:', error);
    }
	}

	const isOdd = (num) => {
		let div = num % 2
		if(div === 0){
			return "bg-warning"
		} else {
			return `bg-danger`
		}
	}

	const isOddLink = (num,item) => {
		let div = num % 2
		if(div === 0){
			return(
				<Link 
					to={
						{
							pathname:`/public/house-single`,
							state:{item}
						}
					}
					className="text-primary"
				>
					Read more
				</Link>
			)
		} else {
			return(
				<ModalHouse item={item}/>
			)
		}
	}

  return (
    <>
      <div
        className="full-page register-page section-image"
				data-color=""
        data-image={require("assets/img/full-screen-image-2.jpg")}
      >
        <div className="content d-flex align-items-center">
          <Container style={{marginTop:150,marginBottom:100}}>
						<Row>
							{dataApi ? (
								<>
									{dataApi.map((item,i) => (
										<Col lg="3" sm="6" key={i}>
											<Card 
												lg="3" 
												sm="6" 
												style={{height:350}} 
												className={isOdd(i)}
											>
												{/* header card */}
												<Card.Header className='pb-5'>
													<Row className="justify-content-center">
														<Col md="12">
															<div className="header-text">
																<Card.Title as="h2">
																	{item.name}
																</Card.Title>
																<Card.Subtitle as="h4">
																	{item.region}
																</Card.Subtitle>
															</div>
														</Col>
													</Row>
												</Card.Header>
												{/* body card */}
												<Card.Body>
													<Row>
														<Col xs="12">
															<div className="numbers">
																<Card.Subtitle as="h4">
																	Coat of arms:
																</Card.Subtitle>
																<p className="card-category text-white">{item.coatOfArms.substring(0, 30) + "..."}</p>	
															</div>
															{isOddLink(i,item)}
														</Col>
													</Row>
												</Card.Body>
											</Card>
										</Col>
									))}
								</>
							) : (
								<h1>Loading...</h1>
							)}
						</Row>

						{/* new houses */}
						<Row>
							{dataDrupal ? (
								<>
									{dataApi.map((item) => (
										<Col lg="3" sm="6">
											<Card lg="3" sm="6">
												{/* header card */}
												<Card.Header>
													<Row className="justify-content-center">
														<Col md="12">
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
												{/* body card */}
												<Card.Body>

												</Card.Body>
											</Card>
										</Col>
									))}
								</>
							) : (
								<p>Loading new ones...</p>
							)}
						</Row>
					</Container>
				</div>

				<div
          className="full-page-background"
          style={{
            backgroundImage: "url(" + require("assets/img/full-screen-image-2.jpg") + ")"
          }}
        ></div>
			</div>
		</>
  );
};

export default Houses;
