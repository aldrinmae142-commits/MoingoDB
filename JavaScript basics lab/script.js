// JavaScript Basics Lab Implementation

// Step 2: Implement Variables
// Subtask 2.1: Declare Variables
var varVariable = "Hello World";
let letVariable = 42;
const constVariable = true;

// Subtask 2.2: Display Variable Values
console.log("var variable:", varVariable);
console.log("let variable:", letVariable);
console.log("const variable:", constVariable);

// Display on webpage
document.write("<h2>Variables</h2>");
document.write("var: " + varVariable + "<br>");
document.write("let: " + letVariable + "<br>");
document.write("const: " + constVariable + "<br><br>");

// Step 3: Work with Data Types
// Subtask 3.1: Use Different Data Types
let numberType = 123;
let stringType = "This is a string";
let booleanType = false;
let arrayType = [1, 2, 3, 4, 5];
let objectType = { name: "John", age: 30 };

// Subtask 3.2: Check Data Types
console.log("Type of numberType:", typeof numberType);
console.log("Type of stringType:", typeof stringType);
console.log("Type of booleanType:", typeof booleanType);
console.log("Type of arrayType:", typeof arrayType);
console.log("Type of objectType:", typeof objectType);

// Display on webpage
document.write("<h2>Data Types</h2>");
document.write("Number: " + numberType + " (type: " + typeof numberType + ")<br>");
document.write("String: " + stringType + " (type: " + typeof stringType + ")<br>");
document.write("Boolean: " + booleanType + " (type: " + typeof booleanType + ")<br>");
document.write("Array: " + arrayType + " (type: " + typeof arrayType + ")<br>");
document.write("Object: " + JSON.stringify(objectType) + " (type: " + typeof objectType + ")<br><br>");

// Step 4: Apply Operators
// Subtask 4.1: Use Arithmetic Operators
let num1 = 10;
let num2 = 3;
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;

console.log("Arithmetic Operations:");
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);

// Subtask 4.2: Use Comparison and Logical Operators
let comparison1 = num1 > num2;
let comparison2 = num1 === num2;
let logical1 = (num1 > 5) && (num2 < 10);
let logical2 = (num1 < 5) || (num2 > 10);

console.log("Comparison Operations:");
console.log("num1 > num2:", comparison1);
console.log("num1 === num2:", comparison2);
console.log("Logical Operations:");
console.log("(num1 > 5) && (num2 < 10):", logical1);
console.log("(num1 < 5) || (num2 > 10):", logical2);

// Display on webpage
document.write("<h2>Operators</h2>");
document.write("<h3>Arithmetic</h3>");
document.write(num1 + " + " + num2 + " = " + addition + "<br>");
document.write(num1 + " - " + num2 + " = " + subtraction + "<br>");
document.write(num1 + " * " + num2 + " = " + multiplication + "<br>");
document.write(num1 + " / " + num2 + " = " + division + "<br>");
document.write("<h3>Comparison</h3>");
document.write(num1 + " > " + num2 + " : " + comparison1 + "<br>");
document.write(num1 + " === " + num2 + " : " + comparison2 + "<br>");
document.write("<h3>Logical</h3>");
document.write("(num1 > 5) && (num2 < 10) : " + logical1 + "<br>");
document.write("(num1 < 5) || (num2 > 10) : " + logical2 + "<br>");