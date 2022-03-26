import React, { useEffect, useState } from 'react';
import Product from './Product';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import SelectedProducts from './SelectedProducts';


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

    const removeSelectedProducts = () => {
        setSelectedCard([])
    }

    const randomSelectOne = () => {
        setSelectedCard([selectedCard[Math.floor(Math.random() * selectedCard.length)]])
    }
    return (
        <div className='row container-fluid'>
            <div className='col-md-4 py-4 order-md-2'>
                <Card className='bg-light' style={{ padding: '20px' }}>
                    <h2>Selected Bike :</h2>
                    {selectedCard.map(product => <SelectedProducts product={product} />)}
                    <div className="d-grid gap-2">
                        <Button onClick={randomSelectOne} variant="outline-success" size="lg">
                            CHOOSE 1 FOR ME
                        </Button>
                        <Button onClick={removeSelectedProducts} variant="outline-primary" size="lg">
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