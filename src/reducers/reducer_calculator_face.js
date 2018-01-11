import { BUTTON_CLICK, CLEAR_CLICK, EQUALS_CLICK } from "../actions";

export function faceState(state = [], action) {
  switch (action.type) {
    case BUTTON_CLICK:
      return [...state, action.payload];
    case EQUALS_CLICK:
      console.log("equals click");
      const result = doMath(state);
      console.log(result);
      return result;
    case CLEAR_CLICK:
      console.log("clear click");
      return [];
    default:
      return state;
  }
}

function doMath(operationStack) {
  //turn this into a recursive math function
  console.log("operation Stack: " + operationStack);
  var num1;
  var num2;
  var operator;
  var first_operator_position;
  var second_operator_position;
  var result;

  //find the operator then get the ints infront and behind it
  for (let i = 0; i < operationStack.length; i++) {
    if (
      operationStack[i] === "+" ||
      operationStack[i] === "-" ||
      operationStack[i] === "*" ||
      operationStack[i] === "/"
    ) {
      num1 = parseInt(operationStack.slice(0, i).join(""));
      operator = operationStack[i];
      first_operator_position = i;
      num2 = parseInt(operationStack.slice(i + 1).join(""));
      break;
    }
  }

  //find the 2nd operator position
  for (let i = first_operator_position + 1; i < operationStack.length; i++) {
    if (
      operationStack[i] === "+" ||
      operationStack[i] === "-" ||
      operationStack[i] === "*" ||
      operationStack[i] === "/"
    ) {
      second_operator_position = i;
      break;
    }
  }

  console.log("num1: " + num1);
  console.log("num2: " + num2);
  console.log("operator: " + operator);
  console.log("second operator pos: " + second_operator_position);
  console.log(
    "rest of array: " + operationStack.slice(second_operator_position)
  );

  result = calculate(num1, num2, operator);
  // console.log("result", result);

  if (!second_operator_position) {
    // operationStack = [result];
    return [result];
  }

  //set new array after first calculation
  operationStack = operationStack.slice(second_operator_position);
  operationStack.unshift(result);
  console.log("new operationstack: " + operationStack);

  //call math again to recurse
  doMath(operationStack);
}

// calculate function
function calculate(num1, num2, operator) {
  var result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else if (operator === "*") {
    result = num1 * num2;
  }
  return result;
}
