// we are discussing about for - each loop 

const myarray = ["js", "cpp","ruby ","python","java"]

// forEach in array is prototype we can access by simply array name with (.) dot
// in forEach required a call back function 
// the function without name
/* 
myarray.forEach(function (val1){
    console.log(val1);
    
})
*/

// we can also use arrow function instead of call back function 
/*
myarray.forEach((iteam) =>{
    console.log(iteam);
}) // we get same result
 */

// we can also use a another function inside forEach for ex

function printme(iteam){
    //console.log(iteam);
    
}

//myarray.forEach(printme()) // this is wrong . it gives you error  

myarray.forEach(printme) 
// always pass the reffernce of the function
// but one thing is important we give a refferance of the function .. not execute inside the forEach loop

// in call back function have acces full array , index value and values
myarray.forEach( (iteam , index , arr) => {
    //console.log(iteam , index , arr);
    
})

// if we hava a array with multiple object inside the array for example 

const coding = [
    {
        languageName : "javascript",
        fileName : "js"
    },
    {
        languageName : "python",
        fileName : "py"
    },
    {
        languageName : "java",
        fileName : "java"
    },
]

coding.forEach( function (iteam) {
   // console.log(iteam.fileName);
   // it give all file name present in multiple object 

    // if you want language name 
    console.log(iteam.languageName);
    
    
})

// it is very important because data return in the array form through data base 