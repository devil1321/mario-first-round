import {QuestionMark4Action} from "../actions/question-mark-4.actions"
import { QuestionMark4Types } from "../types"

const questionMark4InitState  = {
   
}

export default function(state = questionMark4InitState,action:QuestionMark4Action){
    switch(action.type){
        default:
            return state
    }
}