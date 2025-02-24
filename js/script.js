// STEP 1
// Convert the following identifiers to Camel Case notation:
let someMonth;
function theMonth() {}
let currentMonth;
let summerMonth;
let myLibraryFunction;

// STEP 2
// Examples of different literal expressions:
let numericLiteral = 42; // Numeric literal expression
let stringLiteral = "Hello, world!"; // String literal expression
let booleanLiteral = true; // Boolean literal expression
let nullLiteral = null; // Null literal expression

// STEP 3
// Examples of complex/variable expressions:
let complexExpression1 = (5 + 3) * 2;
let complexExpression2 = (numericLiteral / 2) + (booleanLiteral ? 10 : 0);

// STEP variables using Camel Casing and Hungarian Notation:
let strFirstName;
let strLastName2;
let strAddress;
let strCity2;
let strState;
let strZipCode;
let numYourAge;
let strReferralSource;
let boolMayWeContactYou;

// STEP 5
// Demonstrate 3 ways for declaring and assigning values to variables:
strFirstName = "John";
let strLastName = "Doe";
let strCity = "New York";

// STEP 6
// Create a variable and display the coerced result of adding a number and a string:
let numberAndString = 10 + " apples";
console.log(numberAndString); // "10 apples"

// STEP 7
// Create two variables and display the coerced results:
let booleanAndString = true + " is true";
console.log(booleanAndString); // "true is true"

let numberAndBoolean = 10 + true;
console.log(numberAndBoolean); // 11

// STEP 8
// Fix the string literal:
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);

// STEP 9
// Create variables that produce null and undefined values:
let nullValue = null;
console.log(nullValue); // null

let undefinedValue;
console.log(undefinedValue); // undefined

// STEP 10
// Use the typeof operator on various literals:
console.log(typeof "Hello"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof {}); // object
console.log(typeof undefined); // undefined

// STEP 11
// Display text in an alert box using concatenation:
let name = "Your Name";
let course = "JavaScript";
alert("Hello " + name + ", welcome to the " + course + " class!");

// STEP 12
// Rework the alert string to include a line break:
alert("Hello " + name + ".\nWelcome to the " + course + " class!");

// STEP 13
// Replace hardcoded strings with prompts:
name = prompt("What is your name?");
course = prompt("What class are you taking?");
alert("Hello " + name + ".\nWelcome to the " + course + " class!");

// STEP 14
// Declare variables and display the sum:
let x = 10;
let y = 20;
console.log(x + y); // 30

// STEP 15
// Add and assign 20 to a variable:
x = 20;
x += 20;
console.log(x); // 40

// STEP 16
// Multiply and assign 5 to a variable:
x = 20;
x *= 5;
console.log(x); // 100

// STEP 17
// Assign the remainder of 20 divided by 3 and divide by 1:
x = 20 % 3;
x /= 1;
console.log(x); // 2

// STEP 18
// Write an application that evaluates to true:
console.log((5 > 3) && (10 < 20)); // true

// STEP 19
// Write an application that evaluates to false:
console.log((5 > 10) || (10 < 5)); // false