// Reverse an array, returning new array

function reverseArray(inputArray) {
  let result = []
  let counter = 0;
  for (let i = inputArray.length-1; i >= 0; i--) {
    result[counter++] = inputArray[i]
  }
  return result
}

let test = [1, 2, 3, 4, 5, 6]
console.log(test)
console.log(reverseArray(test))
