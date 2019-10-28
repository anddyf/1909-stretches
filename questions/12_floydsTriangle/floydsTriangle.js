// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
let sum = 0
let str =''
 for ( let i = 0; i < n; i++){
    str += `${ n+= i} \n`
    for ( let j = 0; j < n; j++){
        str += `${n + j}`
    }
 }
 return ''
};


module.exports = { floydsTriangle };
