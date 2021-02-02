require ('./arrayToList.js')
require ('./listToArray.js')
require ('./nth.js')
require ('./prepend.js')
require ('./find.js')
require ('./deepEqual.js')

// For testing purposes
// console.log(arrayToList([1,2,3,4,5]))
// console.log(listToArray(arrayToList([1,2,3,4,5])))
// console.log(nth(arrayToList([1,2,3,4,5]),42))
// console.log(prepend(10, prepend(20, null)));

// Homework: Write a find function for this listToArray
// Such that if the element is there, it is returned as an objectString
// Or return null if the searched-for item is not there

// Right out of the book!!
console.log(arrayToList([10, 20, 30, 40, 50, 60]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(find(30, arrayToList([10, 20, 30, 40, 50, 60])))
// { value: 30, rest: { value: 40, rest: { value: 50, rest: {value: 60, rest: null} } } }
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// Turn those tests from the book plus some of my own
console.log("Tests of deepEqual")
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual({here: {is: "an"}}, {here: {is: "any"}}))
// -> false
console.log(deepEqual({here: {is: "an"}}, {here: {is: "an"}}))
// -> true
let i = 1, j = 1
console.log(deepEqual(i,j))
// -> true
console.log(deepEqual(i,i))
// -> true
console.log(deepEqual(i,null))
// -> false
console.log(null == null)
// -> true!!

if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = find;
if (typeof global != "undefined" && !global.find)
  global.find = find;
