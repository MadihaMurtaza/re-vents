import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.css";
import "./app/layout/styles.css";
import App from "./app/layout/App.jsx";
import { BrowserRouter } from "react-router-dom";
const rootEl = document.getElementById("root");

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,

    rootEl
  );
}

if (module.hot) {
  module.hot.accept("./app/layout/App.jsx", function () {
    setTimeout(render);
  });
}

render();
