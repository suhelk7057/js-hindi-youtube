// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log( id === anotherId);

const bigNumber = 4664158451265754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name:"suhel",
    age:27,
}

const myFunction = function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof heros);
 

// **Note 
/* 
Undefined =>"undefined"
Null => "object"
Boolean =>"Boolean"
Number => "number"
String => "string"
Object(native and does not implement [[Call]]) => "object"
Object(native or host does implement [[Call]]) => "function"
Object(host and does not implement [[Call]]) => Implementation-defined except may not be "undefined", "boolean", "number", or "string".
*/


// *********************

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubeName= "suhelkuranecom"

let anotherName= myYoutubeName

anotherName = "kolhapuriHustler"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "suhel@google.com"

console.log(userOne.email);
console.log(userTwo.email);
