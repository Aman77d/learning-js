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
console.log(UserMessage("tushar")); // it return undefined 

// if you already set a username ana other user are come .....it automatic overwritte the name 

