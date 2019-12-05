/**
 * @function getters,mutations,actions {
 *     get_card_num
 *     mutations_card_num
 *     actions_card_num
 * }
 * @author clearlove
 * @aim show vuex
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	card_last_value : '',  //记录用户每次输入之前的值 初始值为空
};
//可以使用  也可以不使用
const getters = {
	get_card_num() {
		return state.card_last_value
	},
};
const mutations = {
	mutations_card_num(state, card_last_value) {
		state.card_last_value = card_last_value
	},
};
const actions = {
	actions_card_num(state,card_last_value){
		state.commit('mutations_card_num',card_last_value)
	},
};
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
