const language = "JavaScript";

console.log(language.charAt(0));
console.log(language.charAt(4));
console.log(language.charAt(9));

const language1 = "JavaScript";

console.log(language1.at(0));
console.log(language1.at(-1));
console.log(language1.at(-2));

const text = "JavaScript";

console.log(text.slice(4));
console.log(text.slice(4, 10));
console.log(text.slice(4));
console.log(text.slice(-6));

const text1 = "JavaScript";

console.log(text1.substring(0, 4));
console.log(text1.substring(4, 10));
console.log(text1.substring(4,1));

const text2 = "banana";

console.log(text2.indexOf('na'));
console.log(text2.indexOf("Script"));
console.log(text2.indexOf("Python"));

const text3 = "hello hello";

console.log(text3.indexOf(""));
console.log(text3.indexOf("hello", 1));

const text4 = "hello hello";

console.log(text4.lastIndexOf("hello"));
console.log(text4.lastIndexOf("l"));

const email = "student@example.com";

console.log(email.includes("@"));
console.log(email.includes("gmail"));

const filename = "assignment.pdf";

console.log(filename.startsWith("assignment"));
console.log(filename.endsWith(".pdf"));
console.log(filename.endsWith(".jpg"));

const message = "HTML is useful. HTML is popular.";

console.log(message.replace("HTML", "JavaScript"));

const text7 = "JavaScript Methods";

console.log(text7.toUpperCase());

console.log(message.replaceAll("HTML", "JavaScript"));

const text8 = "JavaScript Methods";

console.log(text8.toLowerCase());
const name = "   Rahul Sharma   ";

console.log(name.trim());

const text9 = "   Hello   ";

console.log(text9.trimStart());
console.log(text9.trimEnd());

const first = "Hello";
const second = "Students";

console.log(first.concat(" ", second));
console.log("Hi ".repeat(3));
console.log("*".repeat(5));

const subjects = "HTML,JavaScript,React";

console.log(subjects.split(","));
const sentence = "JavaScript is useful";

console.log(sentence.split(" "));

const word = "CODE";

console.log(word.split(""));

console.log("HTML CSS JS".split());


