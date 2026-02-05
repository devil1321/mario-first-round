import { Dispatch } from "redux";
import { ControlsButtons } from "../enums";
import { AppTypes } from "../types";
import store from "../store";

const padding = 30;
const radius = 50;
const translateY = 50;

export const isInsideCircle = (touchX: number, touchY: number, cx: number, cy: number, r: number) => {
  const dx = touchX - cx;
  const dy = touchY - cy;
  return Math.sqrt(dx * dx + dy * dy) <= r;
};

export const handleTouch = (x: number, y: number, screenHeight: number) => (dispatch: Dispatch) => {
  const { buttons } = store.getState().app;
  const baseY = screenHeight - padding - radius; // bottom of screen reference

  for (const button of buttons) {
    const cx = padding + radius + translateY + button.offsetX;
    const cy = baseY - button.offsetY; // ✅ correct vertical position

    if (isInsideCircle(x, y, cx, cy, button.r)) {
        console.log(button)
      if (button.name === ControlsButtons.BUTTON_LEFT || button.name === ControlsButtons.BUTTON_RIGHT) {
        dispatch({ type: AppTypes.SET_LEFT_BUTTON_ACTION, buttonLeft: button.name });
      } else {
        dispatch({ type: AppTypes.SET_RIGHT_BUTTON_ACTION, buttonRight: button.name });
      }
      dispatch({ type: AppTypes.DETECT_CONTROLS_COLLISION, button: button.name });
    }
  }
};

export const clearHandleTouch = (x: number, y: number, screenHeight: number) => (dispatch: Dispatch) => {
  const { buttons } = store.getState().app;
  const baseY = screenHeight - padding - radius;

  for (const button of buttons) {
    const cx = padding + radius + translateY + button.offsetX;
    const cy = baseY - button.offsetY;

    if (isInsideCircle(x, y, cx, cy, button.r)) {
      if (button.name === ControlsButtons.BUTTON_LEFT || button.name === ControlsButtons.BUTTON_RIGHT) {
        dispatch({ type: AppTypes.SET_LEFT_BUTTON_ACTION, buttonLeft: "" });
      } else {
        dispatch({ type: AppTypes.SET_RIGHT_BUTTON_ACTION, buttonRight: "" });
      }
      dispatch({ type: AppTypes.DETECT_CONTROLS_COLLISION, button: "" });
    }
  }
};
