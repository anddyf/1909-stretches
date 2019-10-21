function groupBy(arr, attr) {
    let obj = {}
    let array =[]
    let numarr = []
    arr.forEach(element =>{
        if(!obj[attr]){
           obj[element[attr]] = []
        }
        if(typeof element === 'string'){
            obj[attr]= obj[attr].push(element) 
        }
  
        else{
            obj[attr(element)] = element
        }
    })
    return obj
}

module.exports = { groupBy };
