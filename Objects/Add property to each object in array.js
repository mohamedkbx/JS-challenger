// Add property to each object in array
// Write a function that takes an array of objects and a string as arguments.
// Add a property with key 'continent' and value equal to the string to each of the objects. Return the new array of objects. Hint: try not to mutate the original array

function myFunction(arr, string) {
  return arr.map((obj) => {
    return { ...obj, continent: string };
  });
}

const result = myFunction([{ name: "John" }, { name: "Alice" }], "Europe");

console.log(result);
// Expected output:
// [ { name: 'John', continent: 'Europe' }, { name: 'Alice', continent: 'Europe' } ]
