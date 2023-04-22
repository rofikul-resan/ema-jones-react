import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import ProductCart from "./cart-contener/ProductCart";
import ProductCard from "./ProductCard/ProductCard";
import "./Shop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Shop = () => {
  const [cardsData, setCardsData] = useState([]);
  const [cart, setCart] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    fetch("./fakeData/products.json")
      .then((res) => res.json())
      .then((data) => setCardsData(data));
  }, []);

  useEffect(() => {
    const localDB = getShoppingCart();
    const selectedProduct = [];
    for (const id in localDB) {
      const addedProduct = cardsData.find((product) => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = localDB[id];
        selectedProduct.push(addedProduct);
        setCart(selectedProduct);
      }
    }
  }, [cardsData]);

  const addToCart = (product) => {
    const isEexist = cart.find((pd) => pd.id === product.id);
    if (!isEexist) {
      product.quantity = 1;
      setCart([...cart, product]);
    } else {
      isEexist.quantity = isEexist.quantity + 1;
      const remain = cart.filter((pb) => pb.id !== product.id);
      setCart([...remain, isEexist]);
    }
    addToDb(product.id);
  };

  return (
    <div className="shop">
      <div className="shop-contener">
        <div className="product-Items">
          {cardsData.map((productData) => (
            <ProductCard
              key={productData.id}
              productData={productData}
              addToCart={addToCart}
            ></ProductCard>
          ))}
        </div>
      </div>
      <ProductCart cartData={cart}>
        <button
          onClick={() => navigation("/order-Review")}
          className="proceed-btn"
        >
          Review Order <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </ProductCart>
    </div>
  );
};

export default Shop;
