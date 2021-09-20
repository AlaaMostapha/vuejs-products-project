import * as types from './types';
export default {
    [types.RECIEVE_PRODUCTS](state, payload) {
        console.log('payload',payload)
       state.products=payload
    }
}
