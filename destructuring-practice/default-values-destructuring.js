// Criterion 4: Default Values During Destructuring Demonstration
// Notes: Default values can be assigned during destructuring to handle cases where
// the property might be undefined or missing from the object/array.

console.log("=== Default Values in Destructuring Examples ===");

// Object destructuring with default values
const config = {
    theme: 'light',
    // language is missing
    timeout: 5000
};

const { theme, language = 'en', debug = false } = config;
console.log(`Theme: ${theme}`); // light
console.log(`Language: ${language}`); // en (default)
console.log(`Debug: ${debug}`); // false (default)

// Array destructuring with default values
const numbers = [10, 20];
const [first = 0, second = 0, third = 0] = numbers;
console.log(`First: ${first}`); // 10
console.log(`Second: ${second}`); // 20
console.log(`Third: ${third}`); // 0 (default)

// Default values with undefined values
const settings = {
    volume: undefined,
    brightness: 80
};

const { volume = 50, brightness = 100 } = settings;
console.log(`Volume: ${volume}`); // 50 (default because undefined)
console.log(`Brightness: ${brightness}`); // 80

// Function parameters with default destructuring
function createProfile({ name = 'Anonymous', age = 18, city = 'Unknown' } = {}) {
    return {
        name,
        age,
        city
    };
}

const profile1 = createProfile({ name: 'Alice', age: 25 });
const profile2 = createProfile({}); // empty object
const profile3 = createProfile(); // no argument

console.log('Profile 1:', profile1); // { name: 'Alice', age: 25, city: 'Unknown' }
console.log('Profile 2:', profile2); // { name: 'Anonymous', age: 18, city: 'Unknown' }
console.log('Profile 3:', profile3); // { name: 'Anonymous', age: 18, city: 'Unknown' }

// Combining with renaming
const options = { width: 800 };
const { width: w = 1024, height: h = 768 } = options;
console.log(`Width: ${w}, Height: ${h}`); // Width: 800, Height: 768