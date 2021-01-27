import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [{
      text: '',
      isComlete: ''
    }]
  },
  mutations: {
    createPost(state, newPost){
      state.listStub.unshift(newPost)
    }
  },
  actions: {},
  modules: {}
});

