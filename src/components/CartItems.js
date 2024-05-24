import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { connect } from "react-redux";

const CartItems = (props) => {
  const productsList = props.cartReducer;
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {productsList.totalCart.length > 0
          ? productsList.totalCart.map((value,index) => {
            return (
              <li key={index}>
                <CartItem   product={value} />
              </li>
            )
    
            })
          : "Empty Value"}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(CartItems);
