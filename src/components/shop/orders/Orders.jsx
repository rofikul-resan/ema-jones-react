import React from "react";
import ProductCart from "../cart-contener/ProductCart";
import "../Shop.css";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const cart = useLoaderData();

  return (
    <div className="shop">
      <h1>this is order page product {}</h1>
      <ProductCart cartData={cart} />
    </div>
  );
};

export default Orders;
