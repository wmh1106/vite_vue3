import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 1,
    };
  },
  getters: {
    double(state) {
      return state.count * 2;
    },
  },

  mutations: {
    add(state, num) {
      state.count += num;
    },
  },
  actions: {
    asyncAdd({ commit }, obj) {
      setTimeout(() => {
        commit("add", obj);
      }, 500);
    },
  },
});
