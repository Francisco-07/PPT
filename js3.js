// global variables
let playerScore = 0;
let computerScore = 0;
let playerPick;
let computerSeleciton;

// selectors
const btnPlayAgain = document.getElementById('play-again');
const btnPiedra = document.getElementById('piedra');
const btnPapel = document.getElementById('papel');
const btnTijeras = document.getElementById('tijeras');
const output = document.getElementById('testo');
const outputTextP = document.getElementById("human-score");
const outputTextC = document.getElementById("computer-score");
const h1 = document.getElementById("h1");

// crear imagenes
const img = document.createElement("img");
const imgP = document.createElement("img");

// event listeners
btnPiedra.addEventListener('click', function () {
    playerPick = "piedra";
    playRound()
    game()
    playerPiedra()
    computerS()

})
btnPapel.addEventListener('click', function () {
    playerPick = "papel";
    playRound()
    game()
    playerPapel()
    computerS()

})
btnTijeras.addEventListener('click', function () {
    playerPick = "tijeras";
    playRound()
    game()
    playerTijeras()
    computerS()

})
btnPlayAgain.addEventListener('click', playAgain)

// computer selection
var ppt = [
    "piedra",
    "papel",
    "tijeras"
];

function computerChoice() {
    return computerSeleciton = ppt[Math.floor(Math.random() * ppt.length)];
}

// play one round
function playRound(computer, human) {


    human = playerPick.toLowerCase();
    computer = computerChoice().toLowerCase();

    if (human == computer) {
        output.textContent = "Empate!";
    }
    else if (human == "tijeras" && computer == "papel" || human == "papel" && computer == "piedra" || human == "piedra" && computer == "tijeras") {
        output.textContent = `${human} le gana a ${computer}, human wins!`
        playerScore = playerScore + 1;
        outputTextP.textContent = `Human Score: ${playerScore}`
    }

    else if (computer == "tijeras" && human == "papel" || computer == "papel" && human == "piedra" || computer == "piedra" && human == "tijeras") {
        output.textContent = `${computer} le gana a ${human}, computer wins!`
        computerScore = computerScore + 1;
        outputTextC.textContent = `Computer Score: ${computerScore}`
    }
}
// // first to reach 5
function game() {
    playerPick = ""

    if (playerScore === 5) {
        output.textContent = 'Human wins'
        output.classList.add("green");
        h1.classList.add("green");
        btnPlayAgain.classList.remove("red-b");
        btnPlayAgain.classList.add("green-b");
        document.getElementById("piedra").disabled = true;
        document.getElementById("tijeras").disabled = true;
        document.getElementById("papel").disabled = true;
        btnPlayAgain.classList.toggle("toggle")
    } else if (computerScore === 5) {
        output.textContent = 'Computer wins'
        output.classList.add("red");
        h1.classList.add("red");
        btnPlayAgain.classList.remove("green-b");
        btnPlayAgain.classList.add("red-b");
        document.getElementById("piedra").disabled = true;
        document.getElementById("tijeras").disabled = true;
        document.getElementById("papel").disabled = true;
        btnPlayAgain.classList.toggle("toggle")
    }
}

// play again
function playAgain() {
    playerScore = 0;
    computerScore = 0;
    outputTextP.textContent = `Human Score: ${playerScore}`
    outputTextC.textContent = `Computer Score: ${computerScore}`
    output.textContent = "";
    output.classList.remove("green");
    output.classList.remove("red");
    h1.classList.remove("green");
    h1.classList.remove("red");
    btnPlayAgain.classList.remove("green");
    btnPlayAgain.classList.remove("red");
    document.getElementById("piedra").disabled = false;
    document.getElementById("tijeras").disabled = false;
    document.getElementById("papel").disabled = false;
    btnPlayAgain.classList.toggle("toggle")
    console.clear()
    removeImg()
}


// funciones que agregan el player pick
function playerPiedra() {
    imgP.src = "piedra.png";
    imgP.id = "delete";
    var src = document.getElementById("player-selection");
    src.appendChild(imgP);
}
function playerTijeras() {
    imgP.src = "tijeras.png"
    imgP.id = "delete";
    var src = document.getElementById("player-selection");
    src.appendChild(imgP);
}
function playerPapel() {
    imgP.src = "papel.png";
    imgP.id = "delete";
    var src = document.getElementById("player-selection");
    src.appendChild(imgP);
}

// funciones que agregan el computer pick
function computerS() {
    if (computerSeleciton == "papel") {
        img.src = "papel.png";
        img.id = "delete";
        var src = document.getElementById("computer-selection");
        src.appendChild(img);
    }
    else if (computerSeleciton == "tijeras") {
        img.src = "tijeras.png";
        img.id = "delete";
        var src = document.getElementById("computer-selection");
        src.appendChild(img);
    }
    else if (computerSeleciton == "piedra") {

        img.src = "piedra.png";
        img.id = "delete";
        var src = document.getElementById("computer-selection");
        src.appendChild(img);
    }
}

// pa deletear las imagenes con el restart
function removeImg() {
    for (i = 0; i < 2; i++) {

        var imageDelete = document.getElementById('delete');
        imageDelete.parentNode.removeChild(imageDelete);

    }
}

