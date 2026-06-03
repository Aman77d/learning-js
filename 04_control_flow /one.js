// if-else statement 

// basic syntax 
/*
 const temperature = 51
 if(temperature < 50){
    console.log("temprature is less than 50")
 }else{
    console.log("temprature is grater than 50s");
 }
*/

// there are some basic comparison operator are :
// < , > , <= , >= , == , === , != ,!== 
// === it is checked the two value are equal or not with typeof 

/*
const score = 200 
if (score > 100 ){
   const power = "fly"
   console.log(`user power is : ${power} `);
}
//console.log(`user power is :${powers}`); // it throw error power is not defined 
// due to scope , power is present in if block 
*/

// another way to decleare conditional statement 
// it is short hand method but is not recommanded

//const balance = 1000
//if(balance > 500) console.log("it is greater");

// now we are checking multiple condition by using nested if else :
/*
if (balance < 500) {
    console.log("less than 500");    

} else if(balance < 750){
    console.log("less than 750")
} else if (balance < 900){
    console.log("less than 950")
}else{
    console.log("less than 1200")
}*/

// now we checked more condition 

const userloggedIn = true
const debatecard = true 

const userLOggedINgmail = false 
const userloggedInemail = true 


if(userloggedIn && debatecard){
    console.log("user allow to buy product");
    // && this is logical AND operatot it work both condition is true 
}


if(userLOggedINgmail || userloggedInemail){
    console.log("user logged IN");
    // when we ensure the one condition is alway be true than we use logical OR operator(||)
}





