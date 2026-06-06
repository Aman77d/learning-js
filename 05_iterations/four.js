// now we discuss how can we iterate the object 
// we use for in loop for this one
//The for...in loop iterates over the enumerable properties of an object.
//The for...in loop is primarily used for objects to access their property names (keys).

const myobject = {
    js : "javascript",
    cpp : "c++",
    py : "python",
    HTML : "hyper text markup language",
}

for (const key in myobject) {
    //console.log(key);
    // it return all keys present in myobject
   
   // console.log(myobject[key]);
   // it return only value present in myobject 

   // if we print both key and value so use this syntax
   //console.log(key + " => " +  myobject[key]);   

   //console.log(`${key} short form of ${myobject[key]}`);
   // this is also a method to take key and value 
   
}

// now we apply this for-in loop in array
const myarr = ["js" , "py" , "ruby","cpp"]

for (const key in myarr) {
    //console.log(key);
    // it return key of array which is in number 

   // console.log(myarr[key]);
    // it return the array value 
    // so we can apply for-in loop in arrays
}

// what about map let see
/*
const map = new Map()
map.set('IN' , "India ")
map.set('USA' ,"United states of america ")
map.set('FR' ,"France ")

for (const key in map) {
    console.log(key);
}
*/
// in output we have nothing because map is not iterable like this 
// definately we can iterate but as if now not possible

