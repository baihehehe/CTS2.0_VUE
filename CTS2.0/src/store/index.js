
/*vuex核心管理模块*/

import Vue from 'vue'
import Vuex from 'vuex'

import state from './state/state'
import mutations from './mutatios/mutatios'
import getters from './getters/getters'
import actions from './actions/actions'


Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
