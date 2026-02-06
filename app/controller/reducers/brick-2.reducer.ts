import { Brick2Action } from "../actions/brick-2.actions"
import { Brick2Types } from "../types"

const brick2InitState  = {
   
}

export default function(state = brick2InitState,action:Brick2Action){
    switch(action.type){
        default:
            return state
    }
}