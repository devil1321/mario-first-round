import { combineReducers } from 'redux'
import playerReducer from './player.reducer'
import worldReducer from './world.reducer'
import appReducer from './app.reducer'

export const reducers = combineReducers({
    app:appReducer,
    player:playerReducer,
    world:worldReducer
})

export type State = ReturnType<typeof reducers>