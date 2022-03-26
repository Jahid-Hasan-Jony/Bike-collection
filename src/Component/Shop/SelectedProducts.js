import React from 'react';

const SelectedProducts = (props) => {
    const { product } = props
    return (
        <div className='d-flex align-items-center my-2 border'>
            <div className='px-2' style={{ width: '120px' }}>
                <img style={{ width: '100%' }} alt={product.name} src={product.image} />
            </div>
            <div className='px-3'>
                <h4>{product.name}</h4>
            </div>
        </div>
    );
};

export default SelectedProducts;