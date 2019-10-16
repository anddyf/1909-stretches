// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE

  if(str1.length !== str2.length){
    return false
  }

  let arrayOne = str1.split('').sort().join('')
  let arrayTwo = str2.split('').sort().join('')

  if(arrayOne === arrayTwo){
    return true
  }
};

module.exports = { checkAnagrams };
