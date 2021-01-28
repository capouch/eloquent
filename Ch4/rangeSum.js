/* Add up a range passed in as an array
     Homework #1, Chapter 4 Eloquent
     Brian Capouch 24 January 2021
*/

// Convert a start-end range to an array
const range = (start, end) => {
  let array = []
  for (let i = start; i <= end; i++)
    array.push(start++)
  console.log(array.length)
  return array
}

// Tote up the sum of all values in an array
const sum = (values) => {
  let runTotal = 0
  for (let value of values)
    runTotal += value
  return runTotal
}

console.log(sum(range(1,10)))
