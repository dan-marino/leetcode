function climbStairs(number) {
  let staircase = [1, 1]
  while (staircase.length <= number) {
    staircase.push(staircase[staircase.length - 1] + staircase[staircase.length - 2])
  }

  return staircase[staircase.length - 1]
}

// input number
// output number

// the number passed in represents the amount of steps in the stairs
// you can either go two steps at a time, or you can go one step at a time
// how many ways can you take the stairs?
// n will always be a positive number

console.log(climbStairs(0));    // 1
console.log(climbStairs(1));    // 1
console.log(climbStairs(2));    // 2
// 1. 1 + 1
// 2. 2
console.log(climbStairs(3));    // 3
// 1. 1 + 1 + 1
// 2. 2 + 1
// 3. 1 + 2
console.log(climbStairs(4));
// 1. 1 + 1 + 1 + 1
// 2. 2 + 2
// 3. 1 + 1 + 2
// 4. 1 + 2 + 1
// 5. 2 + 1 + 1
console.log(climbStairs(5));
// 1. 1 + 1 + 1 + 1 + 1
// 2. 2 + 2 + 1
// 3. 2 + 1 + 1 + 1
// 4. 1 + 2 + 1 + 1
// 5. 1 + 1 + 2 + 1
// 6. 1 + 1 + 1 + 2
// 7. 1 + 2 + 2
// 8. 2 + 1 + 2
console.log(climbStairs(6));
// 1.  1 + 1 + 1 + 1 + 1 + 1
// 2.  2 + 2 + 2
// 3.  2 + 1 + 1 + 1 + 1
// 4.  1 + 2 + 1 + 1 + 1
// 5.  1 + 1 + 2 + 1 + 1
// 6.  1 + 1 + 1 + 2 + 1
// 7.  1 + 1 + 1 + 1 + 2
// 8.  1 + 2 + 2 + 1
// 9.  1 + 2 + 1 + 2
// 10. 1 + 1 + 2 + 2
// 11. 2 + 1 + 1 + 2
// 12. 2 + 2 + 1 + 1
// 13. 2 + 1 + 2 + 1
console.log(climbStairs(38));

// if even number, you can always take only odd or only even
// if odd, you can always take only odd
// you can always substitute 2 for any pair of 1's
// if even number 2 + Math.floor(number / 2) + (number - 1)
// if odd number 1 + Math.floor(number / 2) + (number - 1)

// you can always go by 1 step
// you can always replace a 1 with a two
