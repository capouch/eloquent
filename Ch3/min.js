/* min.js: Find the minimum of two numbers and return it
   Brian Capouch  16 January 21
*/

const min = function(one, two) {
  return (one <= two ? one : two)
}

console.log(min(15, 21))
console.log(min(21, 15))
console.log(min(21, 21))
