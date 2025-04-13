import { playFizzBuzzFor } from './fizz-buzz.js';

export function playFizzBuzz() {
    const count = document.getElementById('count').value;

    const gameResults = playFizzBuzzFor(count);
    displayGameResults(gameResults);
}

function displayGameResults(gameResults) {
    const gameResultsFormatted = gameResults.replace(/,/g, "<br />");
    document.getElementById('results').innerHTML = gameResultsFormatted;
}