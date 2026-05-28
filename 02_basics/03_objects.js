// singelton object 
//Object.create    // constructor way to decleare a object in js 

// obejct literals // it is defualt method to create a object 

const mySym = Symbol("key1")
// this is a Symbol ..we can you inside the object as a key value pair 
//sometime interviewer asked create a symbol and access inside the object and print 
//if you use like this mySym : "myKey1" it is good but in js mySym take as a string not a Symbol 
// so if you print the symbol so declare inside the [] bracket like [mySym] : "myKey1"
// it is correct way to decleared inside the object

const UserName = {
    name: " Aman ",
    "full name " : "Aman mishra",
   // mySym : "myKey1",
    [mySym] : "mykey1",
    age : 20,
    location : "Aligarh" ,
    email : "amanmishra@gmail.com ",
    isLoggedIn : false,
}


console.log(UserName.name);
console.log(UserName["name"]) // if use access inside object key(name) by using [] bracket so you use "" quotes
console.log(UserName["full name "]) // if you create the String type key in object it automaticaly cached the String and access by []
//console.log(typeof UserName.mySym)  //behave like a String
console.log(UserName[mySym]) // this is main method to print a symbol


UserName.email = "aman@gmail.com" 
//this is the mehod of change any value inside the object
console.log(UserName)

//Object.freeze(UserName)
//this is help to freeze the whole object value ....after this you cant change any value 

UserName.email = "aman@google.com"
console.log(UserName)

// implement some functions 

UserName.greeting = function(){
    console.log("hello js users ")
}

UserName.greetingTwo = function(){
    console.log(`hello js users, ${this.name} `)
}

//console.log(UserName.greeting)
// it not execute the function but it return the  reffrence of the function 

console.log(UserName.greeting())
console.log(UserName.greetingTwo())