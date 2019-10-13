function times(sum) {
    if(typeof sum !== 'number'){
      throw "Numbers only!"
    }
    return function(num){
      return sum *= num
    }
}

module.exports = { times };
