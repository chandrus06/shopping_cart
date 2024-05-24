import React from "react";
import { connect } from 'react-redux';
import "./Product.css";
import { addToCart } from "../customSlices/cartSlice";

const Product = (props) => {
  const cart = props.addToCart;

  function addProductToCart(id,name,price){
    const product = {
      id: id,
      name: name,
      quantity: 1,
      total: 1 * price,
      price: price
    }
    cart(product);
  }

  return (
    <div className="card">
      <img src={props.imgURL} alt={props.name} />
      <h2>{props.name}</h2>
      <p>$ {props.price}</p>
      <button onClick={()=> addProductToCart(props.id, props.name,props.price)}>Add to cart</button>
    </div>
  );
};

const mapStateToProps = (state)=> {
  return state;
}

const mapActionToProps = (dispatch) =>{
  return {
    addToCart: (state) => dispatch(addToCart(state))
  };
}

export default connect(mapStateToProps, mapActionToProps) (Product);
