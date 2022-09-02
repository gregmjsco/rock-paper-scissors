const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const playerScoreDisplay = document.getElementById("player-score")
const computerScoreDisplay = document.getElementById("computer-score")
let playerChoice
let computerChoice
let result
let playerScore = 0
let computerScore = 0


possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
    game()
}))

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        result = "Round is a draw"
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        result = "You win"
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        result = "You lose"
    } else if (playerChoice === "paper" && computerChoice == "rock") {
        result = "You win"
    } else if (playerChoice === "paper" && computerChoice == "scissors") {
        result = "You lose"
    } else if (playerChoice === "scissors" && computerChoice == "paper") {
        result = "You win"
    } else if (playerChoice === "scissors" && computerChoice == "rock") {
        result = "You lose"
    }
    resultDisplay.innerHTML = result 
}


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1) {
        computerChoice = "rock"
    } else if (randomNumber === 2) {
        computerChoice = "paper"
    } else if (randomNumber === 3) {
        computerChoice = "scissors"
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function updateScores(){
    if (result === "You win"){
        playerScoreDisplay.innerHTML = ++playerScore
    } else if (result === "You lose") {
        computerScoreDisplay.innerHTML = ++computerScore
    }
}

function game(){
        playRound(playerChoice, computerChoice)
        updateScores()
}

