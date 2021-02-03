/* Deep comparison of two parameters for equality
   From Ch 4 homework Eloquent JS
   Brian Capouch 31 January 2021
*/

const deepEqual = (value1, value2) => {

  // Some low-hanging fruit before we dig in
  if (value1 == null || value2 == null)
  // incredibly, null is equal to null
    if (value1 == null && value2 == null)
      return true
    else
      return false // One null, one not

  // One is an object, one not; cannot be equal
  if ((typeof value1 == 'object' && typeof value2 != 'object') ||
   (typeof value2 == 'object' && typeof value1 != 'object'))
    return false

  // If neither is an object then directly test for eqaality
  if (typeof value1 != 'object' && typeof value2 != 'object')
    return (value1 === value2)

  // We're compaing two objects; get the keys from each
  let keys1 = Object.keys(value1),
    keys2 = Object.keys(value2)

  // Same number of keys in each?  Easy test!!
  if (keys1.length != keys2.length)
    // Cannot be equal!!
    return false

  /*
  Now the fun part; iterate over the keys from one
  Comparing to see if there is an equvalent in two
  If not, they're not equal; if so, same value?
  At end, if each key matches and values match, then
  they are equal
  */


  // Examine each key in turn
  for (key of keys1) {
    if (key in value2) {
      // So properties match!
      // Special case if they're both objects
      if ((typeof value1[`${key}`] == 'object') && (typeof value2[`${key}`] == 'object'))
        // We'll need to recurse if they're both objects
        if (deepEqual(value1[`${key}`],value2[`${key}`] ) == true)
          // They are indeed themselves deeply equal; go on
          continue
        else
          // If they're not, no reason to continue
          return false

      // So both aren't objects; are their values equal?
      if (value1[`${key}`] === value2[`${key}`]) {
        // Yep; go on to the next property
        continue
      } else {
        return false // They're not!!  Exit false
        }
      } // end if the keys exist in both
    else
      // Key does not exist in second object; exit false
      return false
  } // end for
  // We're good and deeply equal
  return true
}

/* Moved to lists.js
// Turn those tests from the book plus some of my own
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
*/

if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = deepEqual;
if (typeof global != "undefined" && !global.deepEqual)
  global.deepEqual = deepEqual;
