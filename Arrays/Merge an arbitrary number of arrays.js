// Merge an arbitrary number of arrays
// Write a function that takes arguments an arbitrary number of arrays.
//  It should return an array containing the values of all arrays.

// my solution
function myFunction(...arrays) {
  return [].concat(...arrays);
}

//author solution
function myFunction(...arrays) {
  return arrays.flat();
}

myFunction([1, 2, 3], [4, 5, 6]);
