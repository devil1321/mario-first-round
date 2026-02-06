import {Pipe2Action} from "../actions/pipe-2.actions"
import { Pipe2Types } from "../types"

const Pipe2InitState  = {
   
}

export default function(state = Pipe2InitState,action:Pipe2Action){
    switch(action.type){
        default:
            return state
    }
}