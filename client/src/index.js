import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import App from "./components/App";

require("./css/styles.scss");
const enhancer = compose(applyMiddleware(thunk));
const store = createStore(reducers, composeWithDevTools(enhancer));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
