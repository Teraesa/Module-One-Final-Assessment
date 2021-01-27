/**

* Determines the number of digits in a given number.

* @param {number} n - The input number.
* @returns {number} - Returns how many digits are in the input.

*/
//number 10 : 2 digits change the number to a string here, then get its length
//need a counter
const numberOfDigits = (n) => {
  let output = 0;
  return n.toString().length;
};

module.exports = numberOfDigits;
//const numberOfDigits = n => {
//     return (n + "").length
// }
