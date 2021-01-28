/* prepend.js: Prepend a value to the front of a list
   Part of list exercise in Eloquent
   Brian Capouch 26 January 2021
*/

/*
const prepend = (value, list) => {
  // Convert list to JSON
  let jsonList = JSON.stringify(list)

  // Create new node, postpend list from parameter
  let newNode = '{"value":' + value + ', "rest":' + jsonList + "}"
  return JSON.parse(newNode)
}
*/

const prepend = (value, list)  => {
  let newNode = {value: value, rest: list}
  return newNode
}

// This makes sure the data is exported in node.js —
// `require('./path/to/.js')` will get you the function.
if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = prepend;
if (typeof global != "undefined" && !global.prepend)
  global.prepend = prepend;
