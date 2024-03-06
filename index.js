function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split("").reverse();
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== reversedWord[i]) {
      return false;
    } else{
      return true;
    }
  }
}

/* 
  Add your pseudocode here
  first i reverse the word then check each letter in the both words
  if they are the same then return true else return false

*/

/*
  Add written explanation of your solution here
  make a variable for reversed word and make this word as array then reverse it,
  the loop over word and reversed word if they are the same then return true
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
