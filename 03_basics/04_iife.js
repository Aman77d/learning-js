// Immediately Invoked Function Expression (IIFE)

// basic function 
function chai (){
    console.log("this is basic function ");  
}
//chai()


// now we make a IIFE function 
// it normal as basic function 
//in iife we wrap all the function in a () paranthesis
(function road() {
    console.log("road is very long");
    
})();

// one important thing is some time interviewer asked create two iife function and run the both function
// iife function are inoked but he cant knwon when the context is finised or stop 
// whenever this problem occur we used simple semi colon (;)
// it help to break the continous execution of iife function and execute the next function 



// we can also use this iife function with the help of arrow function 
// like this
(() =>{
    console.log("hey this is youtube channel");
})();

// iife function with parameter and arguments 

((name) => {
    console.log(`hello my name is ${name}`)
})("aman")

// we use arrow function ...
// name behave like a parameter 
// and after last paranthesis we pass the arggument (amna)