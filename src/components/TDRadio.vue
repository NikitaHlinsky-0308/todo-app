<template>
    <label class="form-radio-btn">
        <input type="radio" name="radio" value="1">
        <span>btn 1</span>
    </label>
</template>

<script>
export default {
    
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