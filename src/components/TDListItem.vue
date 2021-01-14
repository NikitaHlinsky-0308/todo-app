<template>   
    <label class="task">
        <input type="checkbox" class="checkbox" v-model="checked" v-on:click="$emit('completeTodo', index)"/>
        <span class="checkmark fas fa-check"></span>
        <span class="text-item">{{ text + " " + checked + " " + index}}</span>
    </label>
</template> 

<script>

export default {
    props: ['index', 'text', 'checked'],
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>

li {
    list-style-type: none;
}

ul {
    margin-left: 0;
    padding-left: 0; 
}

.task {
    display: block;
    padding: .2rem 0;
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
    font-size: .8em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: .2s;
}

.checkbox:checked + .checkmark::before {
    opacity: 1;
    color: #019b01;
}

.checkbox:checked + .checkmark {
    border-color: #019b01;
}

input[type="checkbox"]:checked + .text-item {
    text-decoration: line-through;
}

.checkbox:checked  .text-item {
    text-decoration: line-through;
}
</style>