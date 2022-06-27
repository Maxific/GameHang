import { mistakes } from "./index.js";

export function updateHangmanImg() {
  document.getElementById('man').src = './img/' + mistakes + '.png';
}

