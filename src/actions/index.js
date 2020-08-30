import * as types from '../constants/ActionTypes'
import callAPI from '../callAPI/callAPI'

// ------------ GET LIST PRODUCTS  -----------------
export const actGetRequest = () => {
    return (dispatch) => {
        return callAPI('products', 'GET', null).then((res) => {
            dispatch(getListProducts(res.data))
        })
    }
}

export const getListProducts = (products) => {
    return {
        type: types.GET_LIST_PRODUCTS,
        products
    }
}

// -------------    DELETE ITEM ----------------

export const actDeleteRequest = (id) => {
    return (dispatch) => {
        return callAPI(`products/${id}`, 'DELETE', null).then((res) => {
            dispatch(deleteProductItem(id))
        })
    }
}

export const deleteProductItem = (id) => {
    return {
        type: types.DELETE_PRODUCT_ITEM,
        id
    }
}

// -------------  ADD ITEM  -----------------

export const actAddRequest = (product) => {
    return (dispatch) => {
        return callAPI('products', 'POST', product).then((res) => {
            dispatch(addProductItem(res.data))
        })
    }
}

export const addProductItem = (product) => {
    return {
        type: types.ADD_PRODUCT_ITEM,
        product
    }
}

// -----------  UPDATE ITEM GET DUOC  -------------

export const actUpdateRequest = (product) => {
    return (dispatch) => {
        return callAPI(`products/${product.id}`, 'PUT', product).then((res) => {
            dispatch(updateProductItem(res.data))
        })
    }
}

export const updateProductItem = (product) => {
    return {
        type: types.UPDATE_PRODUCT_ITEM,
        product
    }
}

// -----------   Get 1 item update   ------------

export const actGetProductItemRequest = (id) => {
    return (dispatch) => {
        return callAPI(`products/${id}`, 'GET', null).then((res) => {
            dispatch(getProductItem(res.data))
            console.log("Data Response: ", res);
        })
    }
}


export const getProductItem = (product) => {
    return {
        type: types.EDIT_PRODUCT_ITEM,
        product
    }
}

