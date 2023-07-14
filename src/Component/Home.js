import React from 'react';
import SliderImage from './SliderImage';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const Home = () => {
  return (
    <>
      <SliderImage />
      <br/><br/><br/><br/><br/><br/>
      <div className='home__ex'>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Image className='img__home' src="https://res.ringameal.com/Uploads/1070/1437269a-8601-4e86-b82c-998f2d398085.jpg" thumbnail />
            </Col>
            <Col xs={12} md={6}>
              <h1>About Us</h1><br />
              <p>
                Rolls Vietnamese Grill offers traditional Vietnamese street food using the best ingredients, fresh greens and grilled beef, pork, chicken, shrimp, and salmon wrapped in thin rice paper. A truly healthy and delicious choice.<br/><br/><br/>
                We are located inside 99 Ranch Market.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <br/><br/><br/><br/><br/><br/>
      <div className='home__ex'>
        <Container>
          <Row>
            <Col xs={12} md={6}>
            <h1>Our Menu</h1><br />
              <p>
              Find your favorite food! We are very pleased to<br/> welcome you as guests in our restaurant.<br/><br></br>
              
            <Nav.Link href="/menu">
                <Button variant="outline-danger">See More</Button>
            </Nav.Link> 
              </p>
            </Col>
            <Col xs={12} md={6}>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.ringameal.com/Uploads/1070/2f56c0d7-9f1d-4093-b65c-2cd748769b6f.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.ringameal.com/Uploads/1070/1437269a-8601-4e86-b82c-998f2d398085.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.ringameal.com/Uploads/1070/1437269a-8601-4e86-b82c-998f2d398085.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
             
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
