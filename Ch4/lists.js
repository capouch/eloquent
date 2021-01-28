require ('./arrayToList.js')
require ('./listToArray.js')
require ('./nth.js')
require ('./prepend.js')

// For testing purposes
// console.log(arrayToList([1,2,3,4,5]))
// console.log(listToArray(arrayToList([1,2,3,4,5])))
// console.log(nth(arrayToList([1,2,3,4,5]),42))
// console.log(prepend(10, prepend(20, null)));

// Right out of the book!!
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
