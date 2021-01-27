/** Write a function that returns all the values from 1 to n inclusive, replacing all numbers that are a multiple of seven, or contain seven with "BOOM".
 * Sample Input: 20
 * Sample Output: [1,2,3,4,5,6,'BOOM',8,9,10,11,12,13,'BOOM',15,16,'BOOM',18,19,20]
 * @param {number} n - The number to count up to
 * @returns {number[]} - An array matching the pattern described above
 */
//inclusive means including n so we are doing a for loop in light of this
//need an array to return ; we can use const or let, but const means this array is not gonna be reassiged
const sevenBoom = (n) => {
  //n is a number it does not have indices
  let output = []; //you didnt have the array brackets here before Teraesa
  for (let i = 1; i <= n; i++) {
    // you had 20 here instead of n
    if (i % 7 === 0 || i.toString().includes("7")) {
      //turn i into a string and see of it includes 7. .includes checks to see if it is included and returns true or false. we have number thats y we changed them to a string
      output.push("BOOM");
    } else {
      output.push(i); // you had n here not i
    }
  }
  return output;
};

module.exports = sevenBoom;
