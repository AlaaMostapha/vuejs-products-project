import Vue from 'vue';
import * as types from './types';
export default {
    [types.ADD_TO_CART](state, payload) {
        //check if item is exits in cart or not
        const found = state.cart.find(item => item.id == payload.id)
        if (found) {
            found.quantity++;
            found.totalPrice = found.quantity * found.price;
        } else {
            state.cart.push(payload);
            Vue.set(payload, 'quantity', 1);
            Vue.set(payload, 'totalPrice', payload.price);
        }
    },
    [types.REMOVE_FROM_CART](state, payload) {
        //remove item from cart
        const index = state.cart.indexOf(payload)
        state.cart.splice(index, 1)
    },
    [types.INCREASE_ITEM_QUANTITY](state, payload) {
        const item = payload;
        item.quantity++;
        item.totalPrice = item.price * item.quantity;
    },
    [types.DECREASE_ITEM_QUANTITY](state, payload) {
        const item = payload
        item.totalPrice = item.price * item.quantity;
    },
    [types.CALCULATE_TOTAL](state) {
        let total = state.cart.reduce(function (prev, cur) {
            return prev + cur.totalPrice;
        }, 0);
        state.total = total
    }
}