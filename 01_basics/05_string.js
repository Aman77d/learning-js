let name ="Aman"
let MyAge = 22;

// console.log(name + MyAge + "value")
//this  is older method of add a two strings 
console.log(`My name is ${name} and i am ${MyAge} year old  `);

let gameName = new String("Aman");
//console.log(gameName[1]);

//console.log(gameName.__proto__);

//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('m'));

const newSring = gameName.substring(1 , 3);
//console.log(newSring);


const anotherString = gameName.slice(-4 , 3)
console.log(anotherString);

const newStringOne = "     Aman        "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aman.com/aman125mishra"
console.log(url.replace("125" , "-"));









