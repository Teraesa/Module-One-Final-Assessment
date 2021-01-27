/** Remove all numbers at odd indices from an array
 * @param {number[]} arr - The input array
 * @returns {number[]} - An array removing all elements initially appearing at an odd index
 */
const removeNumbersAtOddIndices = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      output.push(arr[i]);
    }
  }
  return output;
};

module.exports = removeNumbersAtOddIndices;
// const removeNumberAtOddIndices = arr => {
//     let output = []
//     for (let i = 0; i < arr.length; i += 2){ using 2 just targets the elments we do want and not the odd they are left out of the returned output
//         output.push(arr[i])
//     }
//     return output
// }
