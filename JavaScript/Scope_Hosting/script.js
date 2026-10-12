// function abc(){
//     console.log("I am function ABC");
    
// }
// abc();

// def();
// let x=50,
// y=20;

// console.log(x+y);
// function def() {
//     console.log();
    
// }
// console.log(()=>{
//     let a=10,
//     b=4;
//     return a+b;
// });

function add(a,b) {
    let x=a+5;
    let y=b+5;
    console.log(x+y);
    
}
function sum(m , n , jor) {
    let p = m*2;
    let q = n *2;
    jor(p,q);
}
sum(5,6,add);
