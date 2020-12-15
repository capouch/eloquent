/* Brian Capouch
   Fizzbuzz Ch2 12/15/20
   Can this be done with a switch()???
   This version doesn't work!!
*/

let i = 1

while (i <= 100) {
  switch (i) {
    case !(i % 3):
      console.log("Fizz")
      break
    case (i % 5 == 0):
      console.log(i % 3 == 0? i: "Buzz")
    default:
      console.log(i)
    }
    i++
}
