const user = {
    username : "Aman",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        // this keyword reffer the current context 
        
        //console.log(this); 
        // this print the previous context with the current context 
        // like the first user is aman it print 
        // and then come tushar and it is current user so it also return the current user
        
    }
}
 //user.welcomeMessage()
 //user.username = "Tushar"
// user.welcomeMessage()

// console.log(this); 
 // it return the empty string because now the current context in globaly is empty
 // in simple word no context availbale in global scope 
// so it return empty in current situation 

// but in brower environment it return window 


/*
function road() {
    const roadName = "Highway"
    console.log(this.roadName)
}
road()
*/
// so we cant not use this keywornd in functions like this 
//it return undefined output 

/*
const name = function(){
     const roadName = "Highway"
     console.log(this.roadName)
}
name()
*/
// it similay to define a function it also return undefined 


//++++++++++ how to declare a arrow function ++++++++++

const chai = () => {
    const roadName = "Highway"
    console.log(this.roadName)
}
//chai ()

// now the basic knowledege about the arrrow function 

// decleartion 
//const addtwo = (num1 , num2 ) => {
    //return num1 + num2 
//}


//it is a another way to declare arrow function 
// it is called implicit return 
// in this we can not use the return kyeword and curly braces{} 
// use paranthesis()
//const addtwo = (num1 , num2 ) => (num1 + num2) 

//const addtwo = (num1 , num2 ) => num1 + num2

// arrow function with object
const addtwo = (num1 , num2 ) => ({username : " Aman"}) 

console.log(addtwo(3,4))

