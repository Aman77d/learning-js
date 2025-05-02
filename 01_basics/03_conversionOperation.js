let score = "33abx"

console.log(typeof score);
console.log(typeof score);

// let score = "33" // it gives number
// let score = "33abc" // it gives nan(not a number)
// let score = "aman" // it gives nan (not a number).
// let score = null // it gives 0.
// let score = undefined // it gives nan(not a number)
// let score = true/false // it gives true=1 ;false=0.


let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber)

let userLoggendIn = 1

let userLoggedOut = Boolean(userLoggendIn)
console.log(userLoggedOut)

// 1 => true ; // 0 => false 
// "" => false 
// "aman" => true.


let someNumber = 33 

let stringNumber = String(someNumber)

console.log(stringNumber)
console.log(typeof stringNumber)

// 33 => string 