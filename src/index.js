import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import reducer from "./reducers";
import "./index.css";
import App from "./App";
import { Theme } from "./MyTheme";

const store = createStore(reducer, applyMiddleware(Thunk));
const wrapper = document.getElementById("root");
wrapper
  ? ReactDOM.render(
      <Theme>
        <Provider store={store}>
          <App />
        </Provider>
      </Theme>,
      wrapper
    )
  : false;
