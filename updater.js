import { selectGuess, mistakes } from "./generateFunction.js";

selectGuess();

export function updateHangmanImg() {
  document.getElementById('man').src = './img/' + mistakes + '.png';
}