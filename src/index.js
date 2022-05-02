import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";
import { data } from "./data";

//curring form of function logger(object , next , action)
//logger(obj)(next)(action)
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //MiddleWare code
//       console.log("Action type", action.type);
//       next(action);
//     };
//   };
// };
const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log("Action type", action.type);
    next(action);
  };
const store = createStore(rootReducer, applyMiddleware(logger));
console.log(store);
// console.log("before", store.getState());
// store.dispatch({
//   type: "ADD_MOVIE",
//   movie: [{ name: "spiderman" }],
// });
console.log(store);
ReactDOM.render(<App store={store} />, document.getElementById("root"));
