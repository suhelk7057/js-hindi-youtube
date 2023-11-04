// let score = "suhel"

// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// console.log(valueInNumber);

// "33"=> 33
// "33abc" => NaN
// true =>1; false => 0

let isLoggedIn = "suhel"

let booleadIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleadIsLoggedIn);

// 1 => true; 0 => flase
// "" => false
// "suhel" =>true

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********** Operations ***********

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2**3);
// console.log(2 % 3);

let str1 = "hello"
let str2  = " suhel"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log( 1 + "2");
// console.log( "1" + 2 + 2);
// console.log( 1 + 2 + "2" );

// console.log( ( 3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


// Prefix increment
// let x = 3;
// const y = ++x;
// // x is 4; y is 4

// let x2 = 3n;
// const y2 = ++x2;
// x2 is 4n; y2 is 4n

// Postfix increment

// let x = 3;
// const y = x++;
// // x is 4; y is 3

// let x2 = 3n;
// const y2 = x2++;
// x2 is 4n; y2 is 3n