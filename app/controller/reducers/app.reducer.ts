import { AppTypes } from '../types';
import { AppAction } from '../actions/app.actions';
import { ControlsButtons } from "../enums";

const padding = 30;
const radius = 50;
const translateY = 50;
const spacing = 120;
const jumpSpacing = 750;
const gunSpacing = 870;
const crouchSpacing = 750;
const upButtonsTranslateY = 170;

const AppInitState = {
  state: {
    isAppRunning: false,
    isFingerLeftLeave: false,
    isFingerRightLeave: false,
  },
  button: "",
  buttonLeft: "",
  buttonRight: "",
  buttons: [
    { name: ControlsButtons.BUTTON_LEFT, offsetX: 0, offsetY: 0, r: radius },
    { name: ControlsButtons.BUTTON_RIGHT, offsetX: spacing, offsetY: 0, r: radius },
    { name: ControlsButtons.BUTTON_RUN, offsetX: spacing + jumpSpacing, offsetY: 0, r: radius },
    { name: ControlsButtons.BUTTON_JUMP, offsetX: spacing + gunSpacing, offsetY: 0, r: radius },
    { name: ControlsButtons.BUTTON_CROUCH, offsetX: spacing + crouchSpacing, offsetY: upButtonsTranslateY, r: radius }, // green
    { name: ControlsButtons.BUTTON_GUN, offsetX: spacing + gunSpacing, offsetY: upButtonsTranslateY, r: radius }, // orange
  ]
};

export default function(state = AppInitState , action: AppAction) {
    switch(action.type){
        case AppTypes.SET_STATE:
            return { ...state };
        case AppTypes.DETECT_CONTROLS_COLLISION:
            return { ...state, button: action.button };
        case AppTypes.SET_LEFT_BUTTON_ACTION:
            return { ...state, buttonLeft: action.buttonLeft };
        case AppTypes.SET_RIGHT_BUTTON_ACTION:
            return { ...state, buttonRight: action.buttonRight };
        default:
            return state;
    }
}
