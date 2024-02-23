import React from "react";
import { connect } from "react-redux";
import {buyCake, returnCake} from './Redux'

function cakeContainer(props) {
  return (
    <div>
      <h1>No. Of cakes - {props.numOfCakes}</h1>
      <button onClick={props.buyCakes}>Buy a cake</button>
      <button onClick={props.returnCakes}>Return a cake</button>
    </div>
  );
}
const mapStateToProps= state => {
  return {
    numOfCakes : state.cake.numOfCakes
  }
}
const mapDispatchToProps = dispatch => {
  return {
    buyCakes : () => dispatch(buyCake()),
    returnCakes : () => dispatch(returnCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer);
