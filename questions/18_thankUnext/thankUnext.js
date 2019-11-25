import { runInNewContext } from "vm";
import { arrayExpression } from "@babel/types";

// create an array method called "next" that console.logs
// the next index in the array when called.

/*
 Example:
 someArr = ['shake', 'and', 'bake']
 someArr.next() // "shake"
 someArr.next() // "and" 
 someArr.next() // "bake"
*/

console.log(runInNewContext())
Array.prototype.next = function(number = 0){
    number.unshift()
    console.log(number)
}

// hint: you are adding functionality directly to the
// javascripts global Array object

// ****no test writing required on this stretch

// YOUR CODE (intentionally blank):

// no export statement required
