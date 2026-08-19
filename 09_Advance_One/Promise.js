// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// now create a promise

// inside the promise it call a callback function
//now in callback function have two parameters (resolve , reject)
const PromiseOne = new Promise(function(resolve , reject){
    //Do async task
    //DB call , network , cryptography

    setTimeout(function(){
        console.log("Async Task is Completed");
        resolve()
    },1000)
})

// after creating a promise 
// consumed the promise

//.then is connected with the resolve method 
// then call a callback function
PromiseOne.then(function(){
    console.log("promise consumed");
    
})

//another way to create and consume the promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async task 2 resolved ");
    
})


// now we are acces the data from promise
const PromiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"Aman" , email:"aman@example.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user)
})

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"Tushar" , password:"123"})
        }else{
            reject('ERROR:Something went Wrong')
        }
    },1000)
})

// this is the concept of chaining
PromiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The promise is either resolved or rejected");
})

const PromiseFive = new Promise(function(resolve , reject){
     setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"JavaScript" , password:"123"})
        }else{
            reject('ERROR:JS went Wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUser(){
//    try {
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
    
//    const data = await response.json()
//    console.log(data);
//    } catch (error) {
//         console.log("E: " , error);
        
//    }
// }

// getAllUser()

// do it same work in another way
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
    
})