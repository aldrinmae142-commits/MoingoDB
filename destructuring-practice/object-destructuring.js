// Criterion 2: Object Destructuring Demonstration
// Notes: Object destructuring allows us to extract properties from objects and assign them to variables.
// This makes it easier to work with object properties without repetitive dot notation.

console.log("=== Object Destructuring Examples ===");

// Basic object destructuring
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

const { name, age } = person;
console.log(`Name: ${name}`); // Alice
console.log(`Age: ${age}`); // 30

// Destructuring with different variable names
const { name: fullName, age: years } = person;
console.log(`Full Name: ${fullName}`); // Alice
console.log(`Years: ${years}`); // 30

// Partial destructuring (only extracting some properties)
const { city } = person;
console.log(`City: ${city}`); // New York

// Destructuring in function parameters
function displayPerson({ name, age, city }) {
    console.log(`${name} is ${age} years old and lives in ${city}.`);
}

displayPerson(person); // Alice is 30 years old and lives in New York.