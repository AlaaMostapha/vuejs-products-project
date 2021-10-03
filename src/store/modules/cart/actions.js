import * as types from './types';
export default {
    [types.ADD_TO_CART]({commit},item) {
        commit(types.ADD_TO_CART,item)
        commit(types.CALCULATE_TOTAL)
    },
    [types.REMOVE_FROM_CART]({commit},item) {
        commit(types.REMOVE_FROM_CART,item)
        commit(types.CALCULATE_TOTAL)
    },
    [types.INCREASE_ITEM_QUANTITY]({commit},item) {
        commit(types.INCREASE_ITEM_QUANTITY,item)
        commit(types.CALCULATE_TOTAL)
    },
    [types.DECREASE_ITEM_QUANTITY]({commit},item) {
        --item.quantity;
        if(item.quantity == 0){
            commit(types.REMOVE_FROM_CART,item)
        }else{
            commit(types.DECREASE_ITEM_QUANTITY,item)
        }
        commit(types.CALCULATE_TOTAL)
    }
}