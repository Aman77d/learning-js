// bases of storing varibale data and acess the data of variable ....it divide into two parts 

//  1 primitive datatype

// it is hold 7 types : String , number , boolean , null , undefined , symbol , BigInt

/*
const score = 100
const scoreValue = 100.3
both the number type 
*/

const loggedIn = true  // boolean 

const outTemp = null;  // object 

let userEmail ;   // undefined      


const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(typeof id);    // symbol

console.log(id === anotherId);

const bigNumber = 1212154145454521n  
//console.log(typeof bigNumber);   // BigInt 





// 2 is non primitive datatype / refernce type

// 3 types : array , function , objects 

const heroes = ["Iron man" , " Thor " , "Loki"];
//console.log(typeof heroes);     // object 


let myObj =  {
    name: "aman" ,
    age: 22
}
//console.log(typeof myObj) // object 

const myFunction = function(){

    console.log("hello world ");

}

//console.log(typeof myFunction);  // function 

// ****************** memory in javascript *****************

// primitive( stack )    ,    non-primitive ( Heap)
/*
 stack create the copy of the refernce variable
 but if you chnage second variable value .....original is same ...
*/


/*
// heap not create the copy it give direct acess to the other varibale 
but in heap it will change the original value if you change the second variable value
*/



let myName = "Aman mishra"  // original name is not changed
let myotherName = myName

myotherName = "Tushar mishra"

console.log(myName);
console.log(myotherName);

let userOne = {
    email : "aman123@.com" ,
    upi : "aman784@lo"
}

let userTwo = userOne;
userTwo.email= "tushar125@.com"

console.log(userOne.email);
console.log(userTwo.email);

// it change the original value because non-primitive datatype store inside the Heap 
