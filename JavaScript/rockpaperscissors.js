function computerPlay() {

    const arr = ["rock", "paper", "scissor"];
    return arr[Math.floor(Math.random()*arr.length)];

}

<<<<<<< Updated upstream
function singleRound(playerSelection, computerSelection){
=======
let playernum = 0;
let compnum = 0;
const playerScore = document.querySelector('.playerscore');
const computerScore = document.querySelector('.computerscore');

function restart() {
    playernum = 0;
    compnum = 0;
    playerScore.innerHTML = "0";
    computerScore.innerHTML = "0";
    return document.querySelector('.roundover').innerHTML = "Round over!";
}


function playRound(playerSelection, computerSelection){
>>>>>>> Stashed changes

    const player = playerSelection.toLowerCase();

    if(player === "rock" && computerSelection === "scissor"){
        ++playernum;
        updateScore(playerScore, playernum, compnum);
        return "Computer loses! Rock beats scissor";
    } else if (player === "scissor" && computerSelection === "paper"){
        ++playernum;
        updateScore(playerScore, playernum, compnum);
        return "Computer loses! Scissor beats paper";
    } else if(player === "paper" && computerSelection === "rock") {
        ++playernum;
        updateScore(playerScore, playernum, compnum);
        return "Computer loses! Paper beats rock";
    } else if(player === computerSelection){
        return "Draw!";
    } 
    else {
        ++compnum;
        updateScore(computerScore, playernum, compnum);
        return "Computer wins!";
    }

}

<<<<<<< Updated upstream
function game() {
=======
function updateScore(player, num, compnum) {

    if(num === 5 || compnum === 5){
        restart();
    } else if(player === playerScore){
        playerScore.innerHTML = num;
    } else {
        computerScore.innerHTML = compnum;
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

const arr = [rock, paper, scissor];

arr.forEach(choice => choice.addEventListener('click', function(e){
    document.querySelector('.roundover').innerHTML = '';
    const value = e.target.innerHTML;
    p.innerHTML = playRound(value, computerPlay());
}));

const div = document.querySelector('.score');
const p = document.createElement('p');
div.appendChild(p);


// rock.addEventListener('click', function(e){
//     const value = e.target.innerHTML;
//     score.innerHTML = playRound(value, computerPlay());
// });
>>>>>>> Stashed changes

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

