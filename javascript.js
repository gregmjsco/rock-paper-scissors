function random(number) {
    return Math.floor(Math.random()*number);
  }

  
function getComputerChoice() {
     let choice = random(3);
    if (choice == 0) {
        return "rock"
    } else if (choice == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}



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
