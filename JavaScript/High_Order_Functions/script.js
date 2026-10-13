function greet1() {
    console.log("Hello, Students!");
}

function processMessage(callback) {
    callback();
}
//EX
processMessage(greet1);
function calculate(a, b, operation) {
    operation(a, b);
}

const add = (x, y) => {
    console.log(x + y);
};

calculate(10, 20, add);

//Understanding Lexical Scope
let message = "Hello, Students!";

function greet2() {
    console.log(message);
}

greet2();

//Understanding Closures

function outer() {
    let message1 = "Hello, Students!";

    function inner() {
        console.log(message1);
    }

    return inner;
}

const greet = outer();

greet();