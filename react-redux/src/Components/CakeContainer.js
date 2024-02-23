import React, { useState } from "react";
import { connect } from "react-redux";
import {buyCake, returnCake} from './Redux'

function CakeContainer(props) {
  const [num, setNum] = useState(1)
  return (
    <div>
      <h1>No. Of cakes - {props.numOfCakes}</h1>
      <input type='number' value={num} onChange={ (e) => setNum(e.target.value)} />
      <button onClick={() => props.buyCakes(parseInt(num))}>Buy {num} cake</button>
      <button onClick={() => props.returnCakes(parseInt(num))}>Return {num} cake</button>
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
    buyCakes : (number) => dispatch(buyCake(number)),
    returnCakes : (number) => dispatch(returnCake(number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
