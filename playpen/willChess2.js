/* Modify Will's code from mammoth debug session to make it work
  Brian Capouch 12/28/20
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
  // console.log("In outer for on pass " + i)
  // Inner loop generates COLMAX columns of a single line
  for (let j = 0; j < ORDER; j ++) {
    // console.log("In inner for on pass " + j)
    boardString += (i % 2 == 0 ? (j % 2 == 0 ? B : W) : (j % 2 == 0 ? W : B))
  } // end for j
  boardString += "\n"
} // end for i
console.log(boardString)
