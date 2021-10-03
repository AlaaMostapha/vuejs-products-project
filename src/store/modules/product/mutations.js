import * as types from './types';
export default {
    [types.RECIEVE_PRODUCT](state, payload) {
       state.product=payload
    }
}
