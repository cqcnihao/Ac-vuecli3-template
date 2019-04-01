/**
 * store 主文件入口
 */
import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common
  },
  state: {},
  mutations: {},
  actions: {}
})