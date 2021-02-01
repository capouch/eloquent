/* Deep comparison of two objects for equality
   From Ch 4 homework Eloquent JS
   Brian Capouch 31 January 2021
*/

const deepEqual = (obj1, obj2) => {
  // Get the keys from each
  let keys1 = Object.keys(obj1),
       keys2 = Object.keys(obj2)

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
  if (key in obj2) {

    // Special case if they're both objects
    if ((typeof obj1[`${key}`] == 'object') && (typeof obj2[`${key}`] == 'object'))
      // We'll need to recurse if they're both objects
      if (deepEqual(obj1[`${key}`],obj2[`${key}`] ) == true)
        // They are indeed themselves deeply equal; go on
        continue
      else
        // If they're not, no reason to continue
        return false

    // So both aren't objects; are their values equal?
    if (obj1[`${key}`] === obj2[`${key}`]) {
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

// Turn those tests from the book plus one of my own
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
