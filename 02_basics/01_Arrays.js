const myArray = [0,1,2,3,4,5]

//console.log(myArray)

const myArr = ["Aman" , "Aligarh"]
//console.log(typeof myArr)

const myArr2 = new Array(1,2,3,4)
//console.log(myArray[1])

// Array methods :
/*
myArray.push(6)
myArray.push(7)

myArray.pop(7)
console.log(myArray)
*/

/*
const newArr = [1,2,3,4]
//newArr.unshift(9)
newArr.shift()
console.log(newArr)
*/

//console.log(myArray.includes(2))  // check the element present or not in  main array and return in boolean value 
//console.log(myArray.indexOf(3))

const newArr1 = myArray.join()
//console.log(myArray)
//console.log(newArr1)
//console.log(typeof newArr1)

// slice and splice 

console.log("A" , myArray)

const myn1 = myArray.slice(1,3) 
//in slice method it return the specified range you decleared inside the slice method ...
//but it can not include last element of range so it rerturn [1,2]
//and original array is same (not modified all element are present)
console.log(myn1)

console.log("B" , myArray)

const myn2 = myArray.splice(1,3)
// in splice method it return the range of last element are decleared inside the splice method 
//but it also modified the original array ...
// in other word the splice element are not present in main array
console.log(myn2)
//[1,2,3]

console.log("C",myArray)
//[0,4,5]