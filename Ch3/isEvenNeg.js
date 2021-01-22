/* isEven.js: recursively determine whether parameter is isEven
    This version allows for negative parameters
    Brian Capouch 16 January 21
*/

function isEven ( value ) {
  // Get absolute value
  if (value < 0)
    value = (-value)

  // Use book's rule to determine odd/even
  if (value  == 0 )
    return true
  else if( value == 1)
    return false
  else
    return isEven(value -= 2)
}

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
console.log(isEven(0))
console.log(isEven(-2))
