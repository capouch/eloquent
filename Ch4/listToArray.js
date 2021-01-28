/* listToArray.js: Convert a list object back to an array
   Part of homework for Eloquent, Ch 4
   Brian Capouch 26 January 2021
*/

const listToArray = (list) => {
  let array = []
  // This is an on-purpose infinite loop
  // Note use of break statement to get out of it
  while (true) {
    array.push(list.value)
    list = list.rest
    if (list.rest == null ) {
      // All done BUT push last value!!
      array.push(list.value)
      break
    }
  }
  return array
}

// This makes sure the data is exported in node.js —
// `require('./path/to/.js')` will get you the function.
if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = listToArray;
if (typeof global != "undefined" && !global.listToArray)
  global.listToArray = listToArray;
