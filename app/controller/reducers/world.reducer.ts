import { WorldAction } from "../actions/world.actions"
import { WorldTypes } from "../types"

const worldInitState  = {
    gravity:0,
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