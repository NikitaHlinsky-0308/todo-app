import Vue from "vue";
import Vuex from "vuex";
import v4 from 'uuid'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: "All",
    todos: []
  },
  getters: {
    filteredTasks(state) {
      switch (state.filter) {
        case "Active":
          return state.todos.filter(todo => !todo.isComplete);
        case "Completed":
          return state.todos.filter(todo => todo.isComplete);
        default:
          return state.todos;
      }
    }
  },
  mutations: {
    initTasks(state) {
      state.todos = JSON.parse(localStorage.getItem("tasks")) || new Array();
    },
    createPost(state, newPost) {
      state.todos.push({
        id: v4(),
        text: newPost,
        isComplete: false
      });
      localStorage.setItem("tasks", JSON.stringify(state.todos));
    },
    changeTaskStatus(state, {id, value}) {
      state.todos = state.todos.map(todo => {
        if(todo.id === id) return { ...todo, isComplete: value }
        else return todo
      })
    },
    setFilter(state, filter) {
      state.filter = filter;
    },
    deleteCompleted(state) {
      state.todos = state.todos.filter(todo => !todo.isComplete);
      localStorage.setItem("tasks", JSON.stringify(state.todos));
    }
  },
  actions: {
    initTasks(context) {
      context.commit("initTasks");
    }
  },
  modules: {}
});
