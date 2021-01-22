/* countChars.js: Count the number of a given char in a string
   Brian Capouch 16 January 21
*/

function countChars( someString, target ) {
  let charCount = 0
  for (let i = 0; i < someString.length; i++) {
    // console.log("Looking at " + someString[i])

    // My way
    charCount = ((someString[i] == target) ? ++charCount : charCount)

    // Another way
    // if (someString[i] == target)
    //  charCount++
  }
  return charCount
}

console.log(countChars('Brian Bedbug Blastomycosis', 'B'))
console.log(countChars('Brian Bedbug Blastomycosis', 'a'))
console.log(countChars('Brian Bedbug Blastomycosis', 'x'))
