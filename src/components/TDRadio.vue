<template>
  <div>
    <label :class="$style.formRadioBtn" data-test-id="radioLabel" v-for="option in options" :key="option">
      <input
        class="form-radio"
        data-test-id="radio"
        type="radio"
        name="filter"
        :value="option"
        :checked="value === option"
        @change="$emit('input', option)"
      />
      <span data-test-id="radio-btn">{{ option }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    value: String
  }
};
</script>

<style lang="scss" module>
.formRadioBtn {
  display: inline-block;
  margin-right: 10px;
}

.formRadioBtn input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
}

.formRadioBtn span {
  display: inline-block;
  cursor: pointer;
  padding: 0px 5px;
  font-size: 1em;
  line-height: 1.2em;
  border-radius: 4px;
  user-select: none;
}

.formRadioBtn input[type="radio"]:checked + span {
  border: 1px solid #999;
  border-color: crimson;
}
</style>
