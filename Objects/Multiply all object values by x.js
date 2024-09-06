// Multiply all object values by x

// Write a function that takes an object (a) and a number (b) as arguments. Multiply all values of 'a' by 'b'. Return the resulting object.

// 1-way

function myFunction(a, b) {
  return Object.entries(a).reduce((acc, [key, val]) => {
    return { ...acc, [key]: val * b };
  }, {});
}

// 2-way
Object.keys(a).forEach((key) => {
  a[key] = a[key] * b;
});

// Test Cases:

myFunction({ a: 1, b: 2, c: 3 }, 3);
