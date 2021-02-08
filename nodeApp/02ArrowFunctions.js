
//----------------Simple function in js---------------------//
// var x = function(a,b){
//     return a + b;
// }

// console.log(x(10,20));


//----------------A new ES6 way of writing function---------------------//
// x = (a,b) => {
//     return a + b;
// }
// console.log(x(10,20));

//----------------benefits of using arrow functions---------------------//
//----------------We can access global scope variables------------------//
this.tax = 10;
var x = function(a,b){
    return a + b + this.tax;
}
y = (a,b) => {
    return a + b + this.tax;
}
console.log(x(10,20));
console.log(y(10,20));



