// Criterion 6: Self-Assessment and Additional Practice
// Notes: This file contains self-assessment questions and additional practice examples
// to demonstrate understanding of all destructuring concepts.

console.log("=== Self-Assessment and Additional Practice ===");

// Self-Assessment Questions:
// 1. What is destructuring in JavaScript?
//    Answer: Destructuring is a way to unpack values from arrays or properties from objects into distinct variables.

// 2. What are the benefits of using destructuring?
//    Answer: Makes code more readable, reduces repetition, allows extracting multiple values at once.

// 3. When would you use array destructuring vs object destructuring?
//    Answer: Array destructuring for ordered data, object destructuring for named properties.

// Additional Practice Examples:

// Practice 1: Complex nested destructuring
const apiResponse = {
    status: 200,
    data: {
        users: [
            { id: 1, name: 'Alice', role: 'admin' },
            { id: 2, name: 'Bob', role: 'user' }
        ],
        pagination: {
            page: 1,
            totalPages: 5,
            hasNext: true
        }
    },
    timestamp: Date.now()
};

const {
    data: {
        users: [firstUser, secondUser],
        pagination: { page, hasNext }
    },
    status
} = apiResponse;

console.log(`Status: ${status}`); // 200
console.log(`First user: ${firstUser.name} (${firstUser.role})`); // Alice (admin)
console.log(`Page: ${page}, Has next: ${hasNext}`); // Page: 1, Has next: true

// Practice 2: Destructuring in loops
const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Keyboard', price: 75 }
];

console.log('\n--- Products ---');
for (const { name, price } of products) {
    console.log(`${name}: $${price}`);
}

// Practice 3: Destructuring with rest/spread
const config = {
    host: 'localhost',
    port: 3000,
    ssl: false,
    timeout: 5000,
    retries: 3
};

const { host, port, ...otherOptions } = config;
console.log(`Connecting to ${host}:${port}`);
console.log(`Other options:`, otherOptions);

// Practice 4: Advanced function destructuring
function calculate({ operation, numbers = [] } = {}) {
    const [a = 0, b = 0] = numbers;

    switch (operation) {
        case 'add':
            return a + b;
        case 'multiply':
            return a * b;
        default:
            return 0;
    }
}

console.log(`Add 5 + 3: ${calculate({ operation: 'add', numbers: [5, 3] })}`); // 8
console.log(`Multiply 4 * 2: ${calculate({ operation: 'multiply', numbers: [4, 2] })}`); // 8
console.log(`Default: ${calculate()}`); // 0

// Self-Check: I have demonstrated understanding of:
// ✓ Array destructuring
// ✓ Object destructuring
// ✓ Nested destructuring
// ✓ Default values in destructuring
// ✓ Renaming variables during destructuring
// ✓ Practical applications in functions and loops