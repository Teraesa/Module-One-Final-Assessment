//const numberOfDigits = require("./numberOfDigits")

/** Remove all odd numbers from an array
 * @param {number[]} arr - The input array
 * @returns {number[]} - The input array with all odd number removed
 */
const removeOddNumbers = (arr) => {
  return arr.filter((num) => {
    //filter will return the array and keep the odd num i want
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
};
// const removeOddNumbers = (nums) => {
//   return nums.filter((num) => num % 2 === 0);
// };
module.exports = removeOddNumbers;
