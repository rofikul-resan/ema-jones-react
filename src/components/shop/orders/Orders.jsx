import React, { useState } from "react";
import ProductCart from "../cart-contener/ProductCart";
import "../Shop.css";
import "./Orders.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import OrderedProduct from "./OrderedProduct";
import { deleteShoppingCart, removeFromDb } from "../../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCardAlt } from "@fortawesome/free-solid-svg-icons";

const Orders = () => {
  const loaderCart = useLoaderData();
  const [cart, setCart] = useState(loaderCart);
  const navigation = useNavigate();

  function deleteFromCart(id) {
    const clickItem = cart.find((pd) => pd.id === id);
    if (clickItem) {
      const remain = cart.filter((pd) => pd.id !== id);
      setCart(remain);
      removeFromDb(id);
    }
  }

  function clearCartData() {
    setCart([]);
    deleteShoppingCart();
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
      <ProductCart clearCartData={clearCartData} cartData={cart}>
        <button onClick={() => navigation("/checkout")} className="proceed-btn">
          Proceed Checkout <FontAwesomeIcon icon={faCreditCardAlt} />
        </button>
      </ProductCart>
    </div>
  );
};

export default Orders;
