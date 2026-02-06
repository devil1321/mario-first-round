    import { PlayerTypes } from "../types";
    import * as Interfaces from '../intefaces'
    import { Dispatch } from "redux";
    import store from "../store";
    import gsap from 'gsap'
    import * as WorldActions from './world.actions-creator'

    export const initPlayerFrame = (currentFrame:Interfaces.IClippedRect) => (dispatch:Dispatch) =>{
        dispatch({
            type:PlayerTypes.SET_PLAYER_CURRENT_FRAME,
            currentFrame:currentFrame
        })
    }

export const setPlayerTranslateY = (translateY:number) => (dispatch:Dispatch) =>{
    dispatch({
        type:PlayerTypes.SET_PLAYER_CURRENT_TRANSLATE_Y,
        translateY:translateY
    })
}

export const setStateIsJuming = (state:boolean) => (dispatch:Dispatch) =>{
    dispatch({
        type:PlayerTypes.SET_STATE_IS_JUMPING,
        isJumping:state
    })
}



    export const setPlayerCurrentFrames = (currentFrames:any) => (dispatch:Dispatch) =>{
        dispatch({
            type:PlayerTypes.SET_PLAYER_CURRENT_FRAMES,
            currentFrames:currentFrames
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
        console.log('move left from player actions')
        const { moveFrames,velocity,accX } = store.getState().player
        moveFrames.forEach((f:any) => f.translateX -= velocity.current + accX.current)
        dispatch({
            type:PlayerTypes.SET_PLAYER_CURRENT_FRAMES,
            currentFrames:moveFrames,
        })
    }
    export const moveRight = () => (dispatch:Dispatch) =>{
        console.log('move right from player actions')
        const { moveFrames,velocity,accX } = store.getState().player
        moveFrames.forEach((f:any) => f.translateX += velocity.current + accX.current)
        dispatch({
            type:PlayerTypes.SET_PLAYER_CURRENT_FRAMES,
            currentFrames:moveFrames,
        })
    }
    export const jump = () => (dispatch:Dispatch) =>{
        const { player } = store.getState()
        const { jumpFrames,velocity,accX } = store.getState().player
        gsap.to(accX,{
            current:10,
            duration:0
        })
        player.translateY -= velocity.current + accX.current
         dispatch({
            type:PlayerTypes.SET_STATE_IS_JUMPING,
            isJumping:true
        })
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
            current:currentFrames.length - 1,
            duration:0,
            onUpdate:() =>{
                state.isAnimating = true
                if(state.isAnimating){
                    console.log(Math.round(clock.current))
                    const currentFrame = Number(Math.ceil(clock.current))
                    if(currentFrames[currentFrame]){
                        dispatch({
                            type:PlayerTypes.SET_PLAYER_CURRENT_FRAME,
                            currentFrame:currentFrames[currentFrame]
                        })
                    }
                }
            },
            onComplete:() =>{
                console.log('stops')
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