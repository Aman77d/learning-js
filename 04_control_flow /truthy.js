// we talk about truthy and falsy value 

//const useremail = "a@aman.com" // it assume the user have email automatically(the condition is true)
//const useremail = "" // now we enter the empty string (the value is false) any email not present
const useremail = []

if(useremail){
    console.log("got the user emial");

}else{
    console.log("don't have user email ");
    
}

// falsy values
// null , undefined , bigint 0n , 0 , -0 , "" , false , NAN(not a number)

// truthy values 
// "0" , 'false' , " " (empty string with space) , [] , {} , function(){}


// this is method to check the array is empty or  not
if(useremail.length === 0 ){
    console.log("array is empty");
}

// simillarly we check the object is empty or  not

const emptyObj = {}
if (Object.keys(emptyObj).length === 0 ) {
    console.log("obejct is empty ");
    
}


// nill coalescing operator (??) null , undefined 
let val1;
//val1 = 5 ?? 10 
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15 

console.log(val1);

// terniary operator 
// basic syntax 

// condition ? true : false 

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

