/* countBs.js: Count the number of 'B' chars in a string
   Brian Capouch 16 January 21
*/

function countBs( someString ) {
  let charCount = 0
  for (let i = 0; i < someString.length; i++) {
    // console.log("Looking at " + someString[i])

    // My way
    charCount = ((someString[i] == 'B') ? ++charCount : charCount)

    // Another way
    // if (someString[i] == 'B')
    //  charCount++
  }
  return charCount
}

console.log(countBs('Brian Bedbug Blastomycosis'))
