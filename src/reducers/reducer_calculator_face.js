import { BUTTON_CLICK } from "../actions";

export function faceState(state = [], action) {
  switch (action.type) {
    case BUTTON_CLICK:
      return [...state, action.payload];

    default:
      return state;
  }
}
