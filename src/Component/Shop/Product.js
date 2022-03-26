import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, image, price } = props.product;
    const { addToCardHandler, product } = props;
    return (
        <div className='col-md-4 p-3'>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text>
                        <h5>Price : {price} Tk.</h5>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Button onClick={() => addToCardHandler(product)} variant="outline-primary" className='w-100' size="lg">
                        Add To Card
                        <FontAwesomeIcon className='px-2' icon={faShoppingCart} />
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Product;