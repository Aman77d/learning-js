// now we see map operations 
//map is method in array 
// map have call back function with condition 
// it return value automatically
// we use return keyword inside scope
const numbers = [1,2,3,4,5,6,7,8,9,10]

const newNumber = numbers.map( (num) => {return num + 10} )
//console.log(newNumber);

// using for each method 
/*
const newNum = numbers.forEach( (num) =>{
    console.log(num + 10);
    return num 
    
})*/

// now we discussing chaining concept by the help of map and filter
const newOrder = numbers
        .map( ( num) => num * 10)  // this map method mutiply the number by 10
        .map( (num) => num + 1)  // it takes input after first map complet his work 
        .filter( (num) => num >= 40)
console.log(newOrder);
