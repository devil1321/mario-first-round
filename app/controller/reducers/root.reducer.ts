import { combineReducers } from 'redux'
import playerReducer from './player.reducer'
import worldReducer from './world.reducer'
import uiReducer from './ui.reducer'

export const reducers = combineReducers({
    ui:uiReducer,
    player:playerReducer,
    world:worldReducer
})

export type State = ReturnType<typeof reducers>