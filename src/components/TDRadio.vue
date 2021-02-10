<template >
    <div>
        <label class="form-radio-btn" v-for="option in options" :key="option">
            <input
                type="radio"
                name="filter"
                :value="option"
                :checked="value === option"
                @change="$emit('input', option)"
            >
            <span>{{ option }}</span>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        options: Array,
        value: String
    }
}
</script>

<style lang="scss" scoped>  

.form-radio-btn {
    display: inline-block;
    margin-right: 10px;
    
}

.form-radio-btn input[type=radio] {
	-webkit-appearance: none;
    -moz-appearance: none;
}

.form-radio-btn span {
	display: inline-block;
	cursor: pointer;
    padding: 0px 5px;
    font-size: 1em;
	line-height: 1.2em;
	border-radius: 4px;
	user-select: none;
}

.form-radio-btn input[type=radio]:checked + span {
    border: 1px solid #999;
    border-color: crimson;
}

</style>