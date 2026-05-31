function firstFunc() {
    console.log("a")
    console.log("m")
    console.log("a")
    console.log("n")
}

//firstFunc // it show only the refference the function 
//firstFunc() // it show the execution of a function 

// now create a some basic function like add two number 

/*
function addTwoNummber(number1, number2) {  // at the time of make function inside () it called parameters

    console.log(number1 + number2)

}
*/

function addTwoNummber(number1, number2) {  // at the time of make function inside () it called parameters

    //let result = number1 + number2
    //return result

    return number1 + number2

}

const result = addTwoNummber(3, 4)  // at the time of execution it called argument(or pass the value )
//console.log("result", result)

// it add two integer real number 
// but it add also a string with number by own like :

//addTwoNummber(3 , "4")
//addTwoNummber(3 , "a")


function UserMessage (username = "aman"){
    if(username === undefined){   // we can also use (!username) it also a way to check the username is undefined or not 
        console.log("please enter a username")
        return
    }
    return `${username} just logged in ` 
}

//console.log(UserMessage("aman"))

// if someone cant enter the name .....he leave the empty string then 
//console.log(UserMessage("")); // it return your message 

// if the user not enter the any name or not ("") then
//console.log(UserMessage("tushar")); // it return undefined 

// if you already set a username ana other user are come .....it automatic overwritte the name 



function calculateCartPrice (value1 , value2, ...num1){ // if simply return num1 it only return first value . if you use like this (...num1) it is rest operator .
    //it put all value inside the array
    // value1 and value2 store the first and second value 
    //and remaining value show in ...num1 (array)

    return num1 
}

//console.log(calculateCartPrice(200 , 400 , 500 ,2000))

// function with object
const user = {
    username1 : "tuhar",
    price1 : 299
}

function objectOperation (getobject){
    console.log(`username is ${getobject.username1} and price is ${getobject.price1}`);
    
}

//objectOperation(user)
objectOperation({
    username1 : "tushar",
    price1 : 299
})

// function with array

const newArray = [100,300,800,2000]

//create a afunction which accept this array and find the second value in array
function secondValue(getArray){
    return getArray[1]
}

//console.log(secondValue(newArray));
console.log(secondValue([100,300,800,2000]))
