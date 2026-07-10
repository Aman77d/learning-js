let randomNumber = (parseInt(Math.random()*100 + 1))

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

    if(isNaN(guess)){
        alert("Please enter a valid Number")
    }else if(guess < 1){
        alert("please enter a number greater than 1")
    }else if(guess > 100){
        alert("please enter a number less than 100")
    }else{
        prevGuess.push(guess)
        if(prevGuess.length >= 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //IN this function we checked the given number is equal or not to the random number
    // if it is equal we show the (winning message) 
    // or if number is low show (low) 
    // or number is high show (high)

    if(guess === randomNumber){
        displayMessage(`You won !`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is Tooo low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is Tooo High`)
    }
}

function displayGuess(guess){
    // thsi function clean the previous value 
    // and update the array value
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
    
}

function newGame (){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click' , function(e){
    randomNumber = (parseInt(Math.random()*100 + 1))
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
    })
}

