
buttonCLick();

function buttonCLick() {
  document.querySelector("button").addEventListener("click", rollDice1);
  document.querySelector("button").addEventListener("click", rollDice2);
  document.querySelector("button").addEventListener("click", result);
}
var dice1, dice2;
//----------- DICE 1------------------------
function rollDice1() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var image1 = document.querySelectorAll("img")[0];
  var imageSource1 = "images/dice" + randomNumber1 + ".png";
  var randomDiceImage1 = image1.setAttribute("src", imageSource1);
  dice1 = randomNumber1;
}

//------------ DICE 2 -------------------------------
function rollDice2() {
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  var image2 = document.querySelectorAll("img")[1];
  var imageSource2 = "images/dice" + randomNumber2 + ".png";
  var randomDiceImage2 = image2.setAttribute("src", imageSource2);
  dice2 = randomNumber2;
}

// ------------------------------------------------------------------------
function result() {
  if (dice1 > dice2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
  } else if (dice1 < dice2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").textContent = "🛑 Draw! 🛑";
  }
}
