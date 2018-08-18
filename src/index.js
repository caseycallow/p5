import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Zeppelin from "./drawings/Zeppelin";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Zeppelin />, document.getElementById("root"));
registerServiceWorker();
