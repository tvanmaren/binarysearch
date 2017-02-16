'use strict';

function binarySearch(arr, target, low = 0, high = arr.length+1) {
  let mid = low + Math.floor((high - low) / 2);

  if (!arr[mid] || mid === high) {
    return -1;
  }
  if (arr[mid] === target) {
    return mid;
  }
  if (target < arr[mid]) {
    return binarySearch(arr, target, low, mid);
  }
  if (target > arr[mid]) {
    return binarySearch(arr, target, mid, high);
  }

}

console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([1, 2, 3, 4, 5], 1));
console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
