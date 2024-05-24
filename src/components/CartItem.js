import React from "react";
import "./Cart.css";
import { connect } from "react-redux";
import {incrementProduct} from "../customSlices/cartSlice";
import {decrementProduct} from "../customSlices/cartSlice";

const CartItem = (props) => {

  const product = props.product;

  const {incrementProductDispatch} = props;

  const {decrementProductDispatch} = props;

  

  function increaseCount(data){
    incrementProductDispatch(data);
  }

  function decreaseCount(data){
    decrementProductDispatch(data);
  }

  return (
    <div className="cartItem">
      <h2> {product.name}</h2>
      <p>${product.price} /-</p>
      {/* <p>x{product.quantity}</p> */}
      <article>Total ${product.total}</article>
      <button className="cart-actions" onClick={(e) => decreaseCount(product)}>
        -
      </button>
      <p>x{product.quantity}</p>
      <button className="cart-actions" onClick={(e) => increaseCount(product)} >
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch)=>{
  return {
    incrementProductDispatch: (state)=> dispatch(incrementProduct(state)),
    decrementProductDispatch: (state)=> dispatch(decrementProduct(state))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (CartItem);
