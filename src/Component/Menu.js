import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { data } from './data';
const Menu = () => {
    const [menuData, setMenuData] = useState(data);

    return (
        <div className='menu__'>
            {menuData.map((item) => (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Card.Title>{item.price}</Card.Title>
     
                    <Link className="btn btn-danger" to={`/detail/${item.id}`} >view detail </Link>
                </Card.Body>
            </Card>
            ))}
  </div>
    );
};

export default Menu;