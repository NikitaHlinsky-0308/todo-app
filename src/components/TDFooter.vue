<template>
    <div class="footer-input">
        <div class="counter">
            <p>2 2 left</p>
        </div>
        <div class="radio-footer"> 
            <TDRadio 
                v-for="radio in radios"
                :key = 'radio.text'
                :radioSelect='radio.isSelected'
                :radioText='radio.text'
            />
            {{radios.isComplete}}
        </div>
        <div class="condition">
            <button 
                class="clearBtn" 
                @click="deleteCompleted">Clear completed </button>
                <!-- "$emit('remove-all-todo', todo.isComplete)" -->
        </div>
    </div>
</template>

<script>
import TDRadio from "../components/TDRadio.vue";
import { mapGetters, mapMutations } from 'vuex';

export default {
    props: ['radios','todo'],
    // props: {
    //     radios,
    //     todo: {
    //         type: Object,
    //         required: true,
    //     },
    // },
    components: {
        TDRadio
    },
    methods:{
        ...mapMutations(['deleteCompleted']),
    },
    computed: {
        ...mapGetters(['getState']),
        todos(){
            return this.$store.state.listStub
        }
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