import React, { useEffect, useState } from 'react';
import ProductCart from './cart-contener/ProductCart';
import ProductCard from './ProductCard/ProductCard';
import "./Shop.css"

const Shop = () => {
    const [cardsData , setCardsData ] = useState([]);

    useEffect(()=>{
        fetch("./fakeData/products.json")
        .then(res => res.json())
        .then(data => setCardsData(data))
        
    },[])
    const [cart, setCart]= useState([])
    const addToCart= (product) =>{
        setCart([...cart , product ])
    }

    return (
        <div className='shop'>
            <div className='shop-contener'>
                <div className="product-Items">
                {
                    cardsData.map(productData => <ProductCard 
                        key={productData.id} 
                        productData={productData}
                        addToCart = {addToCart}
                        ></ProductCard>)
                }
                </div>
            </div>
            <div className="cart-contener">
                <ProductCart cartData ={cart} ></ProductCart>
            </div>
        </div>
    );
};

export default Shop;