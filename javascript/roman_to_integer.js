let romanToInt = function(roman) {
  const ROMAN_NUMERALS = { 'I': 1, 'V': 5, 'X': 10, 'L': 50,
                           'C': 100, 'D': 500, 'M': 1000,
                         }
  let sum = 0;
  for (var i = 0; i < roman.length; i++) {
    if (ROMAN_NUMERALS[roman[i]] <= ROMAN_NUMERALS[roman[i - 1]] || roman[i - 1] === undefined) {
      sum += ROMAN_NUMERALS[roman[i]];
    } else {
      sum += ROMAN_NUMERALS[roman[i]] - (ROMAN_NUMERALS[roman[i - 1]] * 2);
    }
  }

  return Math.abs(sum);
};

// input string
// output number

// convert roman numeral number into an integer
// only from 1 to 3999
// I = 1    L = 50    M = 1000
// V = 5    C = 100
// X = 10   D = 500

console.log(romanToInt('I'));             // 1
console.log(romanToInt('II'));            // 2
console.log(romanToInt('III'));           // 3
console.log(romanToInt('IV'));            // 4
console.log(romanToInt('V'));             // 5
console.log(romanToInt('VI'));            // 6
console.log(romanToInt('IX'));            // 9
console.log(romanToInt('XIII'));          // 13
console.log(romanToInt('XXXVIII'));       // 38
console.log(romanToInt('XLIV'));          // 44
console.log(romanToInt('CDXCVIII'));      // 498
console.log(romanToInt('MMMCMXCIX'));     // 3999

// store roman numeral conversions in object
// go through string and find the conversion
// if the current char === last char || last char === undefined, add that value to an index in an array
// if it the current char !== last char, increase converting array index by one
// add that new value to the converting array
// once done iterating, iterate through the converting array
// if the current element is > next value, add them together
// if the current < next value, subtract current value from next value
// if next value === undefined continue,
