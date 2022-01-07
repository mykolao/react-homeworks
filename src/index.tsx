import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HW5 from "./homework-5/HW5";
import { Provider } from "react-redux";
import store from "./homework-10/bll/store";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Provider store={store}>
        <HW5 />
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
