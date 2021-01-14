<template>
    <div class="footer-input">
        <div class="counter">
            <p>2 2 left</p>
        </div>
        <div class="radio-footer"> 
            <TDRadio 
                v-for="radio in radios"
                :key = 'radio.id'
                :radioSelect='radio.isSelected'
                :radioText='radio.text'
            />
        </div>
        <div class="condition">
            <p>Clear completed</p>
        </div>
    </div>
</template>

<script>
import TDRadio from "../components/TDRadio.vue";

export default {
    props: ['radios'],
    components: {
        TDRadio
    }
}
</script>

<style lang="scss" scoped>

.footer-input {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    font-size: .8em;
    padding: .2rem 0;
}

</style>