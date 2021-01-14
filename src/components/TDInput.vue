<template>
    <div class="main-input">
        <div class="wrapper">
            <i class="input-btn fas fa-chevron-down"></i>
            <input class="task-input" type="text" placeholder="What needs to be done?">
        </div>
    </div>
</template>

<script>


export default {
    
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
    width: 1.4em;
}

.task-input {
    font-family: 'Raleway', sans-serif;
    font-style: italic;
    border: 0;
    outline: 0;
    flex: 1;
}
</style>
