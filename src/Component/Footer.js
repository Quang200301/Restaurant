import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Footer = () => {
    const menuItems = ['Gallery', 'Home', 'Our Menu', 'Privacy Notice', 'Refund Policy', 'Contact'];
    const openingItems = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
    const timeopening=['9:00 AM - 5:00 PM', '9:00 AM - 5:00 PM', '9:00 AM - 5:00 PM', '9:00 AM - 5:00 PM', '9:00 AM - 5:00 PM', '9:00 AM - 5:00 PM', 'Closed'];
    

    return (
        <div className='footer'>
        <Container >
            <Row>
                <Col xs={12} md={3}>
                    <Image src="https://res.ringameal.com/Uploads/1070/1437269a-8601-4e86-b82c-998f2d398085.jpg" thumbnail />
                </Col>
                <Col xs={12} md={3}>
                    <h4>Menu</h4>
                    {menuItems.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </Col>
                <Col xs={12} md={3}>
                <h4>Opening Hours</h4>
                    <Row>
                        <Col > 
                            {openingItems.map((item) => (
                                <p>{item}</p>
                                ))}
                        </Col>
                        <Col> 
                            {timeopening.map((item) => (
                                <p>{item}</p>
                                ))}
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={3}>
                    <h4>Get In Touch</h4>
                    <p> <img className='iconphone' src='https://cdn-icons-png.flaticon.com/128/5948/5948151.png'/> <span>(703) 910-3888</span></p>
                    <p><img className='iconphone' src='https://cdn-icons-png.flaticon.com/128/10903/10903041.png'/><span>Shops at Fairfax, 10780 Fairfax Blvd, Fairfax VA 22030, USA</span> </p>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Footer;
