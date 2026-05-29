//const fbUser = new Object() 
// this is singelton obejct 

const fbUser = {} // this is non-singelton obejct 

fbUser.id = "123abc"
fbUser.Name = "Aman "
fbUser.email = "aman@gmail.com"
//console.log(fbUser);

const regularUser = {
    email : "aman.google.com ",
    fullname:{
        Userfullname : {
            firstName : "Aman",
            lastName: "Mishra"
        }
    }
}

//console.log(regularUser.fullname.Userfullname.firstName);

// now we can add two or more object in a singel object 

const obj1 = {1:"a", 2 : "b"}
const obj2 = {3:"c", 4 : "d"}
const obj3 = {5:"e", 6 : "f"}

// object.assign is help to join tow or more object in target object
//const obj4 = Object.assign({},obj1 ,obj2 , obj3) 
// {} this empty object show the tagert object 
// and other obj1 and obj2 and obj3 is source object
// all source object merge in target object 

const obj4 = {...obj1 , ...obj2 , ...obj3} // this is another method to join the multiple object 

//console.log(obj4);

//how to access data in database 

const user = [
    {
        id :1,
        email : "user@gmail.com"
    },
    {
        id :2,
        email : "user@gmail.com"
    },
    {
        id :3,
        email : "user@gmail.com"
    }
]

//console.log(user[1].email)

//console.log(fbUser)
//console.log(Object.keys(fbUser))
// return all keys present in object 

//console.log(Object.values(fbUser))
// return all value presnt in object 

//console.log(Object.entries(fbUser))

//console.log(fbUser.hasOwnProperty("email"))
// it check the given key is present or not and return the boolean output (true or false )


// destructuring the object 

const course = {
    coursename : "bcom",
    price : "999",
    courseteacher : "aman",
}

//course.courseteacher

const {courseteacher : teacher } = course
console.log(teacher)


// now we talk about API
/* An API, or Application Programming Interface, is a set of rules that allows different
 software applications to communicate and share data with each other
 */

// it return data in json format .
// so this is a json format just like a object but not proper object 
// in json the key and value both are string 

/*
{
    "name" : "aman",
    "coures" : "bcom",
    "price" : "free"
}
*/


// some time api show in array format 
/*
[
    {},
    {},
    {}
]
*/
