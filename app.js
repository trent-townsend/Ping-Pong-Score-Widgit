const playerOneButton = document.querySelector("#player-1");
const playerTwoButton = document.querySelector("#player-2");
const resetButton = document.querySelector("#reset");
const deuce = document.querySelector("#deuce");
let playerOneScore = document.querySelector("#player1-score");
let playerTwoScore = document.querySelector("#player2-score");
let currentScoreOne = parseInt(playerOneScore.innerText);
let currentScoreTwo = parseInt(playerTwoScore.innerText);
let maxScore = document.querySelector("#winning-score-select");
let isDeuce = false


function checkDeuce(currentScoreOne, currentScoreTwo, maxScore) {
    if ((currentScoreOne >= maxScore.value || currentScoreTwo >= maxScore.value) && currentScoreOne === currentScoreTwo) {
        deuce.style.visibility = 'visible';
        isDeuce = true;
    }
    else {
        deuce.style.visibility = 'hidden';
        isDeuce = false;
    }
}

function checkWin(currentScoreOne, currentScoreTwo, maxScore) {
    if (currentScoreOne >= maxScore.value && isDeuce == false) {
        playerOneScore.style.color = "green";
        playerTwoScore.style.color = "red";
    }
    else if (currentScoreTwo >= maxScore.value && isDeuce == false) {
        playerOneScore.style.color = "red";
        playerTwoScore.style.color = "green";
    }
}

playerOneButton.addEventListener('click', function () {
    if (parseInt(maxScore.value) === 0) {
        alert("Please select the winning score before playing");
    }
    else if ((currentScoreOne < maxScore.value && currentScoreTwo < maxScore.value) || ((Math.abs(currentScoreOne - currentScoreTwo < 2) && (Math.abs(currentScoreTwo - currentScoreOne < 2))))) {
        currentScoreOne += 1;
        playerOneScore.innerText = currentScoreOne;
        checkDeuce(currentScoreOne, currentScoreTwo, maxScore);
        checkWin(currentScoreOne, currentScoreTwo, maxScore);
    }
})

playerTwoButton.addEventListener('click', function () {
    if (parseInt(maxScore.value) === 0) {
        alert("Please select the winning score before playing");
    }
    else if ((currentScoreTwo < maxScore.value && currentScoreOne < maxScore.value) || ((Math.abs(currentScoreTwo - currentScoreOne < 2)) && (Math.abs(currentScoreOne - currentScoreTwo < 2)))) {
        currentScoreTwo += 1;
        playerTwoScore.innerText = currentScoreTwo;
        checkDeuce(currentScoreOne, currentScoreTwo, maxScore)
        checkWin(currentScoreOne, currentScoreTwo, maxScore);
    }
})

resetButton.addEventListener('click', function () {
    playerOneScore.innerText = "0";
    playerTwoScore.innerText = "0";
    currentScoreOne = 0;
    currentScoreTwo = 0;
    deuce.style.visibility = "hidden";
    playerOneScore.style.color = "black";
    playerTwoScore.style.color = "black";
})