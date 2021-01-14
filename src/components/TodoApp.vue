<template>
    <div class="task-list">
        <TDInput />
        <TDListItem 
            v-for='task in todos'
            :key = 'task.id'
            :index = 'task.id'
            :checked='task.isComplete'
            :text='task.text'
            v-on:complete-todo="completeTodo"
        />
        <TDFooter
            v-bind:radios="radioStub"
        />
    </div>
</template>

<script>
import TDListItem from "@/components/TDListItem.vue";
import TDInput from "@/components/TDInput.vue";
import TDFooter from "@/components/TDFooter.vue";

export default {
    name: "todo-app",
    props: ['todos'],
    components: {
        TDListItem,
        TDInput,
        TDFooter
    },
    methods: {
        completeTodo(index){
            alert(index)
        }
    },
    data() {
        return{
            radioStub: [
            {id: 1, text: "layer 1", isSelected: false},
            {id: 2, text: "layer 2", isSelected: false},
        ]
        }
    }
}
</script>

<style lang="scss" scoped>
.task-list {
    margin: 0 auto;
    height: auto;
    width: 30vw;
    line-height: 1.8;
    background-color: #fff;
    box-shadow: 0 3px 10px #36363680;
}
</style>

