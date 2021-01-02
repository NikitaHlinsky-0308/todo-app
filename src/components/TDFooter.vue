<template>
    <div class="footer-input">
        <div class="counter">
            <p>2 2 left</p>
        </div>
        <div class="radio-footer"> 
            <label class="form-radio-btn">
                <input type="radio" name="radio" value="1">
                <span>btn 1</span>
            </label>
            <label class="form-radio-btn">
                <input type="radio" name="radio" value="2">
                <span>btn 2</span>
            </label>
            <label class="form-radio-btn">
                <input type="radio" name="radio" value="3">
                <span>btn 3</span>
            </label>
        </div>
        <div class="condition">
            <p>Clear completed</p>
        </div>
    </div>
</template>

<style scoped>

.footer-input {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    /* text-align: center; */
    font-size: .8em;
    padding: .2rem 0;
}

.radio-footer {
    
}

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