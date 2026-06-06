// we are discussing different types of loop like 
// for of , for in 

// for of 
// The js for of statement loops through the values of an iterable object.\
// basic syntax 
// for (varibale of iterable ){}
// we first initailized a variable and select iterable 
// iterable may be string , object , array , map

const  number = [1,2,3,4,5]
for (const num of number) {
   // console.log(`the number is ${num}`);
    
}

const greeting = "hello world!"
for (const greet of greeting) {
   // console.log(`Each char is ${greet}`);
    
}


// Map in js
// Map is a object which is store data in key value pair 
// and each value is unique . it is not allow duplicate value 
// basic detail 

const map = new Map()
map.set('IN' , "India ")
map.set('USA' ,"United states of america ")
map.set('FR' ,"France ")
//map.set('IN' , "India ") // even if i try to add a dupplicate value it will not return the duplicate value 

//console.log(map);

// apply for of loop 
/*
for (const key of map) {
    console.log(key); 
}
*/

// if you print seprately key and value so use this syntax of map
// we use simply a [] squre bracket and pass key and value 
for (const [key , value] of map) {
    //console.log(key + ' :- ' + value); 
}


// can we use this syntax in object 
const myobject = {
    game1 : "NFS",
    game2 : "GTA"
}
// it give you error 
// myobject is not iterable
// because js object is not iterable for (for of loop)
// how can i get this one show in next file (four.js)
for (const [key , value ] of myobject) {
    console.log(key ,':-' , value);
    
}