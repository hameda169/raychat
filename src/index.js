import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Theme } from "./MyTheme";

const wrapper = document.getElementById("root");
wrapper
  ? ReactDOM.render(
      <Theme>
        <App />
      </Theme>,
      wrapper
    )
  : false;
