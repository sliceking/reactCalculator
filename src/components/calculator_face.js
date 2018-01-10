import React, { Component } from "react";
import { connect } from "react-redux";

class CalculatorFace extends Component {
  render() {
    console.log(this.props.faceState);
    return <div className="calculatorFace">{this.props.faceState}</div>;
  }
}

function mapStateToProps(state) {
  return {
    faceState: state.faceState
  };
}

export default connect(mapStateToProps)(CalculatorFace);
