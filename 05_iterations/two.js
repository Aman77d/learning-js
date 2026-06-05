// now we are see how while is decleared and what is the syntax of while or do while 
// while loop is smillar to the for loop 
// we initialized the number and check the condition and increment the number 

let number = 0
while (number <= 10 ) {
    console.log(`value of number is ${number}`);
    //number = number+1 // increment by 1 
    number = number + 2

}

// we use while loop with array 

let myArray = ["ironman" , "hulk" , "thor"]

let arr = 0

while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr++
    
}

// now talk about do-while loop 

//let score = 1
let score = 11
// it print the value 11 only because 
// "In a do-while loop, the code executes first, and then the condition is checked
// so thats why it return only 11 
do {
    console.log(`value is ${score}`);
    score++
} while (score <= 10);