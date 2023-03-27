import React from 'react';
import "./productCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const ProductCard = ({productData , addToCart}) => {
    const { img ,price,seller,name, ratings} = productData;
    return (
        <div className='product-card'>
            <div>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <h4>Price : ${price}</h4>
            </div>
            <div className='product-rating'>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} star </p>
            </div>
            <button onClick={()=> addToCart(productData)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default ProductCard;