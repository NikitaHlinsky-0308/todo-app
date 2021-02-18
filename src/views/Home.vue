<template>
  <div class="task-list">
    <TDInput />

    <TDListItem
      v-for="todo of filteredTasks"
      v-bind:key="todo.text"
      v-bind:todo="todo"
      v-bind:isCompleted="todo.isComplete"
      @change=" e => setTask(todo.id, e.target.checked)"
    />

    <TDFooter />
  </div>
</template>

<script>
import TDListItem from "@/components/TDListItem.vue";
import TDInput from "@/components/TDInput.vue";
import TDFooter from "@/components/TDFooter.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TodoApp",
  components: {
    TDListItem,
    TDInput,
    TDFooter
  },
  methods: {
    ...mapMutations(["changeTaskStatus"]),

    setTask(id, value) {
      this.changeTaskStatus({ id, value });
    }
  },
  computed: {
    ...mapGetters(["filteredTasks"])
  }
};
</script>

<style lang="scss" scoped>
.btn1 {
  background: #000;
}

.task-list {
  margin: 0 auto;
  height: auto;
  width: 30vw;
  line-height: 1.8;
  background-color: #fff;
  box-shadow: 0 3px 10px #36363680;
}
</style>
