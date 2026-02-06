import {Pipe3Action} from "../actions/pipe-3.actions"
import { Pipe3Types } from "../types"

const Pipe3InitState  = {
   
}

export default function(state = Pipe3InitState,action:Pipe3Action){
    switch(action.type){
        default:
            return state
    }
}