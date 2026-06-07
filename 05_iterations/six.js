// we are discussing the filter map and reduce

const myarray = ["js", "cpp","ruby ","python","java"]

// forEach not return the value
// forEach manually not return any value
const val1 = myarray.forEach( function( item) {
    //console.log(item);
    return item
})
// console.log(val1);

// use fillter method
// it is simiallar to forEach ...
// it also have a call back function 
const numbers = [1,2,3,4,5,6,7,8,9,10]

/*
const mynum =numbers.filter( (num) => {
    num > 4
})
    it gives you empty array because of not use return keyword
    */
// in filter method after call back function we passed a condition
// and after satisfied the condition it return the value

/*
const mynum =numbers.filter( (num) => {
    return num > 4
})
*/
// if we use Scope so we use the return keyword 
// it is explicit reutrn

//console.log(mynum);

// now how to use this mehtod in forEach

/*
const newNum = []
numbers.forEach( function (num) {
    if (num > 4) {
        newNum.push(num)
    }
})
console.log(newNum);
*/


const books = [
    {
        title : "Book one", Genre : "non-fiction" , publish : 1989,
        edition : 2004
    },
    {
        title : "Book two", Genre : "fiction" , publish : 1995,
        edition : 2007
    },
    {
        title : "Book three", Genre : "science" , publish : 1999,
        edition : 2010
    },
    {
        title : "Book four", Genre : "history" , publish : 2003,
        edition : 2009
    },
    {
        title : "Book five", Genre : "non-fiction" , publish : 2002,
        edition : 2012
    },
    {
        title : "Book six", Genre : "fiction" , publish : 1997,
        edition : 2009
    },
    {
        title : "Book seven", Genre : "history" , publish : 1997,
        edition : 2009
    },
]

let userBooks = books.filter( ( bk ) => bk.Genre === "science" )

userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.Genre === "history"
})
console.log(userBooks);

