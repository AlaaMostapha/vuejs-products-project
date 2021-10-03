import * as types from './types';
import * as apis from '../../../network/apis/product'
export default {
    [types.RECIEVE_PRODUCT](context,id) {
        apis.GetProduct(id).then(response => (context.commit(types.RECIEVE_PRODUCT, response.data)))
    }
}