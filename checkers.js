import { guessWord, randomWord, selectGuess } from "./generateFunction.js";
import { maxWrong } from "./constants.js";

randomWord();
guessWord();
selectGuess();


export function gameWon() {
    if (wordH === word) {
      document.getElementById('keyboard').innerHTML = 'You Won!';
    }
  }
  
export function gameLost() {
    if (mistakes === maxWrong) {
      document.getElementById('word').innerHTML = 'The answer: ' + word;
      document.getElementById('keyboard').innerHTML = 'You Lose!';
    }
  }