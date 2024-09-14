// Create a range of numbers
// Write a function that takes two numbers (min and max) as arguments.
// Return an array of numbers in the range min to max

function myFunction(min, max) {
  return Array.from({ length: max - min + 1 }, (_, i) => i + min);
}

//test case
console.log(myFunction(2, 8)); // [2, 3, 4, 5, 6, 7, 8]
