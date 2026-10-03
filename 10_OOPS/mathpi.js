// getOwnPropertyDescriptor gives you the hidden properties of the object
const desc = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(desc);
/*
it gives you this 
that why we cant override the pi value in math moduel
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

let chai = {
    name:"green tea",
    price:50,
    isAvaliable:true,
    orderChai:function(){
        console.log("chai order fail")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name" , {
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

// the object chai propert name is now not enumerable (means you cant use loop or something or you cant override the name)

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key}:${value}`);
    }
}