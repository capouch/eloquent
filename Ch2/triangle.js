/* Chapter 2 Exercises
  First exercise: print a triangle
  Brian Capouch 12/15/20
  12/17: Add alternate solutions
  */

const ROWMAX = 7 // What book does
let stringVal = "#"
  // Custom is to use simple letters i, j, k etc. for loop indices
  for (let i = 0; i < ROWMAX; i++) {
    console.log(stringVal);
    stringVal += "#";
  }

  /* Here's an alternative way to do it, demonstrating the hint
     given in the text, and also using a do() construct
  */

  // Constant and variable are already defined up above

  // Reset stringVal to starting value
  stringVal = "#"
  do {
    console.log(stringVal)
    stringVal += "#"
  } while (stringVal.length <= ROWMAX)

  /* Why not?  Here's the same thing, done with a while() loop */

  stringVal = '#'
  while (stringVal.length <= ROWMAX ) {
    console.log(stringVal)
    stringVal += "#"
  }
