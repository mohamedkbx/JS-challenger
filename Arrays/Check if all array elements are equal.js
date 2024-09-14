// Check if all array elements are equal
// Write a function that takes an array as argument.
//  It should return true if all elements in the array are equal. It should return false otherwise.

function myFunction(arr) {
  return arr.every((val, i, arr) => val === arr[0]);
}

// author solution
function myFunction(arr) {
  return new Set(arr).size === 1;
}

console.log(myFunction([1, 1, 1, 1])); // true
