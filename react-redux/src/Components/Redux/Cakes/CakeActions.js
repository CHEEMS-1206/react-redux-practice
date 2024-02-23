import {BUY_CAKE, RETURN_CAKE} from './CakeTypes'

export const buyCake = (num = 1) => {
    return {
        type : BUY_CAKE,
        payload : num
    }
}

export const returnCake = (num = 1) => {
  return {
    type: RETURN_CAKE,
    payload : num
  };
};