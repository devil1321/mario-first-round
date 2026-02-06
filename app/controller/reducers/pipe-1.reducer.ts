import {Pipe1Action} from "../actions/pipe-1.actions"
import { Pipe1Types } from "../types"

const Pipe1InitState  = {
   
}

export default function(state = Pipe1InitState,action:Pipe1Action){
    switch(action.type){
        default:
            return state
    }
}