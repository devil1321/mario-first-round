import { Dispatch } from "redux";
import { WorldTypes } from "../types";
import { PlayerActions } from "../enums";
import * as PlayerActionCreators from '../actions-creator/player.actions-creator'
import { bindActionCreators } from "redux";
import store from "../store";

const playerActions = bindActionCreators(PlayerActionCreators,store.dispatch)

export const checkCollision = (currentObject: any, collidedObject: any) => (dispatch: Dispatch) => {
    const x1 = currentObject.translateX;
    const y1 = currentObject.translateY;
    const w1 = currentObject.width;
    const h1 = currentObject.height;

    const x2 = collidedObject.translateX;
    const y2 = collidedObject.translateY;
    const w2 = collidedObject.width;
    const h2 = collidedObject.height;

    const isColliding =
      x1 < x2 + w2 &&
      x1 + w1 > x2 &&
      y1 < y2 + h2 &&
      y1 + h1 > y2;

    if (isColliding) {
      dispatch({
        type: WorldTypes.DETECT_COLLISION,
        action:currentObject.type
      });
    }
  };


  export const makeAction = (currentObject:any) =>(dispatch:Dispatch) =>{
    switch(currentObject.currentAction){
        case PlayerActions.STANCE:
            break
        case PlayerActions.MOVE_LEFT:
            break
        case PlayerActions.MOVE_RIGHT:
            break
        case PlayerActions.JUMP:
            break
        case PlayerActions.SHOOT:
            break
        case PlayerActions.CROUCH:
            break
        default:
            break
    }
  }