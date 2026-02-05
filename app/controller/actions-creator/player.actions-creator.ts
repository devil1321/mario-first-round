import { PlayerTypes } from "../types";
import * as Interfaces from '../intefaces'
import { Dispatch } from "redux";
import store from "../store";
import gsap from 'gsap'
import { bindActionCreators } from "redux";
import * as WorldActions from './world.actions-creator'

const worldActions = bindActionCreators(WorldActions,store.dispatch)

export const initPlayerFrame = (currentFrame:Interfaces.IClippedRect) => (dispatch:Dispatch) =>{
    dispatch({
        type:PlayerTypes.SET_PLAYER_FRAME,
        currentFrame:currentFrame
    })
}

export const setPlayerCurrentFrames = (currentFrames:any) => (dispatch:Dispatch) =>{
    dispatch({
        type:PlayerTypes.SET_PLAYER_CURRENT_FRAMES,
        currentFrames:currentFrames
    })
}

export const playFrames = (currentFrames:any) => (dispatch:Dispatch) =>{
    const gsapState = {
        current:0
    }
    gsap.to(gsapState,{
        current:currentFrames.length,
        duration:1,
        onUpdate:()=>{
            dispatch({
                type:PlayerTypes.SET_PLAYER_FRAME,
                currentFrame:currentFrames[gsapState.current]
            })
        }
    })
}

export const makeAction = (currentAction:string) => (dispatch:Dispatch) =>{
    dispatch({
        type:PlayerTypes.MAKE_ACTION,
        currentAction:currentAction
    })
}

export const changeDirection = (isForward:boolean) => (dispatch:Dispatch) =>{

}

export const stance = () => (dispatch:Dispatch) =>{
    const { stanceFrames } = store.getState().player
    dispatch({
        type:PlayerTypes.SET_PLAYER_CURRENT_FRAMES,
        currentFrames:stanceFrames
    })
}

export const moveLeft = () => (dispatch:Dispatch) =>{
    const { moveFrames,velocity } = store.getState().player
    moveFrames.forEach((f:any) => f.x += velocity.current)
    dispatch({
        type:PlayerTypes.SET_PLAYER_CURRENT_FRAMES,
        currentFrames:moveFrames,
    })
}
export const moveRight = () => (dispatch:Dispatch) =>{
    const { moveFrames,velocity } = store.getState().player
    moveFrames.forEach((f:any) => f.x -= velocity.current)
    dispatch({
        type:PlayerTypes.SET_PLAYER_CURRENT_FRAMES,
        currentFrames:moveFrames
    })
}
export const jump = () => (dispatch:Dispatch) =>{
    const { jumpFrames } = store.getState().player
    jumpFrames.forEach((f:any) => f.y -= 20)

    dispatch({
        type:PlayerTypes.SET_PLAYER_CURRENT_FRAMES,
        currentFrames:jumpFrames
    })
}
export const crouch = () => (dispatch:Dispatch) =>{
    const { crouchFrames } = store.getState().player
    dispatch({
        type:PlayerTypes.SET_PLAYER_CURRENT_FRAMES,
        currentFrames:crouchFrames
    })
}

export const playCurrentFramesOfGun = (currentFramesOfGun:any) => (dispatch:Dispatch) =>{

} 

export const shoot = () => (dispatch:Dispatch) =>{
    const { shootFrames } = store.getState().player
    dispatch({
        type:PlayerTypes.SET_PLAYER_CURRENT_FRAMES_OF_GUN,
        currentFrames:shootFrames
    })
}

export const blow = () => (dispatch:Dispatch) =>{
    const { blowFrames } = store.getState().player
    dispatch({
        type:PlayerTypes.SET_PLAYER_CURRENT_FRAMES_OF_GUN,
        currentFrames:blowFrames
    })
}


export const animatePlayerSprite = () => (dispatch:Dispatch) => {
    const { currentFrames, state } = store.getState().player
    
    const clock = {
        current:0
    }

    gsap.to(clock,{
        current:currentFrames.length,
        duration:10,
        onUpdate:() =>{
            state.isAnimating = true
            if(state.isAnimating){
                dispatch({
                    type:PlayerTypes.ANIMATE_PLAYER_SPRITE,
                    currentFrame:currentFrames[clock.current]
                })
            }
        },
        onComplete:() =>{
            state.isAnimating = false
        }
    })

    
}

export const animatePlayerGunSprite = () => (dispatch:Dispatch) => {
    const { currentFrames }  = store.getState().player
    
    const clock = {
        current:0
    }

 

    
}