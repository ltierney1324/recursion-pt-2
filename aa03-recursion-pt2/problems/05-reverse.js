/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
  // Your code here
  if(str.length <=1){
    return str;
  }
  return reverse(str.substring(1)) + str.charAt(0);
}


// function reverse(str) {
//   // Your code here 
//   if (str === "") { //if string is empty, return the string.
//     return str;
//   }

// //recursively take the first character and place it at the end
//   return reverse(str.slice(1)) + str[0];
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
