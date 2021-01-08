<template>
  <div class="about">
    <h1>TODO.</h1>
    <TodoApp 
      v-bind:todos='listStub'
    />
  </div>
</template>

<script>
import TodoApp from "../components/TodoApp.vue";

export default {
    name: 'About',
    components: {
      TodoApp
    },
    data() {
      return {
        listStub: [
          {id: 1, text: "Убрать в доме", isComplete: false},
          {id: 2, text: "Выгулять собаку", isComplete: false},
          {id: 3, text: "Зъисты сала", isComplete: false},
        ]
      }
    }
}
</script>

