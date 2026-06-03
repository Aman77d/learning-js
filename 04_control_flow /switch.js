// switch is using to check multiple condition 
// basic syntax 
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}*/
// key is reffer the value i need to check every time so in this situation we checked month 

const month = 3
 switch (month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("april");
        break;
 
    default:
        console.log("default message ");
        
        break;
 }


// sometime we confused in comaprision like previous we check the integer number 3
// what about stirng for example 

const months = "march"

 switch (months){
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("april");
        break;
 
    default:
        console.log("default message ");
        
        break;
 }

 // this is switch control flow statement 
 // now we talk about truthy and falsy value in next file 