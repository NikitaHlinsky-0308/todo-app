<template>
  <div :class="$style.mainInput">
    <form :class="$style.wrapper" @submit.prevent="onSubmit">
      <button id="submitBtn" type="submit" :class="$style.inputBtn" data-test-id="inputBtn">
        <i class="fas fa-chevron-down"></i>
      </button>
      <input
        :class="$style.taskInput"
        data-test-id="taskInput"
        autofocus
        type="text"
        placeholder="What needs to be done?"
        v-model="text"
      />
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Input",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    ...mapMutations(["createPost"]),
    onSubmit() {
      this.createPost(this.text);
      this.text = "";
    }
  }
};
</script>

<style lang="scss" module>
.mainInput {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #a7a7a7;
}

.wrapper {
  display: flex;
  padding: 10px;
  width: 100%;
}

.inputBtn {
  border: 0;
  background-color: transparent;
  outline: none;
  width: 1.4em;
  border-radius: 0.3em;
}

.inputBtn:hover {
  background-color: #ececec;
}

.taskInput {
  font-family: "Raleway", sans-serif;
  font-style: italic;
  border: 0;
  outline: 0;
  flex: 1;
}
</style>
