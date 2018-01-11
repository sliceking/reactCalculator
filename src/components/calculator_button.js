import React, { Component } from "react";
import { connect } from "react-redux";
import { buttonClick, equalsClick, clearClick } from "../actions";
import { bindActionCreators } from "redux";

class CalculatorButtons extends Component {
  renderButtons() {
    return this.props.buttons.map(button => {
      return (
        <div
          onClick={
            button.face === "="
              ? () => this.props.equalsClick()
              : button.face === "C"
                ? () => this.props.clearClick()
                : () => this.props.buttonClick(button.face)
          }
          key={button.face}
          className="button"
        >
          {button.face}
        </div>
      );
    });
  }

  render() {
    return <div className="buttonContainer">{this.renderButtons()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    buttons: state.calculatorButtons
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ buttonClick, equalsClick, clearClick }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorButtons);
