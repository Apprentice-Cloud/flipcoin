let winner = document.getElementById('winner');
let input = document.querySelector('input');
let player1 = document.getElementById('player1');
let level = 1;
let flipOutcome;
let roundCountPlayer = 0;
let roundCountComputer = 0;


const getPlayer1 = () => {
    if(input.value) {
        player1.textContent = input.value;
    }else{
    player1.textContent = "Player 1";
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 2);
}

function flipCoin() {
    let randomFlip = randomNumber();
    if (randomFlip === 0 ){
        flipOutcome = "head";
        roundCountPlayer++;
    }else {
        flipOutcome = "tails";
        roundCountComputer++
    }
    let outcome = document.getElementById('outcome');
    outcome.textContent = "Outcome : " + flipOutcome;
    
    let computerGuess;
    if(flipOutcome === "head"){
        computerGuess = "tails";
    }else{
        computerGuess = "head";
    }

    let logic = document.getElementById('logic');
    logic.textContent = "computer guessed " + computerGuess + " and " + player1.textContent + " guessed " + flipOutcome;
    
    nextLevel();

}

function nextLevel() {
    let round = document.getElementById('round');
    if(level > 5){
        level = 0;
    }
    if(level < 5){
    round.textContent = "Round " + level;
    }
    if(level == 5){
    round.textContent = "Last Round";
    }

    let roundWinner = document.getElementById('roundwinner');
    let currentBoard = document.getElementById('currentscore');

    if ((flipOutcome == "head") && (level < 5)){
        roundWinner.textContent = player1.textContent+ " won round " + level + ". Yaay 👏🏾 flip again";
    }else if((flipOutcome == "tails") && (level < 5)){
        roundWinner.textContent = "Computer won round " + level + "☠️";
    }else if((flipOutcome == "head") && (level >= 5)){
        roundWinner.textContent = player1.textContent + " won " + "the last round. Gonna be a comeback?? 🤨";
    }else if((flipOutcome == "tails") && (level >= 5)){
        roundWinner.textContent = "Computer won the last round. Might be a win for 000110111 💀"; 
    }else{
        alert("Something's wrong");
    }

currentBoard.textContent = player1.textContent + " gets a " + roundCountPlayer + " and computer gets a " + roundCountComputer;

level++

    let totalRounds = roundCountComputer + roundCountPlayer;

    if (totalRounds == 5 && roundCountPlayer > roundCountComputer){
        winner.style.display = "block";
        winner.textContent = player1.textContent + " wins 🍾";
    }else if (totalRounds == 5 && roundCountPlayer < roundCountComputer){
        winner.style.display = "block";
        winner.textContent = "You lost 🥴 .. Give it another try 💀";
    }else if(totalRounds > 5){
        winner.textContent = "";
        roundCountPlayer = 0;
        roundCountComputer = 0;
    }else{
        // alert('not yet won');
    }

}




