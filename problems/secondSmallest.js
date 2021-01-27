/**

* Return the second smallest number in an array of numbers
*
* @param {number[]} arr - The input array of numbers
* @returns {number} - Returns the second smallest number.
*/
const secondSmallest = arr => {
    if(nums.length < 2) return null
      let smallest = Infinity //start at infinity because our number can be negative, we are ensurng that any number we see would be the smallest number
       let secondSmallest = Infinity //you had put -Infinity before

    for(let i = 0; i < nums.length; i++) {
		const num = nums[i]
		if(num < smallest){
			secondSmalllest = smallest
			smallest = num
		}else if(num < secondSmallest){
			secondSmallest = num 
		}
		}
		return secondSmallest;
	}


//corey code

// function smallest(nums) {
// 	return Math.min(...nums);
// }

//or

// function secondSmallest(nums){ //this code runs right 
// 	if(nums.length < 2){
// 		return null
// 	}
// 	nums.sort((a, b) => a - b) 
// 	return nums[1]
// }


module.exports = secondSmallest
