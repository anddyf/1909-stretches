/*
largestDivisible returns the largest number from a list of numbers where that number is divisible by a passed in number
write the largestDivisible function

*/

function largestDivisible(arr, num) {
    if(arr.length === 0 ){
        return null
    }
    if(num === 0 ){
        return null
    }
    let newArr = []
    arr.forEach( element =>{
        if(element % num ===0){
            newArr.push(element)
        }
        if(element % num !== 0){
            return null
        }
    })
    return newArr.sort().slice(-1).join('')
}

// console.log(largestDivisible([1, 2, 3, 4, 5, 6, 7], 3));//6
// console.log(largestDivisible([1], 2));//null

module.exports = { largestDivisible };
