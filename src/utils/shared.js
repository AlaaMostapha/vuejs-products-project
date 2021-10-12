import store from '../store/index';

export function addItemToCart(product) {
    store.dispatch("cart/ADD_TO_CART", product);
}