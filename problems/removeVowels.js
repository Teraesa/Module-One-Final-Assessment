/**

* Removes all vowels from an input string.  Treat y as a consonant, not a vowel
*
* @param {string} str - The input string
* @returns {string} - Returns a new string without any vowels.
*/

const removeVowels = (str) => {
  let output = "";
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char)) {
      continue; // continue if our condition is true
    } else {
      output += char;
    }
  }
  return output;
};
//simple option
//return str.replace(/[aeiou]/gi. "") //without the i yiu would have to put in the caps

//corey version
// function removeVowels(str) {
//   let output = "";
//   const vowels = "aeiouAEIOU";
//   for (let i = 0; i < str.length; i++) {
//     // or  for(const char of str)
//     const char = str[i].toLowerCase();
//     if (removeVowels.includes(char).toLowerCase()) {
//       continue; // this allows us to skip to other iteration
//     } else {
//       outout += char;
//     }
//   }
//   return output;
// }

module.exports = removeVowels;
