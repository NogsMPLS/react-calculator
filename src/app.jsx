import React from "react";
import ReactDOM from "react-dom";
import { Calculator, FunctionCalculator } from "./calculator";

ReactDOM.render(
    <div>
        <h1>react-calculator</h1>
        <Calculator/>
        <FunctionCalculator/>
    </div>,
    document.getElementById('app')
);