let subject1 = 80;
let subject2 = 70;

console.log(subject1 + subject2);
console.log(subject1 - subject2);
console.log(subject1 * subject2);
console.log(subject1 / subject2);

// Modulus
let totalMarks = subject1 + subject2;

console.log(totalMarks % 3);

// Exponentiation
console.log(2 ** 3);

// Assignment Operators
let score = 50;

score += 10;
console.log(score);

score -= 5;
console.log(score);

score *= 2;
console.log(score);

score /= 5;
console.log(score);

// Comparison Operators
console.log(score > 10);
console.log(score < 20);
console.log(score >= 20);
console.log(score <= 20);

// == and ===
console.log(5 == "5");
console.log(5 === "5");
// Logical Operators

let age = 20;
let hasId = true;

console.log(age >= 18 && hasId);

let isStudent = false;
let hasPass = true;

console.log(isStudent || hasPass);

let isLoggedIn = true;

console.log(!isLoggedIn);


// Increment Operator

let score = 10;

score++;

console.log(score);


// Pre-Increment

let number = 5;

console.log(++number);


// Post-Increment

let count = 5;

console.log(count++);
console.log(count);


// Decrement Operator

let lives = 3;

lives--;

console.log(lives);


// Pre-Decrement

let value = 5;

console.log(--value);


// Post-Decrement

let points = 5;

console.log(points--);
console.log(points);
// Ternary Operator

let age = 20;

let ageResult = age >= 18 ? "Adult" : "Minor";

console.log(ageResult);


// Checking Even or Odd

let number = 15;

let numberResult = number % 2 === 0 ? "Even" : "Odd";

console.log(numberResult);


// Operator Precedence

let result1 = 10 + 5 * 2;

console.log(result1);


// Division Before Subtraction

let result2 = 20 - 12 / 3;

console.log(result2);


// Using Parentheses

let result3 = (10 + 5) * 2;

console.log(result3);


// Calculating Total

let price = 100;
let quantity = 2;
let discount = 20;

let total = (price * quantity) - discount;

console.log(total);