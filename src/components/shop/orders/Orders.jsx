import React, { useState } from "react";
import ProductCart from "../cart-contener/ProductCart";
import "../Shop.css";
import "./Orders.css";
import { useLoaderData } from "react-router-dom";
import OrderedProduct from "./OrderedProduct";
import { removeFromDb } from "../../../utilities/fakedb";

const Orders = () => {
  const loaderCart = useLoaderData();
  const [cart, setCart] = useState(loaderCart);

  function deleteFromCart(id) {
    const clickItem = cart.find((pd) => pd.id === id);
    if (clickItem) {
      const remain = cart.filter((pd) => pd.id !== id);
      setCart(remain);
      removeFromDb(id);
    }
  }

  return (
    <div className="shop">
      <div className="order-contener">
        {cart.map((pd) => (
          <OrderedProduct
            product={pd}
            deleteFromCart={deleteFromCart}
            key={pd.id}
          />
        ))}
      </div>
      <ProductCart cartData={cart} />
    </div>
  );
};

export default Orders;
