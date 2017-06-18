import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import products from "./reducers/products";
import Main from "./main";

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(combineReducers({ products }), preloadedState);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
