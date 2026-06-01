
//var c = 300

let a = 300

// inside the if it called block space  and outside the if it called as global scope
if(true){
    let a = 10 
    const b = 20
     c = 30
     //console.log("inner " , a);
     
}


//console.log("global " ,a) // it through the error a is not defined 
//console.log(b) // similar for b is not defined  due to scope 
//console.log(c) // but c is exicute outside the block scope becase of (var)


// it is nested function how to work and what is accessable or not
function one() {
    const Username = " Aman "

    function two() {
        const website = "youtube"
        console.log(Username)

    }

    //console.log(website);  // it gives you error we it define outside the own function 
    two() // if second function not execute it return none becacuse we are printing the username in second function 
    
}

//one() // at time of execution ...first function execute first and execute second 

if(true){
    const username = "aman"
    
    if(username === "aman"){
        const website = " youtube"
        //console.log(username + website);
        
    }
    //console.log(website); // both console.log present outside the scope 

}
//console.log(username);


// +++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++

// we can call a function in top of the function and it execute perfectly 
console.log(addOne(5))
function addOne (num1){
    return num1 + 1
} 


// but in this type of function we can not initialize the function or (hosting) like this 
//addTwo(5)
const addTwo = function(num2){
    return num2 + 2
}

addTwo(5)
 // this is the hosting concept we can learn how to host and declare the varibale and call the function in various type
