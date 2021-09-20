import * as types from './types';
import * as apis from '../../../network/apis/products'
export default {
    [types.RECIEVE_PRODUCTS](context) {
        apis.GetProducts().then(response => (context.commit(types.RECIEVE_PRODUCTS, response.data)))
    }
}