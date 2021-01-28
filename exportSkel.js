// This makes sure the data is exported in node.js —
// `require('./path/to/arrayToList.js')` will get you the function.
if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = arrayToList;
if (typeof global != "undefined" && !global.arrayToList)
  global.arrayToList = arrayToList;
