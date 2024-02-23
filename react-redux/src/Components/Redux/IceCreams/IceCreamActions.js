import { BUY_ICE_CREAM, RETURN_ICE_CREAM } from "./IceCreamTypes";

export const buyIceCream = () => {
  return {
    type: BUY_ICE_CREAM,
  };
};

export const returnIceCream = () => {
  return {
    type: RETURN_ICE_CREAM,
  };
};
