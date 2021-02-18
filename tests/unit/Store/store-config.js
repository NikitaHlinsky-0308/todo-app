import Vuex from "@/store/index.js";

export default {
  state: {
    filter: "All",
    todos: []
  },
  actions: Vuex.actions,
  mutations: Vuex.mutations,
  getters: Vuex.getters
};
