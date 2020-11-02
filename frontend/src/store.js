import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'


const reduces = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
})
const initialState = {}
const middelware = [thunk]

const store = createStore(
    reduces,
    initialState,
    composeWithDevTools(applyMiddleware(...middelware)))

export default store