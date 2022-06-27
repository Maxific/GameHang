import { randomWord, generateButtons, guessWord } from "./generateFunction";
import { mistakes, guess } from "./index.js";

export function updateHangmanImg() {
  document.getElementById('man').src = './img/' + mistakes + '.png';
}

export function playAgain() {
  mistakes = 1;
  guess = [];
  document.getElementById('man').src = './img/1.png'

  randomWord();
  generateButtons();
  guessWord();
}