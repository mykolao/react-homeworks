import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HW1 from "./homework-1/HW1";
import HW2 from "./homework-2/HW2";
import HW3 from "./homework-3/HW3";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <HW1 />
      <HW2 />
      <HW3 />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
