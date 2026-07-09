// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')

//setInterval is a event ;
//in setInterval event ..one thing is important which is syntax ;
// 1000 is miliseconds which is equal to 1 second;
setInterval(function(){

    // date is a object ;
    let date = new Date()

    //we use the tolocaletimestring method which is hepl to display the time with seconds
    clock.innerHTML = date.toLocaleTimeString();
} , 1000)
