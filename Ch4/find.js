// require("./arrayToList.js")
// require("./prepend.js")

const find = (searchValue, list) => {
  // This is an on-purpose infinite loop
  // Note use of break statement to get out of it
  while (list != null) {
    if (list.value == searchValue)
      return list
    else
      list = list.rest
    }
    return list
  }




/* Here is my test scaffolding
let list = arrayToList([10, 20, 30, 40, 50, 60])
// Let's see if we can find that 40
console.log(find(5, list))
*/


if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = find;
if (typeof global != "undefined" && !global.find)
  global.find = find;
