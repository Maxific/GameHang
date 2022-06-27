import { words } from "./index.js";
import { gameLost, gameWon } from "./checkers.js" 
import { updateHangmanImg } from "./updater.js"


let word = '';
let guess = [];

export function randomWord() {
    word = words[Math.floor(Math.random() * words.length)];
}


export function selectGuess(selectLetter) {
  let mistakes = 1;

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
  let wordH = null;
  wordH = word.split('').map(letter => (guess.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('word').innerHTML = wordH;
  return wordH;
}

