/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(data) {
   let arrayNum = []

   data.forEach((dada,idx) => {
     arrayNum.push(dada.sortOrder)
   })
   arrayNum.sort()
   return arrayNum
}

module.exports = { sortOrder };
