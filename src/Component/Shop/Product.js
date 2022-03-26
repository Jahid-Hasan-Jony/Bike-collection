import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Product = (props) => {
    const { name, image, price } = props.product;
    const { addToCardHandler, product } = props;
    return (
        <div className='col-md-4 p-3'>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price : {price} Tk.
                    </Card.Text>
                    <Button onClick={() => addToCardHandler(product)} variant="primary">Add To Card</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;