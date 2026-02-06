import {QuestionMark1Action} from "../actions/question-mark-1.actions"
import { QuestionMark1Types } from "../types"

const questionMark1InitState  = {
   
}

export default function(state = questionMark1InitState,action:QuestionMark1Action){
    switch(action.type){
        default:
            return state
    }
}