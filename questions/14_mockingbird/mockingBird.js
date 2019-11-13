const repeater = (func, n) => {
  // repeater runs a function n times and returns an array of its outputs
let array = []
if(func === null){
  func = function(){
    return 'row'
  }
}
  for ( let i = 0; i < n; i++){
  array.push(func())
}
 return array
};

module.exports = { repeater };
