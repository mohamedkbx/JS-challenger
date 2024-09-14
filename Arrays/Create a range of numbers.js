// Create a range of numbers
// Write a function that takes two numbers (min and max) as arguments.
// Return an array of numbers in the range min to max

function myFunction(min, max) {
  return Array.from({ length: max - min + 1 }, (_, i) => i + min);
}

//test case
console.log(myFunction(2, 8)); // [2, 3, 4, 5, 6, 7, 8]

//another solution
function createRange(min, max) {
  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

// Test case
console.log(createRange(3, 7)); // Output: [3, 4, 5, 6, 7]
