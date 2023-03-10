function isPalindrome(string) {
  // Write your algorithm here
  const len = string.length

  for(let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return false
    }
  }
  return true
}

/* 
  Add your pseudocode here
  if (the string is a palindrome, meaning the opposite syntax of a letter in a string, is the same as it's counterpart)
  {return true} else {false}
*/

/*
  Add written explanation of your solution here
  String should be converted to lowercase in order to account for any case sensitive differences
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
