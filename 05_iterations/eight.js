// we are discussing reduce method 
// reduce have a callback function and inside the function it contain two values 
// 1.accumulator and 2. current Value
// for example 

const numbers = [1,2,3]

/*
const newTotal = numbers.reduce( function (acc , current_val) {
    const total =  acc + current_val
    console.log(`acc val : ${acc} And current_val : ${current_val} and total - > ${total}`);
    
     return total
} , 0)
// 0 is the value of accumulator 
// accumulator takes initial value 0 and after perform first operation it takes the total value of first operation

console.log(newTotal);
*/

// now let see how to work with arrow function in reduce method
const newTotal = numbers.reduce( ( accumulator , current_val) => accumulator + current_val , 0)
console.log(newTotal);

// lets take another example 

const shoppingCart = [
    {
        itemName : "phone",
        price : 13999
    },
    {
        itemName : "Laptop",
        price : 45999
    },
    {
        itemName : "TV",
        price : 18999
    },
    {
        itemName : "Watch",
        price : 599
    },
    {
        itemName : "PS5",
        price : 55999
    },
]

const totalBill = shoppingCart.reduce( ( acc , item ) => acc + item.price ,0 )
console.log(totalBill);

// it gives you total bill of shoopingCart