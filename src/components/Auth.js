import React from "react";
import { connect } from "react-redux";
import { authenticationAction } from "../customSlices/authslice";
import "./Auth.css";

const Auth = (props) => {
  const authAction = props.authenticationAction; 

  function handleSubmit(e) {
    e.preventDefault();
    authAction(true);
  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticationAction: (state) => dispatch(authenticationAction(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
