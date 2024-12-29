// console.log("Hello World");


// // type name (type input){
// //     process
    
// //     return output;
// // }


// // object based language

// // let, const, var

// let str="this is a string"
// console.log(str)
// // 8638964
// function haha(a, b){
//     let str = a+b;
//     console.log(str);
// }

// haha(1, 2)

// console.log(str)
// // let a =10;
// // let b = "10";
// // let c = [10, 20, 30, "string"];

// // for(let i=0; i<c.length; i++){
// //     console.log(c[i]);
// // }

// // // High level language


// // // int arr = [19, 29, 39, "hohs"]


// // // objects


// // let product = {

// //     name:"Iphone",
// //     price:1000,
// //     color:"black",
// //     isAvailable:true,
// //     category:"electronics",
// //     review:[
// //         {
// //             name:"user1",
// //             rating:5,
// //             comment:"good"
// //         },
// //         {
// //             name:"user2",
// //             rating:4,
// //             comment:"good"
// //         },{
// //             name:"user3",
// //             rating:3,
// //             comment:"good"
// //         }
// //     ]

// // }

// // Regex




// //METHODS
// // console.log(result);

// // let string = "hello my name is john wick";

// // let result = string.split(" ").length;


// // console.log(name);


// // object type
// // let, const, var
// // let, var -> can be modified after declaration
// // const -> cannot be modified after declaration

// // Hoisting
// // initialisation
// // declaration

// // console.log(number);

// // let or const number=10;-> neither initialised nor declared
//var number =10 -> initialised but not declared

// //async
// //inputs
// //refresh

// // add(10.8958595, 20);

// // function add(a, b){
// //     console.log(a+b);
// // }


// // // arrow functions
// // const add= (a,b)=> console.log(a+b);

// jackson

// json-> javascript object notation
// json.parse() -> json to object
// json.stringify() -> object to json


// Regular Expression
// let string = "hello my name is john wick";
// regex for email validation -> 
// let email = "example@example.com";
// let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// console.log(emailRegex.test(email)); // true or false



document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM is ready");
})


window.addEventListener("resize", function(){
    console.log("Window is resized");
})




function greet(name, callback){
    console.log(`Hello  ${name}`);
    callback();
}

function anotherFunction(){
    console.log("This is another function");
}

greet("Indra", anotherFunction);


// setTimeout(()=>{
//     console.log("This is an arrow function");
// }
// , 4000);



// setInterval(()=>{
//     console.log("This is an arrow function");
// }, 1000);

// fetch("https://jsonplaceholder.typicode.com/posts")=promise.resolve()
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch((err)=>console.log(err));


function logA() { console.log('A') }
function logB() { console.log('B') }
function logC() { console.log('C') }
function logD() { console.log('D') }

// Click the "RUN" button to learn how this works!
logA();
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();

let value = async function(){
    let result = await fetch("https://jsonplaceholder.typicode.com/posts")
    

    console.log(result);
}