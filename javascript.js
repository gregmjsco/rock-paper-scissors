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
    for (let i = 0; i < 5; i++) {
        playRound(playerChoice, computerChoice)
        updateScores()
     }
}
/*
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function random(number) {
    return Math.floor(Math.random()*number);
  }

  
function getComputerChoice() {
     let choice = random(3);
    if (choice == 0) {
        return "Rock"
    } else if (choice == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getPlayerChoice(){
    return prompt("Enter your choice for RPS. Rock / Paper / Scissors", 'Rock')
}

console.log(getComputerChoice());
console.log(getPlayerChoice());
playRound(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection)

    }

}

let sayTie = () => console.log("Round is a Tie");
let sayWin = () => console.log("Round is a win");
let sayLose = () => console.log("Round is a loss");


*/









/*

function playRound(playerSelection, computerSelection) {
    // your code here!
    //Compare players selection to computers selection 
    //If player selected rock and computer selected rock display appropriate message
    // check for all other potential cases

    if (playerSelection =="rock" && computerSelection == "rock"){
        return result = "Tie";
    } else if (playerSelection =="rock" && computerSelection == "scissors"){
        return result = "Win";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return result = "Lose";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return result = "Tie";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return result = "Win";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return result = "Lose";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return result = "Tie";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return result = "Win";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return result = "Lose";
    }
}

  function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        // your code here!

        const playerSelection = window.prompt("Enter rock, paper, or scissors");
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);

        switch (result){
            case "Tie":
                console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. Tie, try again`);
                console.log(`Current score is player: ${playerScore} and computer: ${computerScore}`)
                break;
            case "Win":
                console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. Win, ${playerSelection} beats ${computerSelection}`);
                playerScore = playerScore + 1;
                console.log(`Current score is player: ${playerScore} and computer: ${computerScore}`)
                break;
            case "Lose":
                console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}. Lose, ${playerSelection} loses to ${computerSelection}`);
                computerScore = computerScore + 1;
                console.log(`Current score is player: ${playerScore} and computer: ${computerScore}`)
                break;
        }

     }

     if (playerScore > computerScore){
        console.log("You won the set");
     } else if (playerScore < computerScore){
        console.log("You lost the set")
     } else {
        console.log("Set was tied");
     }
  }
   


game();
*/