let playerScore = 0;
let computerScore = 0;


var ppt = [
    "piedra",
    "papel",
    "tijeras"
];

function computerChoice() {
    return ppt[Math.floor(Math.random() * ppt.length)];
}


function player() {
    let playerChoice;

    playerChoice = prompt("piedra, papel o tijeras?").toLowerCase();
    if (playerChoice == "piedra") {
        playerChoice = "piedra"
    }
    else if (playerChoice == "papel") {
        playerChoice = "papel"
    }
    else if (playerChoice == "tijeras") {
        playerChoice = "tijeras"
    }
    return playerChoice;
}

function playRound(computer, human) {
    human = player().toLowerCase();
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



function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore === computerScore) {
        console.log(`empate definitivo! \nHuman score: ${playerScore}`, `\nComputer score: ${computerScore}`)
    }
    else if (playerScore > computerScore) {
        console.log(`human wins \nHuman score: ${playerScore}`, `\nComputer score: ${computerScore}`)
    } else {
        console.log(`computer wins \nHuman score: ${playerScore}`, `\nComputer score: ${computerScore}`)
    }
}

game()