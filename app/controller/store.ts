import { createStore, compose,applyMiddleware } from 'redux'
import * as thunk from 'redux-thunk'
import { reducers as rootReducer } from './reducers/root.reducer'


const middleware = [thunk.thunk]

const initState = {}

const store = createStore(
    rootReducer,
    initState,
    compose(
        applyMiddleware(...middleware)
    )
)

export default store;