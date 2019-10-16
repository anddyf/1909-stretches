function groupBy(arr, attr) {
    let obj = {}
    arr.forEach(element =>{
        if(!obj[attr]&& typeof attr === 'string'){
           obj[element[attr]].push(element)

        }
        else{
            obj[attr(element) = element
        }
    })
    return obj
}

module.exports = { groupBy };
