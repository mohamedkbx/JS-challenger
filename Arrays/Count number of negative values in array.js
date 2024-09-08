// Count number of negative values in array
// Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

// first solution
function myFunction(a) {
  return a.reduce((acc, curr) => (curr < 0 ? acc + 1 : acc), 0);
}

// second solution
function myFunction(a) {
  return a.filter((el) => el < 0).length;
}
