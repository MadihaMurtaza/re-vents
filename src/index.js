import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.css";
import "./app/layout/styles.css";
import App from "./app/layout/App.jsx";
const rootEl = document.getElementById("root");

function render() {
  ReactDOM.render(<App />, rootEl);
}

if (module.hot) {
  module.hot.accept("./app/layout/App.jsx", function () {
    setTimeout(render);
  });
}

render();
