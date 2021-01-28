/* lists.js: Code to manipulate linked lists
   From Ch 4 Homework problem 3 in Eloquent
   Brian Capouch 25 January 2021
*/

const arrayToList  = (array) => {
  // console.log("Starting with: " + array)

  // Output MUST be an object!!
  let newObject = {}

  // String to hold object-a-building
  let objectString = " "

  // String fragment used to compose
  const restString = ' "rest": '

  let spaces = "",
   braceCount = array.length // We'll need this later

  // We're going to recduce the length of the array by one each pass
  while (array.length > 0 ) {
    // This line does most of the work
    objectString += "{\n " + spaces + '"value": ' + array.shift() + ",\n" + spaces
    // Now begin building "rest" part
    objectString += restString

    // Indent is 2 spaces per pass
    spaces += "  "
    } // end while

  // Last entry doesn't have a block after
  objectString += "null\n"

  // Freaking closing braces are tricky
  // Adjust for first line only, back just one space
  spaces = spaces.slice(0,(spaces.length-1))
   // Now add one close brace for each entry
  for (let i = 0; i < braceCount; i++) {
   objectString += spaces + "}\n"
   // Back-indent by 2
   spaces = spaces.slice(0,(spaces.length-2))
   } // end for

  // console.log(objectString)

  // ALL DONE!!
  return JSON.parse(objectString)
 }

 // This makes sure the data is exported in node.js —
 // `require('./path/to/arrayToList.js')` will get you the function.
 if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
   module.exports = arrayToList;
 if (typeof global != "undefined" && !global.arrayToList)
   global.arrayToList = arrayToList;

   // I commonly put scaffolding code as a comment like This   // Convert string to object via JSON (from Stack Overflow)
      /*
     let jsonStr = objectString.replace(/(\w+:)|(\w+ :)/g, function(matchedStr) {
       return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
       });
     newObject = JSON.parse(jsonStr)
     */
