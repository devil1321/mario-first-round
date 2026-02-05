import { WorldAction } from "../actions/world.actions"
import { WorldTypes } from "../types"
import { ControlsButtons, WorldItems } from "../enums"

const worldInitState  = {
    gravity:0,
    worldItems:[],
    line:{
        type:WorldItems.GROUND,
        rect:{
            x:0,
            y:0,
            width:0,
            height:0
        }
    }
}


export default function(state = worldInitState,action:WorldAction){
    switch(action.type){
        case WorldTypes.DETECT_COLLISION:
            return{
                ...state
            }
        default:
            return state
    }
}