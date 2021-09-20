import * as types from './types';
export default {
    [types.IS_LOADING](context, payload) {
        context.commit(types.IS_LOADING, payload)
    }
}