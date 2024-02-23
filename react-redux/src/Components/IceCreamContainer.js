import React from 'react'
import {buyIceCream, returnIceCream} from './Redux'
import {useSelector, useDispatch} from 'react-redux'

function IceCreamContainer() {
  const numOfCakes = useSelector(
    state => state.iceCream.numOfIceCreams
  )
  const dispatch = useDispatch()

  return (
    <div>
      <h1>No. Of ice-creams - {numOfCakes} </h1>
      <button onClick={() => dispatch(buyIceCream())}>Buy an ice-cream</button>
      <button onClick={() => dispatch(returnIceCream())}>Return an ice-cream</button>
    </div>
  );
}

export default IceCreamContainer