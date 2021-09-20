import * as types from './types';
export default {
    [types.IS_LOADING](state, payload) {
        console.log('payload',payload);
       state.isLoading=payload
    }
}
