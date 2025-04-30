const accountId=12456
let accountEmail="aman@gamil.com"
var accountPassword="123456"
accountCity="aligarh"

/*accountId=2
console.log(accountId)*/
// it give a error becaues of already accountId contain a constant value.

/*
prefer not a var 
because of issue in block scope and function scope.
*/

accountEmail="tushar@gmail.com"
accountPassword="14789"
accountCity="mathura"

console.table([accountId,accountEmail,accountPassword,accountCity])//it give a output in a table format.

let accountState;
console.log(accountState);// it give a undefine statement because we are not assign a value of accontState variable.

