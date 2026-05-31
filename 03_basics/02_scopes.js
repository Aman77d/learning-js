
//var c = 300

let a = 300

// inside the if it called block space  and outside the if it called as global scope
if(true){
    let a = 10 
    const b = 20
     c = 30
     console.log("inner " , a);
     
}


console.log("global " ,a) // it through the error a is not defined 
//console.log(b) // similar for b is not defined  due to scope 
//console.log(c) // but c is exicute outside the block scope becase of (var)