function getComputerChoice() {
    choice = ["rock", "paper", "scissors"];
    num = 0;
    result = "";
    return choice[Math.floor(Math.random()*3)];
}

console.log(getComputerChoice());
