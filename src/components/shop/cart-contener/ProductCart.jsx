import React from 'react';
import "./productCart.css"
const ProductCart = (props) => {
    const {cartData}= props;

    return (
        <>
            <div>
                <h2 className='cart-title'>Order Summary</h2>
            </div>
            <div className="cart-info">
                <p>Selected Items: {cartData.length} </p>
            </div>
        </>
    );
};

export default ProductCart;