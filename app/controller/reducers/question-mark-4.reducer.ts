import {QuestionMark3Action} from "../actions/question-mark-3.actions"
import { QuestionMark3Types } from "../types"

const questionMark3InitState  = {
   
}

export default function(state = questionMark3InitState,action:QuestionMark3Action){
    switch(action.type){
        default:
            return state
    }
}