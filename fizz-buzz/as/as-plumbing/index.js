import { playFizzBuzzFor } from './fizz-buzz.js';

export function playFizzBuzz() {
    const count = document.getElementById('count').value;
    const isVerbose = document.getElementById('verbose').checked;

    const gameResults = playFizzBuzzFor(count, isVerbose);
    displayGameResults(gameResults);
}

function displayGameResults(gameResults) {
    const gameResultsFormatted = gameResults.replace(/,/g, "<br />");
    document.getElementById('results').innerHTML = gameResultsFormatted;
}