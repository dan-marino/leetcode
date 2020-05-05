function maxSubArray(array) {
  let maxSubArray = array[0];
  let globalmaxSubArray = array[0];

  for (var i = 1; i < array.length; i++) {
    maxSubArray = Math.max(array[i], maxSubArray + array[i]);
    if (maxSubArray > globalmaxSubArray) globalmaxSubArray = maxSubArray
  }

  return globalmaxSubArray;
}

// input array
// output number

// which subarray has the largest sum
// return that sum

// sum = 0
// go through each subarray
// nested for loop
// substringTotal = array.slice(start, end).reduce(sum)
// if (substringTotal > sum) sum = substringTotal
//
//
console.log(maxSubArray([1, 2, -5, 4, 5, -1]));       // 9
console.log(maxSubArray([1, 11, -3, 4, -5, -1]));     // 13
console.log(maxSubArray([1, -4, -5, -6, 99]));        // 99
console.log(maxSubArray([1]));                        // 1
console.log(maxSubArray([0]));                        // 0
console.log(maxSubArray([-1]));                       // -1
console.log(maxSubArray([-1, -2]));                   // -1
console.log(maxSubArray([-2, 1]));                    // 1
