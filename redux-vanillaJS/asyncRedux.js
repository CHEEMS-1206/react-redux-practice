// import statements
import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import axios from "axios";

// initial state of the store
const initialState = {
  loading: false,
  users: [],
  error: "",
};

// action type constatnts
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

// action creators
const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUserError = (error) => {
  return { type: FETCH_USERS_ERROR, payload: error };
};

// creating async action creators for dispatching actions async
const fetchUsers = () => {
    return function (dispatch){
        dispatch(fetchUserRequest())
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            // response.data is array of users
            const users = response.data;
            dispatch(fetchUserSuccess(users));
          })
          .catch((error) => {
            // error.message is description of the error
            dispatch(fetchUserError(error.message));
          });
    }
}

// reducer function 
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_USERS_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "FETCH_USERS_SUCCESS":
        return {
          ...state,
          loading : false,
          users: action.payload,
          error : ""
        };
      case "FETCH_USERS_ERROR":
        return {
          ...state,
          loading : false,
          error: action.payload,
          users : []
        };
    }
}

// store taking thunkMiddleware for async functioning
const store = createStore(reducer,applyMiddleware(thunk))

// subscription to store and disptaching async fn to fetch users
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(fetchUsers())