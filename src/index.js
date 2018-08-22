import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Chopin from "./drawings/Chopin";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Chopin />, document.getElementById("root"));
registerServiceWorker();
