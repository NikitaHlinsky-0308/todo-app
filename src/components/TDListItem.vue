<template>
  <label :class="$style.task" data-test-id="task">
    <input
      type="checkbox"
      data-test-id="checkbox"
      :class="$style.checkbox"
      v-model="todo.isComplete"
      @change="e => $emit('change', e)"
    />

    <span :class="$style.checkmark" class="fas fa-check" data-test-id="checkbox-img"></span>
    <span :class="$style.textItem" data-test-id="textItem">{{ todo.text + ' ' + todo.isComplete}}</span>
  </label>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" module>
li {
  list-style-type: none;
}

ul {
  margin-left: 0;
  padding-left: 0;
}

.task {
  display: block;
  padding: 0.2rem 0;
  border-bottom: 1px solid #c4c4c4;
}

.checkbox {
  -webkit-appearance: none;
  -moz-appearance: none;
}

.checkmark {
  display: inline-block;
  position: relative;
  height: 25px;
  width: 25px;
  border: 1px solid #a7a7a7;
  border-radius: 50%;
}

.checkmark::before {
  display: block;
  font-size: 0.8em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.2s;
}

.checkbox:checked + .checkmark::before {
  opacity: 1;
  color: #019b01;
}

.checkbox:checked + .checkmark {
  border-color: #019b01;
}

input[type="checkbox"]:checked + .textItem {
  text-decoration: line-through;
}

.checkbox:checked .text-item {
  text-decoration: line-through;
}
</style>
