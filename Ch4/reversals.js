/* Reverse arrays: two functions to do so
   As per homework from Ch4 of Eloquent
   One creates new array; one reverses in place
   Brian Capouch 24 January 2021
*/

// reverseArray: create new array, contents are reversed orig
const reverseArray = (array) => {
  let result = [],
   count = array.length

  // Easy peasy
  for (let i = 0; i < count; i++ )
    result.push(array.pop())
  return result
}

// reverseAraryInPlace: reverse contents of array in place
const reverseArrayInPlace = (array) => {
  // Pointers to front and back of array, temp variable
  let front = 0,
   back = array.length-1,
   temp

  // Continue until pointers cross
  while (front < back ) {
    temp = array[front]
    array[front] = array[back]
    array[back] = temp
    // Click the ratchets
    front++
    --back
    } // end while
  }

// Note difference in the way they have to be called

// This function needs a variable!
let myArray = [1,2,3,4,5,6,7,8]
reverseArrayInPlace(myArray)
console.log(myArray)

/*
// This function can be passed the array directly
console.log(reverseArray(1,2,3,4,5))
*/
