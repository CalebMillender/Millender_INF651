// ======================================
// Assignment 2 - JavaScript Fundamentals
// ======================================

// 1. Variables and Data Types

let personName = "Caleb";
let age = 25;
let isStudent = true;

console.log("Name:", personName, "| Type:", typeof personName);
console.log("Age:", age, "| Type:", typeof age);
console.log("Student:", isStudent, "| Type:", typeof isStudent);

// 2. Basic Arithmetic Operations

let num1 = 20;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// 3. Working with Strings

let sentence = "JavaScript is fun to learn!";

console.log("String Length:", sentence.length);
console.log("First Character:", sentence[0]);
console.log("Last Character:", sentence[sentence.length - 1]);

// 4. Math Object

let negativeNumber = -16;

console.log("Square Root of Absolute Value:", Math.sqrt(Math.abs(negativeNumber)));
console.log("Number Squared:", Math.pow(negativeNumber, 2));
console.log("Absolute Value:", Math.abs(negativeNumber));

// 5. Boolean Logic and Comparison Operators

let firstNumber = 15;
let secondNumber = 10;

console.log("Greater Than:", firstNumber > secondNumber);
console.log("Less Than:", firstNumber < secondNumber);
console.log("Equal To:", firstNumber === secondNumber);

// 6. Logical Operators

let value1 = true;
let value2 = false;

console.log("AND (&&):", value1 && value2);
console.log("OR (||):", value1 || value2);
console.log("NOT (!value1):", !value1);
console.log("NOT (!value2):", !value2);

// 7. Using Template Literals

let firstName = "Caleb";
let lastName = "Millender";

let greeting = `Hello, ${firstName} ${lastName}! Welcome to JavaScript.`;

console.log(greeting);
