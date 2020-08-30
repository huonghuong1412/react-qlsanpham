import * as types from '../constants/ActionTypes'
var DEFAULT_STATE = [

];

const products = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.GET_LIST_PRODUCTS:
            state = action.products;
            return [...state]

        case types.DELETE_PRODUCT_ITEM:
            return [...state.filter((item) => {
                return item.id !== action.id
            })]

        case types.ADD_PRODUCT_ITEM:
            state.push(action.product)
            return [...state]

        case types.UPDATE_PRODUCT_ITEM:
            var index = action.product.id;
            state[index] = action.product;
            return [...state];
        default:
            return [...state]
    }
}

export default products;