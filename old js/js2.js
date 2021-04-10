// global variables
let playerScore = 0;
let computerScore = 0;
let endOfGame = false;

// event listeners
const jugar = document.getElementById('jugar');
const btnPlayAgain = document.getElementById('play-again');
jugar.addEventListener('click', game)
btnPlayAgain.addEventListener('click', playAgain)
const btnPiedra = document.getElementById('piedra');
const btnPapel = document.getElementById('papel');
const btnTijeras = document.getElementById('tijeras');

// player slection
function playerPlay() {
    btnPiedra.addEventListener("click", function () {
        return playerPick = "piedra";
    });

    btnPapel.addEventListener("click", function () {
        return playerPick = "papel";
    });

    btnTijeras.addEventListener("click", function () {
        return playerPick = "tijeras";
    });
}

let playerPick = playerPlay();

// computer selection
var ppt = [
    "piedra",
    "papel",
    "tijeras"
];

function computerChoice() {
    return ppt[Math.floor(Math.random() * ppt.length)];
}

// play one round
function playRound(computer, human) {


    human = playerPick.toLowerCase();
    computer = computerChoice().toLowerCase();

    if (human == computer) {
        console.log(`human: ${human}`, `\ncomputer: ${computer}`)
        console.log("empate")

    }
    else if (human == "tijeras" && computer == "papel" || human == "papel" && computer == "piedra" || human == "piedra" && computer == "tijeras") {
        console.log(`human: ${human}`, `\ncomputer: ${computer}`)
        console.log("human wins")
        playerScore = playerScore + 1;

    }

    else if (computer == "tijeras" && human == "papel" || computer == "papel" && human == "piedra" || computer == "piedra" && human == "tijeras") {
        console.log(`human: ${human}`, `\ncomputer: ${computer}`)
        console.log("computer wins")
        computerScore = computerScore + 1;

    }
}
// // first to reach 5
function game() {
    playRound();
    playerPick = ""

    if (playerScore === 5) {
        console.log(`human wins \nHuman score: ${playerScore}`, `\nComputer score: ${computerScore}`)
        document.getElementById("piedra").disabled = true;
        document.getElementById("tijeras").disabled = true;
        document.getElementById("papel").disabled = true;
        document.getElementById("jugar").disabled = true;
    } else if (computerScore === 5) {
        console.log(`computer wins \nHuman score: ${playerScore}`, `\nComputer score: ${computerScore}`)
        document.getElementById("piedra").disabled = true;
        document.getElementById("tijeras").disabled = true;
        document.getElementById("papel").disabled = true;
        document.getElementById("jugar").disabled = true;
    }
}

// play again
function playAgain() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("piedra").disabled = false;
    document.getElementById("tijeras").disabled = false;
    document.getElementById("papel").disabled = false;
    document.getElementById("jugar").disabled = false;
    console.clear()
}
