// Reverse an array in place

function reverseInPlace(input) {
  // Sub 1 from length b/c of zero base
  let j = input.length-1
  let temp
  for (let i = 0; i < j; i++) {
    // Remember ith value
    temp = input[i]
    // Bring down upper
    input[i] = input[j]
    // Put saved value in top; decrement counter
    input[j--] = temp
  }
}

let test = [1,2,3,4,5,6]
console.log(test)
reverseInPlace(test)
console.log(test)
