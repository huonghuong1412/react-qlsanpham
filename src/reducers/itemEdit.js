import * as types from '../constants/ActionTypes'

var DEFAULT_SATE = {};

var itemEdit = (state = DEFAULT_SATE, action) => {
    switch (action.type) {
        case types.EDIT_PRODUCT_ITEM:
            return action.product
        default:
            return state;
    }
}

export default itemEdit;