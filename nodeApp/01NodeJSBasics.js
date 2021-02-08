//----------------Show Console Output-----------------//
//var x = "Anubhav Trainings"
//console.log(x);
//console.log("Welcome to Anubhav Trainings");
//console.log("Roger i am in " + __dirname);


//----------------Working with Objects - JSON---------------------//
// var simpleObject = {"id":10, "vendor": "Anubhav Trainings","website": "https://www.anubhavtrainings.com", "rating": 5}
// ////work with values
// var vendorName = simpleObject.vendor;
// ////another way
// const { website } = simpleObject;
// console.log(website);
// console.log(vendorName);

//----------------Working with Array of Objects - JSON ---------------------//
// var tabEmp = [
//               {"empId": 100, "empName":"Anubhav", "salary": 5000 },
//               {"empId": 200, "empName":"Ananya", "salary": 7500},
//               {"empId": 300, "empName":"Sonali", "salary": 8500}
// ];
// console.log("Complete Record of 2nd Emp ", tabEmp[1]);
// console.log("Salary of Ananya is ", tabEmp[1].salary);



//-----------------Looping over an array--------------------//
// var array = ["Apple", "Banana", "Cherry"];
// for(var i=0;i<array.length;i++){
//   console.log(array[i]);
// }


//----------------Working with simple array-----------------//
// var arr1 = [1,2,3,4,5];
// var arr2 = [77,89,95,33];
// var printf = function(arrObject){
//   for(var i=0;i<arrObject.length;i++){
//     console.log(arrObject[i]);
//   }
// }
// printf(arr1);
// printf(arr2);


//----------------Working with Reusable code---------------------//
//----------------requires a node module reuse.js in same dir----//
// var arr1 = [1,2,3,4,5];
// var arr2 = [77,89,95,33];
// var iamreusecode = require('./reuse');
// console.log("length of my arr is ", arr1.length);
// iamreusecode.printf(arr1);
// iamreusecode.printf(arr2);