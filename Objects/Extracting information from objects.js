// Extracting information from objects
// Write a function that takes an object as argument containing properties with personal information. Extract firstName, lastName,
//  size, and weight if available. If size or weight is given transform the value to a string.
// Attach the unit cm to the size. Attach the unit kg to the weight.
//  Return a new object with all available properties that we are interested in

function myFunction(obj) {
  const { firstName, lastName, size, weight } = obj;

  if (size) size = size + " cm";
  if (weight) weight = weight + " kg";

  return { firstName, lastName, size, weight };
}

myFunction({ firstName: "John", lastName: "Doe", size: 180, weight: 75 });
// Expected output: { firstName: 'John', lastName: 'Doe', size: '180 cm', weight: '75 kg' }
