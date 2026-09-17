// es6

// class User {

//     constructor(username , email , password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     secretPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const user = new User("Aman" ,"aman@gmail.com" , "123")
// console.log(user.secretPassword());
// console.log(user.changeUserName());

// ============================================================================

// how to do same task without using class and constructor 

function User(username , email , password){
    this.username =username
    this.email = email
    this.password = password
}

User.prototype.secretPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}
    
const tea = new User("aman" , "aman@gmail.com" , "123")
console.log(tea.secretPassword());
console.log(tea.changeUserName());


