import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { connect } from 'react-redux';
// import { authenticationAction } from '../customSlices/authslice';


function App(props) {

  
  const { authentication } = props.authReducer;
  return (
    <div className="App">
      {!authentication ? <Auth /> : <Layout /> }     
    </div>
  );
}

const mapStateToProps = (state)=> {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  // return {
  //   authenticationAction: () =>  dispatch(authenticationAction())
  // }
}

export default connect(mapStateToProps) (App);
