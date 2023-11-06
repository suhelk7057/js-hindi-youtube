// singleton
// Oject.create

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Suhel",
    "full name": "Suhel Kurane",
    [mySym]: "mykey1",
    age: 27,
    location: "Indore",
    email: "suhel@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
   // mySym: "mykey1",
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);//symbol

JsUser.email = "suhel@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "suhel@microsoft.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());