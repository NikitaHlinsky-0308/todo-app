<template>
    <div class="footer-input">
        <div class="counter">
            <p>2 2 left</p>
        </div>
        <div class="radio-footer"> 
            <!-- <TDRadio 
                v-for="radio in radios"
                :key = 'radio.id'
                :radioSelect='radio.isSelected'
                :radioText='radio.text'
            /> -->
            {{todo.isComplete}}
        </div>
        <div class="condition">
            <button 
                class="clearBtn" 
                v-on:click="$emit('remove-all-todo', todo.isComplete)"
                >Clear completed </button>
        </div>
    </div>
</template>

<script>
// import TDRadio from "../components/TDRadio.vue";

export default {
    // props: ['radios'],
    // props: {
    //     todo: {
    //         type: Object,
    //         required: true,
    //     }
    // },
    components: {
        // TDRadio
    }
}
</script>

<style lang="scss" scoped>

.clearBtn {
    background: rgba(255, 255, 255, 0);
    padding: 0 .2em;
    border: none;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    transition-duration: .3s;
    outline:none;
}

.clearBtn:hover {
    background-color: #007adfc2; /* Green */
    color: white;
}

.footer-input {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    font-size: .8em;
    padding: .2rem 0;
}

</style>