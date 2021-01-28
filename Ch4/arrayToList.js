/* lists.js: Code to manipulate linked lists
   From Ch 4 Homework problem 3 in Eloquent
   Brian Capouch 25 January 2021
   v2 27 January 2021
*/

const arrayToList  = (array) => {

  // Declare empty object for list-a-borning
  let listObject = {}

  // Prime the pump to initialize the list
  listObject = prepend(array.pop(), null)

  // Each pop() reduces the size of the array by one
  while (array.length > 0 ) {
    listObject = prepend(array.pop(), listObject)
    } // end while

  // ALL DONE!!
  return listObject
 }

 // This makes sure the data is exported in node.js —
 // `require('./path/to/arrayToList.js')` will get you the function.
 if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
   module.exports = arrayToList;
 if (typeof global != "undefined" && !global.arrayToList)
   global.arrayToList = arrayToList;

   // I commonly put scaffolding code as a comment like This

   // Convert string to object via JSON (from Stack Overflow)
      /*
     let jsonStr = objectString.replace(/(\w+:)|(\w+ :)/g, function(matchedStr) {
       return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
       });
     listObject = JSON.parse(jsonStr)
     */
