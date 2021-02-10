import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    filter: 'All',
  },
  getters: {
    getState: state => {
      return state.todos
    },
    filteredTasks(state) {
      switch (state.filter) {
        case 'Active':
          return state.todos.filter(todo => !todo.isComplete)
        case 'Completed':
          return state.todos.filter(todo => todo.isComplete)
        default:
          return state.todos
      }
    }
  },
  mutations: {
    initTasks(state){
      state.todos = JSON.parse(localStorage.getItem('tasks'))
    },
    createPost(state, newPost){
      state.todos.unshift({
        text: newPost,
        isComplete: false
      })
      localStorage.setItem('tasks', JSON.stringify(state.todos))
    },
    setFilter(state, filter) {
      state.filter = filter
    },
    deleteCompleted(state){
      state.todos = state.todos.filter(todo => !todo.isComplete)
      localStorage.setItem('tasks', JSON.stringify(state.todos))
    }
  },
  actions: {},
  modules: {}
});

