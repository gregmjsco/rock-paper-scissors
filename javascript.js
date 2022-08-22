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
        let result = "Tie";
        return result
    } else if (playerSelection =="rock" && computerSelection == "scissors"){
        return result = "Win";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return result = "Lose";
    }
  }

  function game() {
    for (let i = 0; i < 5; i++) {
        // your code here!

        const playerSelection = window.prompt("Enter rock, paper, or scissors");
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);

        switch (result){
            case "Tie":
                console.log("Tie, try again");
                break;
            case "Win":
                console.log(`Win, ${playerSelection} beats ${computerSelection}`);
                break;
            case "Lose":
                console.log(`Lose, ${playerSelection} loses to ${computerSelection}`);
                break;
        }

     }
  }
   


game();
