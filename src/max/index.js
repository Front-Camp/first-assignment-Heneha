/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  /* your logic here...*/
  let maxValue = 0;
  for (var i=0;i<arr.length;i++){
  	if (arr[i] === Infinity || arr[i] === NaN){
  		continue;
  	}
  	if (arr[i] > maxValue ) {
  		maxValue = arr[i];
  	}
  }
  return maxValue;
};

export default max;
