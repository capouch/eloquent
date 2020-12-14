// First problem in Ch. 4 Eloquent JS
// Includes increment functionality
function range(start, finish, step) {
  // Love me the conditional statement
  increment = step?step:1
  let result = []
  let index = 0
  let nextVal = start
  for (let i = start; i <= finish; i += increment) {
    result[index++] = nextVal
    nextVal += increment
  }
  return result
}

function sum(inputArray) {
  let total = 0
  for (let i = 0; i < inputArray.length; i++){
    total += inputArray[i]
  }
  return total
}

console.log(range(5,2,-1))
console.log(sum(range(1,10)))
