import { guessWord } from "./generateFunction";
import { mistakes, guess, word, wordH, maxWrong } from "./index.js";

  function gameWon() {
    if (wordH === word) {
      document.getElementById('keyboard').innerHTML = 'You Won!';
    }
  }
  
  function gameLost() {
    if (mistakes === maxWrong) {
      document.getElementById('word').innerHTML = 'The answer: ' + word;
      document.getElementById('keyboard').innerHTML = 'You Lose!';
    }
  }