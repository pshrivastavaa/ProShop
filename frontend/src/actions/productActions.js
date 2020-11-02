import {
    PRODUCT_LIST_REQUEST,
    PRODECT_LIST_SUCCESS,
    PRODECT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODECT_DETAILS_SUCCESS,
    PRODECT_DETAILS_FAIL
} from '../constants/productConstants'
import axios from 'axios'

export const listProduct = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get('/api/products')
        dispatch({
            type: PRODECT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODECT_LIST_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.response
        })
    }
}

export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })
        const { data } = await axios.get(`/api/products/${id}`)
        dispatch({
            type: PRODECT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODECT_DETAILS_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.response
        })
    }
}