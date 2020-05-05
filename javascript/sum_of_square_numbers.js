function setUpPerfectSquares(number) {
  let perfectSquares = [0];

  for (var i = 1; perfectSquares[perfectSquares.length - 1] < number; i++) {
    perfectSquares.push(Math.pow(i, 2));
  }
  return perfectSquares;
}

function judgeSquareSum(number) {
  for (var i = 0; i < array.length; i++) {
    array[i]
  }

  let perfectSquares = setUpPerfectSquares(number);

  return perfectSquares.some(perfectSquare => {
    let complement = number - perfectSquare;
    complementArray.push(complement);
    return (perfectSqaures.includes(perfectSquare))
  });
}

// var judgeSquareSum = function(c) {
//   for(var i=Math.floor(Math.sqrt(c));i>=0;i--){
//     if (Number.isInteger(Math.sqrt(c-i*i))) return true
//   }
//   return false
// };


// input non negative integer
// output boolean

// it two numbers are squared respectively and are summed together
// to equal the number passed in, return true, else return false

//
// if both are perfect squares then return true


// complementArray = []
// array of perfect squares up to that number
// iterate through each perfectSquare in that array
// if current perfectSqaure is in the complementArray return true
// push (number - current perfectSquare) into complement
// return false

// for every number, make a square root of that number
// stop looping once that number > than number passed in

console.log(judgeSquareSum(5));      // true
// 2^2 + 1^2
// 4 + 1
// 5
// [1, 4]
// complementArray = [4]

console.log(judgeSquareSum(20));    // true
// 4^2 + 2^2
// 16 + 4
// 20
// [1, 4, 9, 16]
// complementArray = [19, 16, 11]

console.log(judgeSquareSum(0));     // true
// 0^2 + 0^2
// []

console.log(judgeSquareSum(1));     // true
// 0^2 + 1^2
// [0, 1]

console.log(judgeSquareSum(3));     // false

console.log(judgeSquareSum(16));    // true
// 0^2 + 4^2
