// Sort an array of numbers in descending order
// Write a function that takes an array of numbers as argument.
// It should return an array with the numbers sorted in descending order.

// author solution
function myFunction(arr) {
  return arr.sort((a, b) => b - a);
}

//   my solution

function myFunction(arr) {
  return arr.sort().reverse();
}
