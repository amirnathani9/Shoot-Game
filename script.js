// Create a 2 player shooting game.
// Each player has a health of 100.
// Players can shoot at each other with a random power (0-5) which will reduce the opponent's health.
// The Player whose health reaches 0, dies and the game ends.

// There are 5 such rounds, the player with the most game wins, wins the match/tournament.

// On the screen, there should be a button to start the game.
// Once the game finishes, it should update the current score.
// When a player wins 3 games, show the winner of the match.


const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const shootBtn = document.querySelector("#shoot-btn")
const againBtn = document.querySelector("#again-btn")
const player1Won = document.querySelector("#player1-won")
const player2Won = document.querySelector("#player2-won")
const seriesWon = document.querySelector("#series-won")
const restartBtn = document.querySelector("#restart-btn")

let player1Health = 100;
let player2Health = 100;
let player1Score = 0;
let player2Score = 0;
let rounds = 0;


againBtn.disabled = true;
restartBtn.style.visibility = "hidden"


player1.innerText = player1Health + "%"
player2.innerText = player2Health + "%"
player1Won.innerText = player1Score;
player2Won.innerText = player2Score;

shootBtn.addEventListener("click", () => {


    let player1fire = Math.floor(Math.random() * 5)
    let player2fire = Math.floor(Math.random() * 5)

    player1Health = player1Health - player2fire;
    player2Health = player2Health - player1fire;

    player1.innerText = player1Health + "%";
    player2.innerText = player2Health + "%";


    if (player1Health <= 0) {
        player2Score += 1
        player2Won.innerText = player2Score;
        shootBtn.innerHTML = "Player Two Won"
        shootBtn.disabled = "true"
        againBtn.disabled = false;

    } else if (player2Health <= 0) {
        player1Score += 1
        player1Won.innerText = player1Score;
        shootBtn.innerHTML = "Player One Won"
        shootBtn.disabled = "true"
        againBtn.disabled = false;

    } else if (player1Health <= 0 && player2Health <= 0) {
        shootBtn.innerHTML = "Draw"
        shootBtn.disabled = "true"
        player1Score = player1Score;
        player2Score = player2Score;
        againBtn.disabled = false;
    }

    if (player1Score == 3) {
        seriesWon.style.display = "block"
        seriesWon.innerText = "Congratulations Player1 Won the Game"
        shootBtn.disabled = "true"
        againBtn.disabled = "true"
        restartBtn.style.visibility = "visible"
    } else if (player2Score == 3) {

        seriesWon.style.display = "block"
        seriesWon.innerText = "Congratulations Player2 Won the Game"
        shootBtn.disabled = "true"
        againBtn.disabled = "true"
        restartBtn.style.visibility = "visible"
    }
    if (rounds == 5) {
        if (player1Score < 3 && player2Score < 3) {
            seriesWon.style.display = "block"
            seriesWon.innerText = "Game is Draw"
            shootBtn.disabled = "true"
            againBtn.disabled = "true"
            restartBtn.style.visibility = "visible"
        }
    }
})  



againBtn.addEventListener("click", () => {
    shootBtn.disabled = false;
    shootBtn.innerHTML = "Shoot"
    player1Health = 100;
    player2Health = 100;
    player1.innerText = player1Health + "%"
    player2.innerText = player2Health + "%"
    rounds += 1;
    againBtn.disabled = true;
})


restartBtn.addEventListener("click", () => {
    seriesWon.style.display = "none"
    shootBtn.disabled = false;
    againBtn.disabled = true;
    shootBtn.innerHTML = "Shoot"
    player1Health = 100;
    player2Health = 100;
    player1.innerText = player1Health + "%"
    player2.innerText = player2Health + "%"
    restartBtn.style.visibility = "hidden"
    player1Score = 0;
    player2Score = 0;
    player1Won.innerText = player1Score;
    player2Won.innerText = player2Score;
    rounds = 0;
})