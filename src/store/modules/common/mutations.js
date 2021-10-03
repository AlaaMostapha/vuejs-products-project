import * as types from './types';
export default {
    [types.IS_LOADING](state, payload) {
       state.isLoading=payload
    }
}
