/* isEven.js: recursively determine whether parameter is isEven
    Brian Capouch 16 January 21
*/

function isEven ( value ) {
  if (value  == 0 )
    return true
  else if( value == 1)
    return false
  else
    return isEven(value -= 2)
}

console.log(isEven(50))
console.log(isEven(75))
// Ooopers, infinite loop!!
// console.log(isEven(-1))
// Can we blow up the stack?
// console.log(isEven(34343434))
