// now we are takling abount loop 
// for loop basic syntax 

// the first value is inzitalization 
// second is condition check 
// increment
for (let i = 0; i < 10 ; i++) {
    const element = i
    //console.log(element);
    if (element == 5) {
        //console.log("5 is a good number for me");
        
    }
    
}
// console.log(element); it through error due to scope


// now decleare two for loop or nested loop
for(let i = 1 ; i <= 10 ; i++){
   // console.log(`outer loop ${i}`);
   for (let j = 1 ; j <= 10 ; j++) {
   // console.log(`inner loop value ${j} : outer loop value ${i}`);

   // print tables 
 //  console.log( i + '*' + j  + "=" +  i * j );
      
   }
}


// array with loop

let myArray = ["flash", "batman" , "superman"]
//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    
    //console.log(element);
    
}


// break and continue
//break terminates the execution of loop 
// and jump direct outside of the loop 

for (let index = 1 ; index <= 20 ; index++){
    if (index == 5) {
        //console.log("detected 5 ");
        break
    }
    //console.log(`value of ${index}`);
    
}


// continue
// The continue statement in JavaScript terminates the execution of statements in the current loop iteration and 
// forces the loop to move directly to the next itteration

for (let index = 1 ; index <= 20 ; index++){
    if (index == 5) {
        console.log("detected 5 ");
        continue
    }
    console.log(`value of ${index}`);
    
}

