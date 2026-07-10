const random = (parseInt(Math.random()*100 + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.loworHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []

let numGuess = 1 

let playGame = true

// check the user avaivlable to play a game 
if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess);
        ValidateGuess(guess)
    })
}

function ValidateGuess(guess){
    // this function is check the random number is between 1 to 100 
    // or this is number or string.
}

function checkGuess(guess){
    //IN this function we checked the given number is equal or not to the random number
    // if it is equal we show the (winning message) 
    // or if number is low show (low) 
    // or number is high show (high)
}

function displayGuess(guess){
    // thsi function clean the previous value 
    // and update the array value
}

function displayMessage(message){

}

function endGame(){

}

function newGame (){

}

