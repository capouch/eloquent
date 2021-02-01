/* Deep comparison of two objects for equality
   From Ch 4 homework Eloquent JS
   Brian Capouch 31 January 2021
*/

const deepEqual = (obj1, obj2) => {
  // Get the keys from each
  let keys1 = Object.keys(obj1),
       keys2 = Object.keys(obj2)

  console.log(keys1, keys2)

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
// console.log("Made it to iteration")
for (key of keys1) {
  console.log ("examining " + key)
   console.log(" With a value of " + obj1[`${key}`])
   console.log(" and a value of " + obj2[`${key}`])
   console.log("Truth of test " + (obj1[`${key}`] == obj2[`${key}`]))
   console.log("Value of typeof test " + (typeof obj2[`${key}`] == 'object'))
  if (key in obj2) {
    console.log("Keys match!")
    // console.log(typeof obj1[`${key}`])
    // if (typeof obj1[`{key}`] == 'object')
    //  console.log("Need to compare objects--recurse?")
    if ((typeof obj1[`${key}`] == 'object') && (typeof obj2[`${key}`] == 'object'))
      if (deepEqual(obj1[`${key}`],obj2[`${key}`] ) == true)
        continue
      else
        return false

    if (obj1[`${key}`] === obj2[`${key}`]) {
      console.log("Match!!")
      continue // So far, so good
    } else {
      console.log("Exit 2")
      return false // not equal!!
    }
  }
  else {
    console.log("Exit 3")
    return false // They can't be equal
  }
  }
// We're good
return true
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual({here: {is: "an"}}, {here: {is: "an"}}))
// -> true
