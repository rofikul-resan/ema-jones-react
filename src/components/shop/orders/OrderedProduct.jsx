import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Orders.css";
const OrderedProduct = ({ product, deleteFromCart }) => {
  const { price, quantity, name, img, id } = product;
  return (
    <div>
      <div className="order-item">
        <img src={img} alt="" />
        <div className="info-box">
          <div className="order-info">
            <h3>{name}</h3>
            <p>
              Price <span className="green-text">${price}</span>
            </p>
            <p>
              <small>
                Quantity : <span className="green-text"> {quantity}</span>
              </small>
            </p>
          </div>
          <button onClick={() => deleteFromCart(id)}>
            <FontAwesomeIcon icon={faTrashAlt} className="delete-btn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderedProduct;
