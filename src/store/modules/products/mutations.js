import * as types from './types';
export default {
    [types.RECIEVE_PRODUCTS](state, payload) {
       state.products=payload
    }
}
