// Topic is Call
//The call() method of Function instances calls this function with a given this value and arguments provided individually.

function setUsername (username){
    //complex call
    this.username = username
}

// now i am try to call Setusername function for login 
// it call the username 
// but we use the call method()

// the problem is it the setusername function call the function and execute by call method 
// but the variable inside setUsername function is erased after call the setUsername 
// so we hold the reffernce of the function 
// we use the this keyword 
function userLogin (username , email , password ){
    setUsername.call(this , username)
    this.email = email
    this.password = password
}

const chai = new userLogin("Aman" , "abc@fb.com" , "123")
console.log(chai);
