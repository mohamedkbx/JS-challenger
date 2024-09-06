// Swap object keys and values
// Write a function that takes an object as argument.
//  Somehow, the properties and keys of the object got mixed up.
//   Swap the Javascript object's key with its values and return the resulting object

// 1-way
function swap(obj) {
  const swapped = Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});

  return swapped;
}

// 2way

function myFunction(obj) {
  const swapped = {}; // Create an empty object to store the swapped key-value pairs

  // Loop through each key in the original object
  for (let key in obj) {
    swapped[obj[key]] = key; // Swap the key with the value
  }

  return swapped; // Return the resulting object
}
