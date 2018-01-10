import { combineReducers } from "redux";
import CalculatorButtons from "./reducer_calculator_buttons";
import { faceState } from "./reducer_calculator_face";

const rootReducer = combineReducers({
  calculatorButtons: CalculatorButtons,
  faceState: faceState
});

export default rootReducer;
