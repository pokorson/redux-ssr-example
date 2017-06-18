import path from "path";
import express from "express";
import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import R from "ramda";
import products from "./client/reducers/products";
import App from "./client/main";

const app = express();
const port = 3000;

app.use("/static", express.static("static"));

app.use(handleRender);

function handleRender(req, res) {
  const state = {
    products: ["towel", "plate", "cup", "fork", "spoon"]
  };
  const store = createStore(combineReducers({ products }), state);

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const preloadedState = store.getState();

  res.send(renderFullPage(html, preloadedState));
}
function renderFullPage(html, preloadedState) {
  return `
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}

app.listen(port);
