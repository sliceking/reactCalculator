import React, { Component } from "react";
import CalculatorFace from "./calculator_face";
import CalculatorButtons from "./calculator_button";

class CalculatorBody extends Component {
  render() {
    return (
      <div className="calculatorBody">
        <CalculatorFace />
        <CalculatorButtons />
      </div>
    );
  }
}

export default CalculatorBody;
