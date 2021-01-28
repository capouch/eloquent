/* nth: Find the nth entry in a list, or return undefined
   Part of list homework in Eloquent
   Brian Capouch 26 January 2021
*/

const nth = (list, which) => {
  // Sought-after element was too low, or too high
  if (which < 0 || list == null) return undefined

  // We found the nth node
  if (which == 0)
    return list.value
  else {
    // Keep going
    return nth(list.rest, --which)
    }
  }




// This makes sure the data is exported in node.js —
// `require('./path/to/.js')` will get you the function.
if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = nth;
if (typeof global != "undefined" && !global.nth)
  global.nth = nth;

// Iterative version below
/*
const nth = (list, which) => {
  let counter
  for (counter = 0 ; list.rest != null; counter++) {
    if (counter == which)
      break
    list = list.rest
    }
  }
    // console.log("counter: " + counter + " which: " + which )
    return (which == counter ? list.value : undefined)
  }
*/
