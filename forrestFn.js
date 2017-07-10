// Chapter 3 code example
function countChar(s, c, x){
  // Variable which was used for debugging; syntactically both below are same
  let temp
  var count = x;
  if (s.length == 0)
    return count

  //  Increment count when c matches the last char of string
  if ((s.charAt(s.length - 1)) === c){
    count++;
    var substring = s.substring(0, s.length-1);
    return countChar(s.substring(0,s.length-1), c, count);
  }
  else{
    // Move "end of string" one position and go again
    return countChar(s.substring(0,s.length-1), c, count);
  }
}
console.log(countChar("kakkasdfaskasdakk", "k", 0));
