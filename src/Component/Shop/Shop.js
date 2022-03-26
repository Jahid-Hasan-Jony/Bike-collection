import React, { useEffect, useState } from 'react';
import Product from './Product';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='row container-fluid'>
            <div className='col-sm-6'>
                <div className='row p-2'>
                    {products.map(product => <Product
                        key={product.id}
                        product={product}
                    />)
                    }
                </div>
            </div>
            <div className='col-sm-6 py-4'>
                <Card style={{ padding: '20px' }}>
                    <h2>Selected Bike :</h2>
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
        </div>
    );
};

export default Shop;