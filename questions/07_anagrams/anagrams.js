// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE
  let arrayOne = str1.split('')
  let arrayTwo = str2.split('')

  let board = arrayOne.filter(element =>{
    if(arrayTwo.includes(element)){
      return true
    }
  })
  if(board.length === 0){
    return false
  }
};

module.exports = { checkAnagrams };
