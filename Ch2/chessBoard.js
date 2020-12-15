/* chessBoard.js: Print a chess board of arbitrary size
   Brian Capouch
   15 December 2020
*/

// Set up our constants
// Defining white and black enables using other characters
//   and marginally enchances readability
const SIZE = 8,
  WHITE = ' ',
  BLACK = '#'

// Initialize variables
  boardString = "", boardRow = ''

// One iteration per row
for (let i = 0; i < SIZE; i++) {
  // Variables for two colors
  let first, second

  // Determine which way to alternate
  if (i % 2 == 0) {
    // Even row
    first = BLACK
    second = WHITE
    }
    else {
      first = WHITE
      second = BLACK
    }

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

  // Whew!!
  console.log(boardString)
