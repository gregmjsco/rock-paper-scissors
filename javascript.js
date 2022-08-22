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
        //console.log("Tie! Try again!");
        return "Tie! Try again!"
    } else if (playerSelection =="rock" && computerSelection == "scissors"){
        //console.log("You win! Rock beats scissors.");
        return "You win! Rock beats scissors."
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        //console.log("You lose! Paper beats rock.")
        return "You lose! Paper beats rock."
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));