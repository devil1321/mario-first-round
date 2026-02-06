import {Brick1Action} from "../actions/brick-1.actions"
import { Brick1Types } from "../types"

const brick1InitState  = {
   
}

export default function(state = brick1InitState,action:Brick1Action){
    switch(action.type){
        default:
            return state
    }
}