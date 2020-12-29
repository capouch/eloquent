/* chessBoard2.js: Print a chess board of arbitrary size
   Rev. 2; use constants for size and token characters
   Brian Capouch
   15 December 2020
*/

// Set up our constants
// Defining white and black enables using other characters
//   and marginally enchances readability
// For now use the values in the exercise
const SIZE = 8,
  WHITE = '#',
  BLACK = ' '

// Initialize variables
  // Our final board
  let boardString = "", 
  // Temporary string for each new row
  boardRow = ''

// One iteration per row
for (let i = 0; i < SIZE; i++) {
  // Variables for two colors
  let first, second
  // Note at this point both bindings are "undefined"

  // Determine which way to alternate
  first = (i % 2 == 0 ? BLACK:WHITE)
  second = (i % 2 == 0 ? WHITE:BLACK)

  // Now put together one row
  for (let j = 0; j < SIZE; j++)
    if (j % 2 == 0) // Alternate
      boardRow += first
    else
      boardRow += second

  // Temrinate and add to board; reset row for next j loop
  boardString += boardRow + "\n"
  boardRow = ''
  }

  // Whew!! Print board
  console.log(boardString)
