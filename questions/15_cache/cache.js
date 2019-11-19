function cache(func) {
    if(typeof func !== 'function'){
        throw new Error("Input must be a function.")
    }
    const memo = {}
    return function(...num){
        if (num in memo){
            return memo[num]
        }
        else{
            memo[num] = func(...num)
            return memo[num]
        }
    }
}

module.exports = { cache };
