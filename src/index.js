import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Main from "./Component/Main";
import App from "./App";

ReactDOM.render(
  <>
    <StrictMode>
      <App />
    </StrictMode>
  </>,
  document.getElementById("root")
);
