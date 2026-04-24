// Criterion 5: Renaming Variables During Destructuring Demonstration
// Notes: During destructuring, we can rename the variables we're assigning to,
// which is useful when the property names conflict with existing variables or
// when we want more descriptive variable names.

console.log("=== Renaming Variables in Destructuring Examples ===");

// Object destructuring with renaming
const user = {
    name: 'John',
    age: 30,
    city: 'New York',
    job: 'developer'
};

const { name: userName, age: userAge, city: userCity, job: userJob } = user;
console.log(`User Name: ${userName}`); // John
console.log(`User Age: ${userAge}`); // 30
console.log(`User City: ${userCity}`); // New York
console.log(`User Job: ${userJob}`); // developer

// Renaming with default values
const settings = {
    theme: 'dark'
};

const { theme: selectedTheme = 'light', language: selectedLanguage = 'en' } = settings;
console.log(`Selected Theme: ${selectedTheme}`); // dark
console.log(`Selected Language: ${selectedLanguage}`); // en (default)

// Nested object destructuring with renaming
const company = {
    name: 'Tech Corp',
    location: {
        city: 'San Francisco',
        state: 'CA'
    },
    employees: 500
};

const {
    name: companyName,
    location: { city: companyCity, state: companyState },
    employees: employeeCount
} = company;

console.log(`Company: ${companyName}`); // Tech Corp
console.log(`City: ${companyCity}`); // San Francisco
console.log(`State: ${companyState}`); // CA
console.log(`Employees: ${employeeCount}`); // 500

// Array destructuring with renaming (less common, but possible with objects)
const data = [
    { value: 10, label: 'First' },
    { value: 20, label: 'Second' }
];

const [{ value: firstValue, label: firstLabel }, { value: secondValue, label: secondLabel }] = data;
console.log(`First: ${firstValue} (${firstLabel})`); // First: 10 (First)
console.log(`Second: ${secondValue} (${secondLabel})`); // Second: 20 (Second)

// Function parameters with renaming
function processUser({ name: fullName, age: years, city: location }) {
    console.log(`${fullName} is ${years} years old and lives in ${location}.`);
}

const person = { name: 'Jane', age: 28, city: 'Boston' };
processUser(person); // Jane is 28 years old and lives in Boston.

// Renaming in import statements (concept demonstration)
console.log('\n--- Import-style renaming concept ---');
// In ES6 modules, you can rename imports:
// import { originalName as newName } from 'module';
// This is similar to destructuring with renaming