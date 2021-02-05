import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { text: 'One', isComplete: false},
      { text: 'Two', isComplete: false},
    ],
    radio: [
      {text: "layer 2", isSelected: false},
      {text: "layer 1", isSelected: false},
  ],
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
    deleteCompleted(state){
      state.todos = state.todos.filter(todo => !todo.isComplete)
      localStorage.setItem('tasks', JSON.stringify(state.todos))
    }
  },
  getters: {
    getState: state => {
      return state.todos
    },
    filteredTasks(state) {
      switch (state.filter) {
        case 'Active':
          return state.tasks.filter(task => !task.isComplete)
        case 'Completed':
          return state.tasks.filter(task => task.isComplete)
        default:
          return state.tasks
      }
    }
  },
  actions: {},
  modules: {}
});

