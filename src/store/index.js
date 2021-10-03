import Vue from 'vue'
import Vuex from "vuex";
import common from './modules/common';
import products from './modules/products';
import product from './modules/product';
import cart from './modules/cart';

Vue.use(Vuex)

const state = {}
const actions = ({})
const mutations = ({})
const getters = ({})

const modules = {
  common,
  products,
  product,
  cart
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules
})