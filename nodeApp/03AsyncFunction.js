//----------------JS is asynchronous---------------------//
// const myFunction = () => {
//     console.log("before ----> calling another function");
//     setTimeout(() => {
//         console.log("i am a 2 s timer");
//     }, 2000);
//     console.log("after ----> calling another function");
// }

// myFunction();

//----------------Turning into synchronous behaviour---------------------//

// const timeout = ms => new Promise(resolve => setTimeout(resolve, ms))

// const callMyFunction = () => {
//     return timeout(2000).then(() => {
//         console.log("i am a wait function");
//     });
// }

// const myFunction = async () => {
//     console.log("before ----> calling another function");
//     var d = await callMyFunction();
//     console.log("after ----> calling another function");
// }

//  myFunction();


//----------------Using Node JS Modules for Reuse---------------------//

var fs = require('fs');
//synchronous one
var result = fs.readFileSync(__dirname + "/webapp/index.html","utf8");

console.log(result);

//----------------Using Node JS Module to Perform Sync operation---------------------//
let util = require('util')

let asyncFunction = util.promisify((ms, f) => setTimeout(f, ms))

console.log("before ----> calling another function");
asyncFunction(2000)
.then(() => { 
            console.log("after ----> calling another function"
            );
})

