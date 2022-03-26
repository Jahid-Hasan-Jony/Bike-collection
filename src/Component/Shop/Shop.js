import React, { useEffect, useState } from 'react';
import Product from './Product';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [selectedCard, setSelectedCard] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    const addToCardHandler = (clickProduct) => {
        const newSelectedCard = [...selectedCard, clickProduct]
        setSelectedCard(newSelectedCard)
    }
    return (
        <div className='row container-fluid'>
            <div className='col-md-4 py-4 order-md-2'>
                <Card className='bg-light' style={{ padding: '20px' }}>
                    <h2>Selected Bike :</h2>
                    {selectedCard.map(product => {
                        return <div className='d-flex align-items-center my-2 border'>
                            <div style={{ width: '100px' }}>
                                <img style={{ width: '100%' }} shape="thumbnail" alt={product.name} src={product.image} />
                            </div>
                            <div className='px-3'>
                                <h4>{product.name}</h4>
                            </div>
                        </div>

                    })}
                    <div className="d-grid gap-2">
                        <Button variant="outline-success" size="lg">
                            CHOOSE 1 FOR ME
                        </Button>
                        <Button variant="outline-primary" size="lg">
                            CHOOSE AGAIN
                        </Button>
                    </div>
                </Card>
            </div>
            <div className='col-md-8 order-md-1'>
                <div className='row p-2'>
                    {products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCardHandler={addToCardHandler}
                    />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;