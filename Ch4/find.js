// These lines needed for testing
//require("./arrayToList.js")
//require("./prepend.js")

/* find: Look for a given value in a list object
   Riff on list exercise from Ch. 4 of Eloquent
   Brian Capouch 31 January 2021
*/

/*
// Iterative version
const find = (searchValue, list) => {
  // Iterate over entries looking for match
  while (list != null) {
    if (list.value == searchValue)
      return list
    else
      list = list.rest
    }

    // Note it will return null if no match
    return list
  }
*/


// Recursive version; very simple!!
const find = (searchValue, list) => {
  // Either we exhausted the list, or we found a match
  if (list == null || list.value == searchValue)
    return list
  else
    return find(searchValue, list.rest)
}



/*
// Here is my test scaffolding
let list = arrayToList([10, 20, 30, 40, 50, 60])
// Let's see if we can find that 40
console.log(find(30, list))
*/


if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = find;
if (typeof global != "undefined" && !global.find)
  global.find = find;
