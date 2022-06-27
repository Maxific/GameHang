import { playAgain } from "./generateFunction.js";

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', playAgain);

playAgain();
