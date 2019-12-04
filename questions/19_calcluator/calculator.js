
class Calculator {
    constructor(value = 0){
        this.value = value
    }

    add(num){
        this.value = this.value + 10
    }
    subtract(num){
        return this.value - num
    }
    divide(num){
        return this.value % num
    }
    multiply(num){
        return this.value * num
    }
    clear(num){
        return value
    }
}

module.exports = { Calculator };
