import { Dispatch } from "redux";
import { AppTypes, WorldTypes } from "../types";
import { ControlsButtons, PlayerActions, WorldItems, WorldPhysics } from "../enums";
import * as PlayerActionCreators from '../actions-creator/player.actions-creator'
import * as AppActionCreators from '../actions-creator/app.actions-creator'
import { bindActionCreators } from "redux";
import store from "../store";

const playerActions = bindActionCreators(PlayerActionCreators,store.dispatch)

export const checkCollision = (currentObjectRect: any, collidedObjectRect: any) => {
    const x1 = currentObjectRect.translateX;
    const y1 = currentObjectRect.translateY;
    const w1 = currentObjectRect.width;
    const h1 = currentObjectRect.height;

    const x2 = collidedObjectRect.translateX;
    const y2 = collidedObjectRect.translateY;
    const w2 = collidedObjectRect.width;
    const h2 = collidedObjectRect.height;

    const isColliding =
      x1 < x2 + w2 &&
      x1 + w1 > x2 &&
      y1 < y2 + h2 &&
      y1 + h1 > y2;

    return isColliding
  };

  export const checkPlayerCollisionsAndMakeItemsActions = () =>{
    const { worldItems } = store.getState().world
    const { player } = store.getState()
    let isColliding = false
    worldItems.filter((item:any) => checkCollision(player.currentFrame,item.currentFrame))
    if(worldItems.length > 0){
        worldItems.forEach((item:any) => {
            switch(item.type){
                case WorldItems.BRICK_1:
                    isColliding = true
                    break
                case WorldItems.BRICK_2:
                    isColliding = true
                    break
                case WorldItems.BRICK_3:
                    isColliding = true
                    break
                case WorldItems.PIPE_1:
                    isColliding = true
                    break
                case WorldItems.PIPE_2:
                    isColliding = true
                    break
                case WorldItems.PIPE_3:
                    isColliding = true
                    break
                case WorldItems.GROUND:
                    isColliding = true
                    break
                case WorldItems.QUESTION_MARK_1:
                    isColliding = true
                    break
                case WorldItems.QUESTION_MARK_2:
                    isColliding = true
                    break
                case WorldItems.QUESTION_MARK_3:
                    isColliding = true
                    break
                case WorldItems.QUESTION_MARK_4:
                    isColliding = true
                    break
                default:
                    isColliding = false
            }
        })
    }
    return isColliding
  }

  export const makePlayerAction = (currentObject:any) =>(dispatch:Dispatch) =>{
    const collisions = checkPlayerCollisionsAndMakeItemsActions()
    switch(currentObject.currentAction){
        case PlayerActions.STANCE:
            playerActions.stance()
            break
        case PlayerActions.MOVE_LEFT:
            if(!collisions){
                playerActions.moveLeft()
                playerActions.animatePlayerSprite()
            }
            break
        case PlayerActions.MOVE_RIGHT:
            if(!collisions){
                playerActions.moveRight()
                playerActions.animatePlayerSprite()
            }
            break
        case PlayerActions.JUMP:
            if(!collisions){
                playerActions.jump()
                playerActions.animatePlayerSprite()
            }
            break
        case PlayerActions.SHOOT:
            if(!collisions){
                playerActions.shoot()
                playerActions.animatePlayerSprite()
                playerActions.animatePlayerGunSprite()
            }
            break
        case PlayerActions.CROUCH:
            if(!collisions){
                playerActions.crouch()
                playerActions.animatePlayerSprite()
            }
            break
        case WorldPhysics.MAKE_GRAVITY:
            const { line,gravity }  = store.getState().world
            const { player } = store.getState()

            const isColliding = checkCollision(player.currentFrame,line.rect)

            if(!isColliding){
                player.currentFrame.y += gravity
            }

        default:
            break
    }
  }


export const makeButtonAction = () => (dispatch:Dispatch) =>{
    const { state,buttonLeft,buttonRight } = store.getState().app
    switch(buttonLeft){
        case ControlsButtons.BUTTON_LEFT:
            makePlayerAction(PlayerActions.MOVE_LEFT)
            break
        case ControlsButtons.BUTTON_RIGHT:
            makePlayerAction(PlayerActions.MOVE_RIGHT)
            break
        default:
            makePlayerAction(PlayerActions.STANCE)
    }
    switch(buttonRight){
        case ControlsButtons.BUTTON_JUMP:
            makePlayerAction(PlayerActions.JUMP)
            break
        case ControlsButtons.BUTTON_GUN:
            makePlayerAction(PlayerActions.SHOOT)
            break
        case ControlsButtons.BUTTON_RUN:
            const { velocity } = store.getState().player
            gsap.to(velocity,{
                current:20,
                duration:1,
            })
            break
        case ControlsButtons.BUTTON_CROUCH:
            makePlayerAction(PlayerActions.CROUCH)
            break
        default:
            makePlayerAction(PlayerActions.STANCE)
            if(state.isFingerLeftLeave){
                const { velocity } = store.getState().player
                velocity.current = 10
                dispatch({
                    type:AppTypes.SET_LEFT_BUTTON_ACTION,
                    currentButtonLeftAction:null
                })
            }
             if(state.isFingetRightLeave){
                const { velocity } = store.getState().player
                velocity.current = 10
                dispatch({
                    type:AppTypes.SET_RIGHT_BUTTON_ACTION,
                    currentButtonRightAction:null
                })
            }
    }
} 