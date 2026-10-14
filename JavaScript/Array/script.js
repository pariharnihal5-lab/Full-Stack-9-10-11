const ar1=[1,2,3,4,5];
let ar2 =[5,6,7,8];

console.log(ar1);
console.log(ar2);

ar1[0] =10;
console.log(ar1);

const ar3=[0,5,6,7,8];
for (var i = 0; i < ar3.length; i++)
     {
    console.log(ar3[i]);
}
//For Each 
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});


//Array Processing Methods
//map
const numbers = [2, 4, 6, 8];

const doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(doubledNumbers);
console.log(numbers);
//Find
const numbers4 = [5, 12, 8, 20, 15];

const result5 = numbers.find((number4) => {
    return number4 > 10;
});

console.log(result5);
//Sort
const fruits2 = ["Mango", "Apple", "Banana", "Orange"];

fruits2.sort();

console.log(fruits2);
//Reduce
const numbers5 = [10, 20, 30, 40];

const total1 = numbers5.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(total1);