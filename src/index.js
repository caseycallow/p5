import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Meteorites from "./drawings/Meteorites";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Meteorites />, document.getElementById("root"));
registerServiceWorker();
