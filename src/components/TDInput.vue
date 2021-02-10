<template>
    <div class="main-input" >
        <form class="wrapper" @submit.prevent="onSubmit">
            <button type="submit" class="input-btn"><i class="fas fa-chevron-down"></i></button>
            <input class="task-input" v-model="text" type="text" placeholder="What needs to be done?">
        </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data(){
        return{
            text: '',
        }
    },
    methods: {
        ...mapMutations(['createPost']),
        onSubmit(){
            this.createPost(this.text)
            this.text = ''
        },
    }
}
</script>



<style lang="scss" scoped>

.main-input {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #a7a7a7;
    
}

.wrapper {
    display: flex;
    padding: 10px;
    width: 100%;
}

.input-btn {
    border: 0; 
    background-color: transparent;
    outline: none;
    width: 1.4em;
    border-radius: .3em;
}

.input-btn:hover {
    background-color: #ececec;
}

.task-input {
    font-family: 'Raleway', sans-serif;
    font-style: italic;
    border: 0;
    outline: 0;
    flex: 1;
}
</style>
