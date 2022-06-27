import { guessWord, randomWord, selectGuess } from "./generateFunction";
import { maxWrong } from "./constants";

guessWord();
selectGuess();
randomWord();

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