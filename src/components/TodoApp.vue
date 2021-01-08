<template>
    <div class="task-list">
        <TDInput />
        <TDListItem 
            v-for='task in todos'
            :key = 'task.id'
            :checked='task.isComplete'
            :text='task.text'
        />
        <TDFooter />
    </div>
</template>

<script>
import TDListItem from "../components/TDListItem.vue";
import TDInput from "../components/TDInput.vue";
import TDFooter from "../components/TDFooter.vue";

export default {
    name: "todo-app",
    props: ['todos'],
    components: {
        TDListItem,
        TDInput,
        TDFooter
    },
    data() {
        return{}
    }
}
</script>

