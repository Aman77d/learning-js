// let name = "Aman     "
// console.log(name.length);

// console.log(name.trim().length);


let myheros = ["thor" , "spiderman"]

let heroPowers = {
    thor:"Hammer",
    spiderman : "Sling",

    getSpiderpower : function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.power = function(){
    console.log("Powers present in all heroes :")
}

Array.prototype.heyHero = function(){
    console.log("Hero say Hello....");
    
}
// heroPowers.power()
// myheros.power()
// myheros.heyHero()


// Inheritance 

let user = {
    name : "chai",
    email : "chai@google.com"
}

let Teacher  = {
    makeVideo : true
}

let TeacherSupport = {
    isAvailable : false
}

let TASupport = {
    makeAssignment : "js Assignmet" ,
    isFulltime : true ,

    __proto__ : TeacherSupport
}

Teacher.__proto__ = user

// it is outdated approach 

// now we talk about new Approach
// Object.setPrototypeOf(TeacherSupport , Teacher)

// solve the string problem 

let anotherUsername = "Tushar       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True lenth is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Hitesh".trueLength()
"Chaiorcode".trueLength()