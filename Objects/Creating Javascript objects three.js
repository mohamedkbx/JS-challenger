// Write a function that takes two arrays (a and b) as arguments.
// Create an object that has properties with keys 'a' and corresponding values 'b'.
//  Return the object.

function myFunction(a, b) {
  return a.reduce((acc, curr, i) => {
    acc[curr] = b[i];
    return acc;
  }, {});
}

// Test Cases:

myFunction(["a", "b", "c"], [1, 2, 3]);
myFunction([1, "b"], ["a", 2]);
