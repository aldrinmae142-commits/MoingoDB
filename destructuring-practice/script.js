// JavaScript Destructuring Practice
console.log("=== JavaScript Destructuring Practice ===");

// Step 2: Array Destructuring
console.log("\n--- Step 2: Array Destructuring ---");

const fruits = ['apple', 'banana', 'cherry', 'date'];

// Basic destructuring
const [first, second] = fruits;
console.log("First fruit:", first); // apple
console.log("Second fruit:", second); // banana

// Skipping elements
const [, , third] = fruits;
console.log("Third fruit:", third); // cherry

// Rest operator
const [head, ...rest] = fruits;
console.log("First:", head); // apple
console.log("Rest:", rest); // ['banana', 'cherry', 'date']

// Step 3: Object Destructuring
console.log("\n--- Step 3: Object Destructuring ---");

const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    job: 'Developer'
};

// Basic object destructuring
const { name, age } = person;
console.log("Name:", name); // John
console.log("Age:", age); // 30

// Renaming variables
const { name: personName, age: personAge } = person;
console.log("Person name:", personName); // John
console.log("Person age:", personAge); // 30

// Step 4: Advanced Destructuring
console.log("\n--- Step 4: Advanced Destructuring ---");

// Nested destructuring
const user = {
    id: 1,
    profile: {
        firstName: 'Jane',
        lastName: 'Doe',
        address: {
            street: '123 Main St',
            city: 'Boston'
        }
    }
};

const {
    profile: {
        firstName,
        address: { city }
    }
} = user;
console.log("First name:", firstName); // Jane
console.log("City:", city); // Boston

// Default values
const config = { theme: 'dark' };
const { theme, language = 'en' } = config;
console.log("Theme:", theme); // dark
console.log("Language:", language); // en (default)

// Step 5: Destructuring in Functions
console.log("\n--- Step 5: Destructuring in Functions ---");

// Function parameters with array destructuring
function printCoordinates([x, y]) {
    console.log(`X: ${x}, Y: ${y}`);
}

const point = [10, 20];
printCoordinates(point); // X: 10, Y: 20

// Function parameters with object destructuring
function greet({ name, age }) {
    console.log(`Hello ${name}, you are ${age} years old!`);
}

const userInfo = { name: 'Bob', age: 25 };
greet(userInfo); // Hello Bob, you are 25 years old!

// Function with default parameters and destructuring
function createUser({ name, age, city = 'Unknown' } = {}) {
    return {
        name,
        age,
        city
    };
}

const user1 = createUser({ name: 'Alice', age: 28 });
const user2 = createUser();

console.log("User 1:", user1); // { name: 'Alice', age: 28, city: 'Unknown' }
console.log("User 2:", user2); // { name: undefined, age: undefined, city: 'Unknown' }

console.log("\n=== Practice Complete! ===");