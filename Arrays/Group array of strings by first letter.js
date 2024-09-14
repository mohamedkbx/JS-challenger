// Group array of strings by first letter
// Write a function that takes an array of strings as argument.
// Group those strings by their first letter.
// Return an object that contains properties with keys representing first letters.
//  The values should be arrays of strings containing only the corresponding strings.
//   For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to.
//  { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(arr) {
  return arr.reduce((acc, val) => {
    const letter = val[0].toLowerCase();
    acc[letter] = acc[letter] || [];
    acc[letter].push(val);
    return acc;
  }, {});
}

// test case:
console.log(myFunction(["Alf", "Alice", "Ben"])); // { a: ['Alf', 'Alice'], b: ['Ben'] }
