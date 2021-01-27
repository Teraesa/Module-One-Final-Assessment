/**

* Determines whether or not a number is odd.

* @param {number} n - The input number.
* @returns {boolean} - True if n is odd, false if n is even, or not a number.

*/
const isOdd = (n) => {
  return n % 2 === 1; //if true return true , else false
};

module.exports = isOdd;
// //function isOdd(n) {
//     if(n % 2 !== 1){
//         return false
//     }else{
//         return true
//     }
// }
