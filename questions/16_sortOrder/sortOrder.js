/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(data,key, correct) {
   let arrayNum = []
    let createSort = []
   data.forEach((dada,idx) => {
     arrayNum.push(dada.sortOrder)
   })
   arrayNum.sort()
 
    data.forEach( data =>{
        arrayNum.find(element => {
            if(data[key] === element){
                createSort.push(data[correct])
            }
        })
    })
   return createSort
}

module.exports = { sortOrder };
