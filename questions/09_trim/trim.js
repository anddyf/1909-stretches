const trim = obj => {
    let value = Object.keys(obj)
    let objector = {}

 let objectify = value.forEach( element =>{
     if(element in obj){

      
      if(obj[element] !== null || obj[element] !== undefined){
        if(!objector[element]){
            objector[element] = obj[element]
        }
      }
     }

     
        
    })
   return objector
}

module.exports = { trim };
