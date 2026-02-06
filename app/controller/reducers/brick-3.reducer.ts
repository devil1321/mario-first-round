import {Brick3Action} from "../actions/brick-3.actions"
import { Brick3Types } from "../types"

const brick3InitState  = {
   
}

export default function(state = brick3InitState,action:Brick3Action){
    switch(action.type){
        default:
            return state
    }
}