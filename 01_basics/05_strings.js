const name = "suhel"
const repoCount = 1

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// String Interpolation using backticks `` 

const gameName = new String('kingsk-96-1996')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "    shukh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://suhelk.com/suhel%20kurane"


console.log(url.replace('%20', '-'));

console.log(url.includes('sds'));

console.log(gameName.split('-'));

console.log(url.replace('%20', '-').blink());