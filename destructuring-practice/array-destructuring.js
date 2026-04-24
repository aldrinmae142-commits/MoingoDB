// Criterion 1: Array Destructuring Demonstration
// Notes: Array destructuring allows us to unpack values from arrays into distinct variables.
// This is useful for extracting multiple values from an array in a single statement.

console.log("=== Array Destructuring Examples ===");

// Basic array destructuring
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor] = colors;
console.log(`First color: ${firstColor}`); // red
console.log(`Second color: ${secondColor}`); // green

// Skipping elements
const numbers = [1, 2, 3, 4, 5];
const [first, , third] = numbers;
console.log(`First: ${first}, Third: ${third}`); // First: 1, Third: 3

// Using rest operator
const fruits = ['apple', 'banana', 'cherry', 'date'];
const [head, ...tail] = fruits;
console.log(`Head: ${head}`); // apple
console.log(`Tail: ${tail}`); // ['banana', 'cherry', 'date']

// Destructuring with default values (though more common in objects)
const [a = 10, b = 20] = [5];
console.log(`a: ${a}, b: ${b}`); // a: 5, b: 20