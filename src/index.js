import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AutumnLeaves from "./drawings/AutumnLeaves";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AutumnLeaves />, document.getElementById("root"));
registerServiceWorker();
