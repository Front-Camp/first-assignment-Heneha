/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  /* your logic here...*/
  return arr.reduce((prev,curr)=> {
  	if (curr === NaN || curr === Infinity || curr === -Infinity) {
  		return curr;
  	} else if (typeof curr ==="string") {
  		let num = parseInt(curr);
        if (curr === NaN) {
          return prev;
        } else {
          return prev + num;
        }
  	}
  },0)
};

export default sumElements;
