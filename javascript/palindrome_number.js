let isPalindrome = function(number) {
  let stringNumber = String(number);

  for (var i = 0; i < Math.floor(stringNumber.length / 2); i++) {
    if (stringNumber[i] !== stringNumber[stringNumber.length - i - 1]) return false;
  }

  return true;
};

// very cool solution
// let isPalindrome = function(number) {
//   if (number < 0 || (number !== 0 && number % 10 === 0)) return false;
//   let num = number;
//   let reversed = 0;
//
//   while(num) {
//     reversed = (reversed * 10) + (num%10);
//     num = Math.floor(num/10);
//   }
//   return number === reversed;
// };

// input number
// output number

// no negative number is a palindrome
// every single digit number is a palindrome
// only double digit numbers with the same digit are palindromes
// for any other odd number

console.log(isPalindrome(0));           // true
console.log(isPalindrome(10));          // false
console.log(isPalindrome(101));         // true
console.log(isPalindrome(-242));        // false
console.log(isPalindrome(55));          // true
console.log(isPalindrome(-1));          // false
console.log(isPalindrome(1234321));     // true
