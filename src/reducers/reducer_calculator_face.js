import { BUTTON_CLICK, CLEAR_CLICK, EQUALS_CLICK } from "../actions";

export function faceState(state = [], action) {
  switch (action.type) {
    case BUTTON_CLICK:
      return [...state, action.payload];
    case EQUALS_CLICK:
      // console.log("equals click");
      // const result = doMath([...state]);
      // console.log(result);
      return [...state];
    case CLEAR_CLICK:
      console.log("clear click");
      return [];
    default:
      return state;
  }
}
