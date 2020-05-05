var reverse = function(x) {
  let reversedNumber = +[...String(Math.abs(x))].reverse().join('');
  if (reversedNumber > Math.pow(2, 31)) return 0
  return (x >= 0) ? reversedNumber : -reversedNumber;
};

console.log(reverse(1));            // 1
console.log(reverse(0));            // 0
console.log(reverse(100));          // 1
console.log(reverse(2345));         // 5432
console.log(reverse(-87));          // -78
console.log(reverse(1534236469));   // 0

// input number
// output number

// reverse a given integer, positive or negative
// what happens to numbers like 10? do they become 1?
// take the absolute of the number, turn it to a string, to array, reverse, join and make a number
// if number passed in was negative, return negative version, else return number
