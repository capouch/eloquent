/* Modify Will's code from mammoth debug session to make it work
  Brian Capouch 12/28/20
  */

// Make these constants, as they will not change over the course of the
//  program's run.  By convention, CONSTANTS ARE ALL CAPS
const ROWMAX = 8,
 COLMAX = 8,
 B = '#',
 W = '-';

// This one, however, MUST be a variable; its value will change
let stringVal = "" // Safety first; set it to empty string

// Outer loop generates ROWMAX lines
for (let i = 0; i < ROWMAX; i++) {
 // console.log("In outer for on pass " + i)

 // Inner loop generates COLMAX columns of a single line
 for (let j = 0; j < COLMAX; j ++) {
  // console.log("In inner for on pass " + j)
  if (i % 2 == 0) {
    // console.log("I am in if part of test")
    // stringVal = (w += b);
    stringVal += (j % 2 == 0? B : W)
    // console.log("Even building stringVal: " + stringVal)
    } else {
    // console.log("I am in else part of test")
    // stringVal = (b += w);
    stringVal += (j % 2 == 0? W : B)
    // console.log("Odd building stringVal: " + stringVal)
    } // end if
  } // end for j
  stringVal += "\n"
} // end for i
console.log(stringVal)
