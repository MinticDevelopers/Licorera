import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS,
    ADMIN_PRODUCTS_REQUEST,
    ADMIN_PRODUCTS_SUCCESS,
    ADMIN_PRODUCTS_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_FAIL,   
    UPDATE_PRODUCT_SUCCESS
    } from '../constants/productConstants';


export const getProducts = (currentPage = 1, keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST })

        const { data } = await axios.get(`/api/productos?keyword=${keyword}&page=${currentPage}`)


        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}


//DETALLE DEL PRODUCTO
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/producto/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

//ADMIN visulizacion de productos 
export const getAdminProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCTS_REQUEST })

        const { data } = await axios.get('/api/admin/productos')

        dispatch({
            type: ADMIN_PRODUCTS_SUCCESS,
            payload: data.products
        })
    }catch (error){
        dispatch({
            type: ADMIN_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

// ADMIN ingreso de nuevos productos 

export const newProduct= (productData)=> async (dispatch)=>{
    try{
        dispatch({type: NEW_PRODUCT_REQUEST})

        const config={
            header:{
                'Content_type':'application/json'
            }
        }

        const {data} = await axios.post('/api/producto/nuevo', productData, config)

        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data
        })
    }catch (error){
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}

//ADMIN eliminar un producto 

export const deleteProduct = (id)=> async(dispatch)=>{
    try{
        dispatch ({type: DELETE_PRODUCT_REQUEST})
        const {data}= await axios.delete(`/api/producto/${id}`)

        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: data.success
        })
    }catch (error){
        dispatch({
            type : DELETE_PRODUCT_FAIL,
            payload: error.response.data.message

        })
    }
}

//ADMIN actualizar un producto 

export const updateProduct = (id,productData) => async (dispatch)=>{

    try{
        dispatch ({type: UPDATE_PRODUCT_REQUEST})

        const config = {
            headers:{
                "Conten-Type": "aplication/json"
            }
        }
        const {data}= await axios.put(`/api/producto/${id}`, productData, config)

        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data.success
        })
    }catch (error){
        dispatch({
            type : UPDATE_PRODUCT_FAIL,
            payload: error.response.data.message

        })
    }

} 



//clear error
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}