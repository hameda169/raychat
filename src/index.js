import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
