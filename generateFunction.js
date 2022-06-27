import { words } from "./constants.js";
import { gameLost, gameWon } from "./checkers.js" 
import { updateHangmanImg } from "./updater.js"

let wordH = null;
let word = '';
let guess = [];
export let mistakes = 1;

export function randomWord() {
    word = words[Math.floor(Math.random() * words.length)];
}


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

export function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `<button id = '` + letter + `'onClick="selectGuess('` + letter + `')"> ` + letter + ` </button>`).join(' ');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  
}

export function guessWord() {

  wordH = word.split('').map(letter => (guess.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('word').innerHTML = wordH;
}

export function playAgain() {
  mistakes = 1;
  guess = [];
  document.getElementById('man').src = './img/1.png'

  randomWord();
  generateButtons();
  guessWord();
}

