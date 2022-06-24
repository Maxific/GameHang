import { guessWord } from "./generateFunction";
import { mistakes, guess, word, wordH, maxWrong } from ".";



export function selectGuess(selectLetter) {
    guess.indexOf(selectLetter) === -1 ? guess.push(selectLetter) : null;
    document.getElementById(selectLetter).setAttribute('disabled', '');
  
    if (word.indexOf(selectLetter) >= 0) {
    guessWord();
    gameWon(); 
    } else if (word.indexOf(selectLetter) === -1) {
      mistakes++;
      gameLost();
      updateHangmanImg();
      }
  } 
 
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