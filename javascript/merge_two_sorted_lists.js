// SOLVED INCORRECTLY. THIS IS FOR ARRAY, NOT LINKED LIST


function mergeTwoLists(arr1, arr2) {
  let arr1Copy = arr1.slice();
  let arr2Copy = arr2.slice();
  let sortedArray = [];

  while (arr1Copy.length > 0 || arr2Copy.length > 0) {
    if (arr1Copy[0] > arr2Copy[0]) sortedArray.push(arr2Copy.shift())
    else sortedArray.push(arr1Copy.shift());
    if (arr1Copy.length === 0) break;
  }

  sortedArray = [...sortedArray, ...arr1Copy];
  sortedArray = [...sortedArray, ...arr2Copy];

  return sortedArray;
}

// input two sorted arrays
// output one sorted array
// are arrays the same length?
// can you have empty arrays?
// will arrays always have the same data type

// copy both arrays
// loop until either array is empty
// if the first element of arr1 > arr2 pop the element of arr2 and push to sorted array
// add remains of both arrays to sorted array
// return sorted array
//

console.log(mergeTwoLists([1, 3, 5], [4, 7, 8]));             // [1, 3, 4, 5, 7, 8]
console.log(mergeTwoLists([1], [4, 7, 8]));                   // [1, 4, 7, 8]
console.log(mergeTwoLists([1, 3, 5], []));                    // [1, 3, 5]
console.log(mergeTwoLists([1, 3, 3, 5], [3, 4, 7, 8]));       // [1, 3, 3, 3, 4, 5, 7, 8]
console.log(mergeTwoLists([], []));                           // []
console.log(mergeTwoLists(['a', 'b', 'c'], ['e', 'f', 'g'])); // ['a', 'b', 'c', 'e', 'f', 'g']
