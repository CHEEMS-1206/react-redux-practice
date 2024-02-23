import {createStore, combineReducers} from 'redux'

import cakeReducer from './Cakes/CakeReducers'
import iceCreamReducer from './IceCreams/IceCreamReducer'

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

const store = createStore(rootReducer)
export default store