import React, { useEffect } from "react";
import "./Cart.css";

import { connect } from 'react-redux'
const Cart = (props) => {
 
  const addCount = props.cartReducer;

  return (
    <div className="cartIcon">
      <h3>Cart: {addCount.totalCart.length} Items</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps) (Cart);
