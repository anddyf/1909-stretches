function cache(Func) {
    if(typeof Func !== 'function'){
        throw "Input must be a function."
    }
    return function(){
    console.log(Func())
    }
}

module.exports = { cache };
