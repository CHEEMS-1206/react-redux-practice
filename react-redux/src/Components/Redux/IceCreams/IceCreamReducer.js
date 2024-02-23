import { BUY_ICE_CREAM, RETURN_ICE_CREAM } from "./IceCreamTypes";

const initialIceCreamState = {
  numOfIceCreams: 50,
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case RETURN_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
