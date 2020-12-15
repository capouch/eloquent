/* Brian Capouch
   Fizzbuzz Ch2 12/15/20
*/

// Note I print i for debugging purposes here
for (let i = 1; i <= 100; i++) {
  // First is it divisible by both?
  if (i % 3 == 0 && i % 5 == 0)
    console.log(i + "Fizzbuzz")
  if ((i % 3 == 0)) {
    console.log(i + "Fizz")
    continue
  }
  else {
    // Number isn't divisible by 3. . .what about 5?
    if (i % 5 == 0) {
      console.log(i + "Buzz")
      continue
    }
  }
  console.log(i)
}
