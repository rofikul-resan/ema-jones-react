import React from 'react';
import "./productCard.css";


const ProductCard = ({productData}) => {
    const { img ,price,seller,name} = productData;
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            
        </div>
    );
};

export default ProductCard;