function computerPlay() {

    const arr = ["rock", "paper", "scissor"];

    return arr[Math.floor(Math.random()*arr.length)];

}

function singleRound(playerSelection, computerSelection){

    const player = playerSelection.toLowerCase();

    if(player === "rock" && computerSelection === "scissor"){
        return "Computer loses! Rock beats scissor";
    } else if (player === "scissor" && computerSelection === "paper"){
        return "Computer loses! Scissor beats paper";
    } else if(player === "paper" && computerSelection === "rock") {
        return "Computer loses! Paper beats rock";
    } else if(player === computerSelection){
        return "Draw!";
    } 
    else {
        return "Computer wins!";
    }

}

function game() {

    for(let i = 0; i <= 5; i++){
        let x = prompt("Enter rock, paper or scissor");
        console.log(singleRound(x, computerPlay()));
    }
}

// const rock = "rock";
// const computer = computerPlay();
// console.log(rock);
// console.log(computer);
// console.log(singleRound(rock, computer));
game();

