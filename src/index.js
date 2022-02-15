import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./analytic_tools/reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import { transitions, positions, Provider as AlertProvider, types } from "react-alert";
import AlertTemplate from "react-alert-template-mui";


//Options for react-alert box
const options = {
  positions: positions.MIDDLE,
  timeout: 0,
  offset: '-10vh',
  transition: transitions.SCALE,
}

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <Router>
      <App />
    </Router>
  </AlertProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
