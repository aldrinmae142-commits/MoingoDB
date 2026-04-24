// Criterion 3: Nested Destructuring Demonstration
// Notes: Nested destructuring allows us to extract values from nested objects or arrays.
// This is particularly useful when working with complex data structures like API responses.

console.log("=== Nested Destructuring Examples ===");

// Nested object destructuring
const user = {
    id: 123,
    profile: {
        name: 'John Doe',
        email: 'john@example.com',
        address: {
            street: '123 Main St',
            city: 'Boston',
            zipCode: '02101'
        }
    },
    preferences: {
        theme: 'dark',
        notifications: true
    }
};

// Extracting from nested objects
const {
    profile: {
        name,
        address: { city, zipCode }
    },
    preferences: { theme }
} = user;

console.log(`Name: ${name}`); // John Doe
console.log(`City: ${city}`); // Boston
console.log(`Zip Code: ${zipCode}`); // 02101
console.log(`Theme: ${theme}`); // dark

// Nested array destructuring
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const [[first], [second]] = matrix;
console.log(`First element of first row: ${first}`); // 1
console.log(`First element of second row: ${second}`); // 4

// More complex nested destructuring
const [[a, b], [c, d]] = matrix;
console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`); // a: 1, b: 2, c: 4, d: 5

// Combining object and array destructuring
const data = {
    items: ['apple', 'banana', 'cherry'],
    metadata: {
        total: 3,
        page: 1
    }
};

const {
    items: [firstItem, ...restItems],
    metadata: { total }
} = data;

console.log(`First item: ${firstItem}`); // apple
console.log(`Rest items: ${restItems}`); // ['banana', 'cherry']
console.log(`Total: ${total}`); // 3