let longestCommonPrefix = function(array) {
  let longestPrefix = '';
  if (array.length === 0) return '';

  for (var i = 1; i <= array[0].length; i++) {
    let currentPrefix = array[0].substr(0, i)
    if (array.every(word => word.substr(0, i) === currentPrefix)) {
      longestPrefix = currentPrefix;
    } else {
      return longestPrefix;
    }
  }

  return longestPrefix;
};

// input array of string
// output string

// array contains string of words only consisting of chars a-z (case-sensitive)
// retrieve the longest prefix out of all the words
// if there is no common prefix, return an empty string
// array can be anysize

console.log(longestCommonPrefix(['hello', 'hey', 'helmet']));         // 'he'
console.log(longestCommonPrefix(['yesyes', 'yesyesyes', 'yesyse']));  // 'yesy'
console.log(longestCommonPrefix(['oh', 'no', 'help']));               // ''
console.log(longestCommonPrefix(['what', 'what', 'what']));           // 'what'
console.log(longestCommonPrefix([]));                                 // ''

// have a for loop
// if every substring from 0 to i is the same,
// save that as longest prefix
// increment substring
// if false return longest prefix
