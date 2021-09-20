import Vue from 'vue'
import Vuex from "vuex";
import common from './modules/common';
import products from './modules/products';
// import Product from './modules/product';

Vue.use(Vuex)

const state = {}
const actions = ({})
const mutations = ({})
const getters = ({})

const modules = {
  common,
  products
  // Product
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules
})