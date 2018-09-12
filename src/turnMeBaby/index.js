/**
 * This function should just reverse string
 *
 * @param {string} str - string of any length
 * @return {string} - reversed string
 * @example
 * turnMeBaby('hello');     // 'olleh'
 * turnMeBaby('Some text'); // 'txet emoS'
 */
const turnMeBaby = str => {
  /* your logic here...*/
  if (typeof str !== 'string') {
          return throw new Error('this is not a string');
        }else {
        return  str.split('').reverse().join('')
      	}
};

export default turnMeBaby;
