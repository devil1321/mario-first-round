import {GroundAction} from "../actions/ground.actions"
import { Brick1Types } from "../types"

const brick1InitState  = {
   
}

export default function(state = brick1InitState,action:GroundAction){
    switch(action.type){
        default:
            return state
    }
}