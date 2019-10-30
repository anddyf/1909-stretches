// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
let sum = 1
let arr = []

 for ( let i = 0; i < n; i++){
    const currentRow  = []
    for ( let j = 0; j <= i; j++){
        currentRow.push(sum)
        sum += 1
    }
    arr.push(currentRow.join(''))
 }

 return arr.join('')

};


module.exports = { floydsTriangle };
