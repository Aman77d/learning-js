const user1 = {
    username : "Aman",
    loginCount : 8 ,
    signedIn : true ,

    userGetDetails : function(){
        // console.log("Got user detail from database ");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}


// console.log(user.username);
//console.log(user.userGetDetails());
// console.log(this);

function user(username , logginCount , isSignedin){
    this.username = username
    this.logginCount = logginCount
    this.isSignedin = isSignedin

    this.greeting = function(){
        console.log(`Welcome : ${this.username}`);
        
    }
    return this // if you dont return the this .... node by default return this value 
}

const userOne = new user("Aman" , 12 , true) 
// this is only create one user 
// now create mutliple user 

const userTwo = new user("tushar" , 11 , false)
// now we have a problem
// the porblem is the userTwo override the value of userone
// still we cant print the user two

// for this problem we are used contructor function (new )
// it create a every time new instance of the object 

// console.log(userOne instanceof user);
// console.log(userOne.constructor);


console.log(userTwo);


