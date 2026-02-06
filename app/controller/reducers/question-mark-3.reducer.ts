import {QuestionMark2Action} from "../actions/question-mark-2.actions"
import { QuestionMark2Types } from "../types"

const questionMark2InitState  = {
   
}

export default function(state = questionMark2InitState,action:QuestionMark2Action){
    switch(action.type){
        default:
            return state
    }
}