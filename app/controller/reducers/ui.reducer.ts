import { UITypes } from "../types";
import { UIAction } from "../actions/ui.actions";

const UIInitState = {
    controls:{
        left:{
            rect:{
                x1:0,
                y1:0,
                width:0,
                height:0

            }
        },
        right:{
            rect:{
                x1:0,
                y1:0,
                width:0,
                height:0

            }
        }
    }
}

export default function(state = UIInitState ,action:UIAction){
    switch(action.type){
        case UITypes.CONTROL_RIGHT_ACTION:
            return {
                ...state
            }
        default:
            return state;
    }
}