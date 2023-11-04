const accountId = 144553
let accountEmail = "suhelk@google.com"
var accountPassword="12345"
accountCity = "Kolhapur"

// accountId = 2 // not allowed


accountEmail="hc@hc.com"
accountPassword="55555555"
accountCity="Indore"
let accountState;


console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])