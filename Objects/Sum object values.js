// Sum object values
// Write a function that takes an object (a) as argument. Return the sum of all object values.

function myFunction(a) {
  return Object.values(a).reduce((acc, cur) => acc + cur, 0);
}

// Test Cases:

myFunction({ j: 9, i: 2, x: 3, z: 4 });
