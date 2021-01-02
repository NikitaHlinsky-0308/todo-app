<template>
    <div class="task-list">
        <TDInput />
        <TDListItem />
        <TDListItem />
        <TDListItem />
        <TDFooter />
    </div>
</template>

<script>
import TDListItem from "../components/TDListItem.vue";
import TDInput from "../components/TDInput.vue";
import TDFooter from "../components/TDFooter.vue";

export default {
    name: "todo-app",
    components: {
        TDListItem,
        TDInput,
        TDFooter
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;1,200&display=swap');

* {
    margin: 0;
    padding: 0;
}

h1, span {
    font-size: 1.5rem;
}

body {
    background-color: #d1cece;
    color: #6d6d6d;
    font-family: 'Raleway', sans-serif;
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