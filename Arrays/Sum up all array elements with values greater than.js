// Sum up all array elements with values greater than
// Write a function that takes an array (a) and a number (b) as arguments.
//  Sum up all array elements with a value greater than b.
// Return the sum

function myFunction(a, b) {
  return a.reduce((acc, val) => (val > b ? acc + val : acc), 0);
}

// tesr case
console.log(myFunction([1, 2, 3, 4, 5], 2)); // 12
