<template>
  <div :class="$style.footerInput">
    <div class="counter">
      <p>2 2 left</p>
    </div>
    <div class="radio-footer">
      <TDRadio :options="filters" v-model="filter" />
    </div>
    <div class="condition">
      <button :class="$style.clearBtn" @click="del" data-test-id="removeBtn">
        Clear completed
      </button>
    </div>
  </div>
</template>

<script>
import TDRadio from "../components/TDRadio.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  props: ["radios"],
  data() {
    return {
      filters: ["All", "Active", "Completed"]
    };
  },
  components: {
    TDRadio
  },
  methods: {
    ...mapMutations(["initTasks"]),
    ...mapMutations({
      del: 'deleteCompleted' // `this.add()` будет вызывать `this.$store.commit('increment')`
    })
  },
  mounted() {
    this.initTasks();
  },
  computed: {
    ...mapGetters(["getState"]),
    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(value) {
        this.$store.commit("setFilter", value);
      }
    }
  }
};
</script>

<style lang="scss" module>
.clearBtn {
  background: rgba(255, 255, 255, 0);
  padding: 0 0.2em;
  border: none;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.3s;
  outline: none;
}

.clearBtn:hover {
  background-color: #007adfc2; /* Green */
  color: white;
}

.footerInput {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  font-size: 0.8em;
  padding: 0.2rem 0;
}
</style>
