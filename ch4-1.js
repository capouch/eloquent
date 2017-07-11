// First problem in Ch. 4 Eloquent JS
function range(start, finish) {
  let result = []
  let index = 0
  let nextVal = start
  for (let i = start; i <= finish; i++) {
    result[index++] = nextVal++
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

console.log(sum(range(1,10)))
