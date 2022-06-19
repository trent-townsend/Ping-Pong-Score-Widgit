const playerOneButton = document.querySelector("#player-1");
const playerTwoButton = document.querySelector("#player-2");
const resetButton = document.querySelector("#reset");
let playerOneScore = document.querySelector("#player1-score");
let playerTwoScore = document.querySelector("#player2-score");
let currentScoreOne = parseInt(playerOneScore.innerText);
let currentScoreTwo = parseInt(playerTwoScore.innerText);
let MaxScore = document.querySelector("#winning-score-select");

playerOneButton.addEventListener('click', function () {
    if (parseInt(MaxScore.value) === 0) {
        alert("Please select the winning score before playing");
    }
    else if (currentScoreOne < MaxScore.value && currentScoreTwo < MaxScore.value) {
        currentScoreOne += 1;
        playerOneScore.innerText = currentScoreOne;
    }
})

playerTwoButton.addEventListener('click', function () {
    if (parseInt(MaxScore.value) === 0) {
        alert("Please select the winning score before playing");
    }
    else if (currentScoreTwo < MaxScore.value && currentScoreOne < MaxScore.value) {
        currentScoreTwo += 1;
        playerTwoScore.innerText = currentScoreTwo;
    }
})

resetButton.addEventListener('click', function () {
    playerOneScore.innerText = "0";
    playerTwoScore.innerText = "0";
    currentScoreOne = 0;
    currentScoreTwo = 0;
})
