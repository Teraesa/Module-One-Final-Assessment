/**

* Removes all strings with an even character count from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that have an odd number of characters
*/

const removeEvenStrings = (arr) => {
  let output = [];
  arr.forEach((words) => {
    // for (const word of words) can also be used here as the loop
    if (words.length % 2 === 1) {
      output.push(words);
    }
  });
  return output;
};

module.exports = removeEvenStrings;
//if we use filter we dont neec to create a new array it does it for us
//filter inherently returns the new array
// const removeEvenStrings = arr => {
// return words.filter((word) => {
//   if (word.length % 2 === 1) { also you can put return infront and dlt ln 26-28
//     return true;
//   } else {
//     return false;
//   }
// });
// }
