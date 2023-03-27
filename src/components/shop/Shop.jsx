import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import "./Shop.css"

const Shop = () => {
    const [cardsData , setCardsData ] = useState([]);

    useEffect(()=>{
        fetch("./fakeData/products.json")
        .then(res => res.json())
        .then(data => setCardsData(data))
        
    },[])

    return (
        <div className='shop'>
            <div className='shop-contener'>
                <div className="product-Items">
                {
                    cardsData.map(productData => <ProductCard 
                        key={productData.id} 
                        productData={productData}
                        ></ProductCard>)
                }
                </div>
            </div>
            <div className="cart-contener">

            </div>
        </div>
    );
};

export default Shop;