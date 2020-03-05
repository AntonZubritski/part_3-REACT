import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const Counter = ({inc, dec, rnd, counter}) => {
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
      <button onClick={rnd}>RND</button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    counter: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch(actions.inc()),
    dec: () => dispatch(actions.dec()),
    rnd: () => dispatch(actions.rnd())
  };
};

export default connect(mapStateToProps, actions)(Counter);