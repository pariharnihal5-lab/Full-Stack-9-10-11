sum(1,4);

function sum(a,b){
    let c=a+b;
    console.log(c);
     
}


function Calculate(a,b,c){
    return a+b-c;
}
let answer = console.log(Calculate(5,6,7));


// Function with one parameter
function greetStudent(name) {
    console.log("Welcome " + name);
}

greetStudent("Raj");
greetStudent("Amit");
greetStudent("Priya");

// Function with two parameters
function addMarks(mark1, mark2) {
    console.log(mark1 + mark2);
}

addMarks(80, 75);
addMarks(90, 85);

// Function with three parameters
function showStudent(name, age, city) {
    console.log(name);
    console.log(age);
    console.log(city);
}

showStudent("Raj", 22, "Bhopal");
function calculateTotal(mark1, mark2) {
    return mark1 + mark2;
}

let total = calculateTotal(80, 90);

console.log(total);


function calculateAverage(mark1, mark2) {
    return (mark1 + mark2) / 2;
}

let average = calculateAverage(80, 90);

console.log(average);

// Using a returned value in another calculation
console.log(total * 2);
function calculateFee(courseFee, months = 1) {
    return courseFee * months;
}

// No argument provided for months
let totalFee1 = calculateFee(5000);

// Argument provided for months
let totalFee2 = calculateFee(5000, 3);

console.log(totalFee1);
console.log(totalFee2);


Output:
				5000
				15000
                const showStudent = function(name, course) {
    console.log("Student: " + name);
    console.log("Course: " + course);
};

showStudent("Raj", "JavaScript");


const calculateFee = function(fee, months = 1) {
    return fee * months;
};

let totalFee3 = calculateFee(5000);
let totalFee4 = calculateFee(5000, 3);

console.log(totalFee3);
console.log(totalFee4);