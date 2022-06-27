import { mistakes } from "./constants.js";

export function updateHangmanImg() {
  document.getElementById('man').src = './img/' + mistakes + '.png';
}

