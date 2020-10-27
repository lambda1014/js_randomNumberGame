
//import "./styles.css";

const selectNumber = document.querySelector(".js-number");
const rangeSet = document.getElementById("jsRange");
const inputNumber = document.querySelector(".js-inputNumber");
const play = document.querySelector(".js-play");
const chosenNumber = document.querySelector(".js-chosenNumber");
const win = document.querySelector(".js-win");
const lose = document.querySelector(".js-lose");

const HIDE = "hide";
const SHOW = "show;";

let myChosen = 0;
let rangeChosen = -1;

function handleInputNumber(event) {
  myChosen = event.target.value;
}

function handlePlay() {
  const random = Math.floor(Math.random() * rangeChosen);
  chosenNumber.innerHTML = `You chose: ${myChosen}, the machine chose: ${random}.`;
  chosenNumber.classList.remove(HIDE);
  chosenNumber.classList.add(SHOW);

  const result = myChosen - random;

  if (result === 0) {
    lose.classList.add(HIDE);
    win.classList.remove(HIDE);
    win.classList.add(SHOW);
  } else {
    win.classList.add(HIDE);
    lose.classList.remove(HIDE);
    lose.classList.add(SHOW);
  }
}

function handleRangeChange(event) {
  rangeChosen = event.target.value;
  selectNumber.innerHTML = `Generate the number between 0 and ${rangeChosen}`;
  if (rangeChosen >= 0) {
    inputNumber.addEventListener("input", handleInputNumber);
    play.addEventListener("click", handlePlay);
  }
}

function init() {
  chosenNumber.classList.add(HIDE);
  win.classList.add(HIDE);
  lose.classList.add(HIDE);
  rangeSet.addEventListener("input", handleRangeChange);
}

init();
