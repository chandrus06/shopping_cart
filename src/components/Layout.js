import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItem from './CartItems';
import { connect } from 'react-redux';
const Layout = (props) => {
  // let total = 100;

  const total = props.cartReducer;

  let totalAmount = total.totalAmount;

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        <CartItem/>
        <div className="total-price">
          <h3>Total: ${ totalAmount }</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return state;
};


export default connect(mapStateToProps) (Layout);
