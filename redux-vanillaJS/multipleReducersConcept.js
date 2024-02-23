// Buying and returning cakes and ice creams

const redux = require("redux");
const createStore = redux.createStore;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const combineReducers = redux.combineReducers

// 1. Action types
const BUY_CAKE = "BUY_CAKE";
const RETURN_CAKE = "RETURN_CAKE";
const RETURN_ICE_CREAM = "RETURN_ICE_CREAM";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

// 2. Action creators
function buyCake() {
  return {
    type: BUY_CAKE,
  };
}
function returnCake() {
  return {
    type: RETURN_CAKE,
  };
}
function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
  };
}
function returnIceCream() {
  return {
    type: RETURN_ICE_CREAM,
  };
}

// 3. Initial State for multiple reducers
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCreams: 20,
};

// 4. Reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case "RETURN_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case "BUY_ICE_CREAM":
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    case "RETURN_ICE_CREAM":
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + 1,
      };
    default:
      return state;
  }
};

// Combining reducers to a root reducer as createStore only accepts a single reducer fn
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// 5. store , 6. middleware
const store = createStore(rootReducer, applyMiddleware(logger));

// 7. subscribe and unsubscribe, 8. dispatch actions
console.log("Initial State", store.getState());
const unSubscribe = store.subscribe(() => console.log());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(returnCake());
store.dispatch(returnIceCream());

unSubscribe();
