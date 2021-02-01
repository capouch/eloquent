/* Deep comparison of two objects for equality
   From Ch 4 homework Eloquent JS
   Brian Capouch 31 January 2021
*/

const deepEqual = (obj1, obj2) => {
  let keys1 = Object.keys(obj1),
       keys2 = Object.keys(obj2)

  if (keys1.length != keys2.length)
    return false

for (key of keys1) {
  // See if keys exist in both
  if (key in obj2)
    // See if both properties are objects
    if ((typeof obj1[`${key}`] == 'object') && (typeof obj2[`${key}`] == 'object'))
        // Call myself to test the two objects
        if (deepEqual(obj1[`${key}`],obj2[`${key}`] ) == true)
          continue // Go to next key
        else
          return false // Property is object, but two objects <> equal
    else
      return false // One is, one isn't an object


    //  Properties are not objects; see if the values are equal
    if (obj1[`${key}`] === obj2[`${key}`]) {
      continue
    } else {
      return false  // These values aren't equal
    }
  } // end if the keys exist in both
  else
    return false  // Key is not in both objects
  } // end for
// Indeed, we have deep equality 
return true
}

// Trun those tests from the book plus one of my own
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual({here: {is: "an"}}, {here: {is: "an"}}))
// -> true
