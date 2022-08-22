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