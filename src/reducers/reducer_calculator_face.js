import { BUTTON_CLICK, CLEAR_CLICK, EQUALS_CLICK } from "../actions";
import _ from "lodash";

export function faceState(state = [], action) {
  switch (action.type) {
    case BUTTON_CLICK:
      return [...state, action.payload];
    case EQUALS_CLICK:
      return [...state, action.payload];
    case CLEAR_CLICK:
      return [];
    default:
      return state;
  }
}
