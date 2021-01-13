/* Show a simple little recursve program
    Brian Capouch 12 Jan 2021
*/

const recursePrint = function(start, max) {
  console.log(start)
  if (start < max) {
    recursePrint(++start, max)
  } else {
    return
  }
}

// Print out integers from one to 10, using iteration
for (let i = 0; i < 10; i++)
  console.log(i+1)
console.log('\n')

// Now do it with the recursive function

recursePrint(1, 10)
