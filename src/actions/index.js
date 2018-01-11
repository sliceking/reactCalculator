export const BUTTON_CLICK = "BUTTON_CLICK";
export const EQUALS_CLICK = "EQUALS_CLICK";
export const CLEAR_CLICK = "CLEAR_CLICK";

export function buttonClick(button) {
  return {
    type: BUTTON_CLICK,
    payload: button
  };
}

export function equalsClick() {
  return {
    type: EQUALS_CLICK,
    payload: ""
  };
}

export function clearClick() {
  return {
    type: CLEAR_CLICK,
    payload: ""
  };
}
