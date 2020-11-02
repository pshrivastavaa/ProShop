import {
    PRODUCT_LIST_REQUEST,
    PRODECT_LIST_SUCCESS,
    PRODECT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODECT_DETAILS_SUCCESS,
    PRODECT_DETAILS_FAIL
} from '../constants/productConstants'

const initialState = {
    products: []
}

export const productListReducer = (state = initialState, action) => {

    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PRODECT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case PRODECT_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state

    }

}


const initialStateDetails = {
    product: {
        reviews: []
    }
}

export const productDetailsReducer = (state = initialStateDetails, action) => {

    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PRODECT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload
            }
        case PRODECT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state

    }

}