/* Modify Will's code from mammoth debug session to make it work
  Brian Capouch 12/30/20  - Do it in a compact single line
  */

// Make these constants, as they will not change over the course of the
//  program's run.  By convention, CONSTANTS ARE ALL CAPS
const ORDER = 8,
 B = '#',
 W = '-';

// This one, however, MUST be a variable; its value will change
let boardString = "" // Safety first; set it to empty string

// Outer loop generates ORDER lines
for (let i = 0; i < ORDER; i++) {
  let first = (i % 2 == 0 ? B : W ),
  second = (first == B ? W : B)
  // console.log("In outer for on pass " + i)
  // console.log("Using " + first + " for first and " + second + " for second")
  // Inner loop generates ORDER columns of a single line
  for (let j = 0; j < ORDER; j += 2) {
    // console.log("In inner for on pass " + j)
    boardString  += first + second
  } // end for j
  boardString += "\n"
} // end for i
console.log(boardString)
