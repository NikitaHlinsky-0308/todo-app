<template>
    <div class="task-list">
        <TDInput />

        <TDListItem
            v-for="todo of filteredTasks"
            v-bind:key="todo.text"
            v-bind:todo="todo"
            v-on:remove-todo="completeTodo"
            v-on:remove-all-todo="completeAllTodo"
        />

        <TDFooter />
    </div>
</template>

<script>
import TDListItem from "@/components/TDListItem.vue";
import TDInput from "@/components/TDInput.vue";
import TDFooter from "@/components/TDFooter.vue";
import { mapGetters } from 'vuex';


export default {
    name: "TodoApp",
    components: {
        TDListItem,
        TDInput,
        TDFooter
    },
    methods: {
        completeTodo(index){
            this.$emit('remove-todo', index)
        },
        completeAllTodo(condition){
            this.$emit('remove-all-todo', condition)
        }
    },
    computed: {
        ...mapGetters(['filteredTasks']),
        todos(){
            return this.$store.state.listStub
        }
    }
}
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

