// Convert array to object with counter
// .Write a function that takes an array of numbers as argument.
//  Convert the array to an object. It should have a key for each unique value of the array.
//   The corresponding object value should be the number of times the key occurs within the array.


function myFunction(arr) {
  const result = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  return result;
}
myFunction([1, 2, 2, 3, 3, 3]);
// Expected output: { 1: 1, 2: 2, 3: 3 }
