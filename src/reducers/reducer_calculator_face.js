import { BUTTON_CLICK, CLEAR_CLICK, EQUALS_CLICK } from "../actions";

export function faceState(state = [], action) {
  switch (action.type) {
    case BUTTON_CLICK:
      return [...state, action.payload];
    case EQUALS_CLICK:
<<<<<<< HEAD
      // console.log("equals click");
      // const result = doMath([...state]);
      // console.log(result);
      return [...state];
=======
      const result = state.reduce((total, val, idx, arr) => {
        //   needs an operand click function to combine integers
        //   for cases like [2,2,+,2,2]
        //   it will return 4 (2 + 2)  instead of 22 + 22
        if (!arr[idx + 1]) {
          return total;
        }
        if (idx === 0) {
          return val;
        }
        if (Number.isInteger(val)) {
          return total;
        }
        if (arr[idx] === "+") {
          return total + arr[idx + 1];
        }
        if (arr[idx] === "-") {
          return total - arr[idx + 1];
        }
        if (arr[idx] === "/") {
          return total / arr[idx + 1];
        }
        if (arr[idx] === "*") {
          return total * arr[idx + 1];
        }
      });
      console.log(result);
      return [result];
>>>>>>> 5e4598f0fbc6a4edefee145afd9a495ffc2213e8
    case CLEAR_CLICK:
      console.log("clear click");
      return [];
    default:
      return state;
  }
}
