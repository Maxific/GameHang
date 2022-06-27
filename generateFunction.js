import { word, words, wordH, guess, selectGuess } from "./index.js";



export function randomWord() {
    word = words[Math.floor(Math.random() * words.length)];
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

