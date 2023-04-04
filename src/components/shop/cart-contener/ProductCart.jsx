import React from 'react';
import "./productCart.css"
const ProductCart = (props) => {
    const {cartData}= props;
    const totalQuantity  = cartData.reduce((pQuantity, cQuantity)=>cQuantity.quantity + pQuantity , 0);
    const totalPrice  = cartData.reduce((pPrice, cPrice)=>cPrice.price * cPrice.quantity + pPrice , 0);
    const totalShipping  = cartData.reduce((pShip, cShip)=>cShip.shipping * cShip.quantity + pShip , 0);
    const tax = (totalPrice/100)*7;
    return (
        <>
            <div>
                <h2 className='cart-title'>Order Summary</h2>
            </div>
            <div className="cart-info">
                <p>Selected Items: {totalQuantity } </p>
                <p>Total Price: ${totalPrice} </p>
                <p>Total Shipping Charge: ${totalShipping} </p>
                <p>Tax: ${tax.toFixed(2)} </p>
                <h5>Grand Total: ${(totalPrice+totalShipping+tax).toFixed(2)}</h5>
            </div>
        </>
    );
};

export default ProductCart;