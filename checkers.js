<<<<<<< HEAD
import { guessWord } from "./generateFunction";
import { mistakes, guess, word, wordH, maxWrong } from "./index.js";

  function gameWon() {
=======
import { guessWord, randomWord, selectGuess } from "./generateFunction";
import { maxWrong } from "./constants";

guessWord();
selectGuess();
randomWord();

export function gameWon() {
>>>>>>> checker
    if (wordH === word) {
      document.getElementById('keyboard').innerHTML = 'You Won!';
    }
  }
  
<<<<<<< HEAD
  function gameLost() {
=======
export function gameLost() {
>>>>>>> checker
    if (mistakes === maxWrong) {
      document.getElementById('word').innerHTML = 'The answer: ' + word;
      document.getElementById('keyboard').innerHTML = 'You Lose!';
    }
  }