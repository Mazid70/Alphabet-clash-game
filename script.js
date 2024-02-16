function addElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function removeElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  return alphabet;
}

function continueGame() {
  const alphabet = getARandomAlphabet();
  const currentaAlphabet = document.getElementById("current-alphabet");
  currentaAlphabet.innerText = alphabet;
  addBackgroundById(alphabet);
  playGameContinueSound();
}

function addBackgroundById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}
function removeBackgroundById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
}

function play() {
  addElementById("score");
  addElementById("home-screen");
  removeElementById("play-groud");
  continueGame();
}
function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  const currentaAlphabet =
    document.getElementById("current-alphabet").innerText;
  const expectedAlphabet = currentaAlphabet.toLocaleLowerCase();
  let point = document.getElementById("game-points");
  let life = document.getElementById("game-life");
  const totalLife = parseInt(life.innerText);
  const totalPoint = parseInt(point.innerText);

  if (playerPressed === expectedAlphabet) {
    continueGame();
    removeBackgroundById(expectedAlphabet);
    point.innerText = totalPoint + 1;
  } else {
    life.innerText = totalLife - 1;
    if (totalLife === 0) {
      addElementById("play-groud");
      removeElementById("score");
      document.getElementById("result-score").innerText = point.innerText;
      removeBackgroundById(expectedAlphabet);
      playGameOverSound();
      gameContinueSound.pause();
    }
  }
}
document.addEventListener("keyup", handleKeyboardButtonPress);
function playAgain() {
  play();
  document.getElementById("game-points").innerText = 0;
  document.getElementById("game-life").innerText = 3;
}
var gameOverSound = new Audio("gameover.mp3");
function playGameOverSound() {
  gameOverSound.play();
}

var gameContinueSound = new Audio("continuegame.mp3");
function playGameContinueSound() {
  gameContinueSound.play();
  gameContinueSound.addEventListener("ended", function () {
    gameContinueSound.currentTime = 0;
    gameContinueSound.play();
  });
}
