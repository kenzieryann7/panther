import Vue from 'vue';
import Vuex from 'vuex';

import { AuthDataModel } from '@/data/AuthDataModel.js';
import { UserDataModel } from '@/data/UserDataModel.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: AuthDataModel,
    user: UserDataModel
  },
  mutations: {
    SET_AUTH(state, value) {
      console.log('Token set to:');
      state.auth.token = value;
    }
  },
  actions: {
    init({ commit }) {
      console.log('Store.init');
      commit('SET_AUTH', 'no token');
    },
    setAuth({ commit }, value) {
      console.log('Store.setAuth');

      commit('SET_AUTH', value);

      //commit('MUTATION_NAME', {})
    }
  },
  modules: {},
  getters: {
    getToken: state => {
      return state.auth.token;
    },
    isAdmin: state => {
      return state.user.role === 'admin'; /// switch to const
    }
  }
});
