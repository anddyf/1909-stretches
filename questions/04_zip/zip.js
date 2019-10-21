/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/


  function zip(objs) {
    let newObj = {}
  for (let i = 0; i < objs.length; i++){
    let obj = objs[i]

   for( key in obj){
     let value = obj[key]
     let mykey = key
  
     if(!newObj[mykey]){
       newObj[mykey] = value
     }
     else{
       newObj[mykey] += value
     }
   }
  }
   return newObj
  }


module.exports = { zip };
