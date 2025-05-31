import { dotnet } from './_framework/dotnet.js';

const { getAssemblyExports, getConfig } = await dotnet
    .withApplicationArguments('start')
    .create();

const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);

export function playFizzBuzz() {
    const count = parseInt(document.getElementById('count').value);
    const isVerbose = document.getElementById('verbose').checked;
    const wasmFunc = document.querySelector('input[name="wasm-func"]:checked').value;

    let fizzBuzzFunction;
    if (wasmFunc === 'number') {
        fizzBuzzFunction = playFizzBuzzPerNumber;
    } else if (wasmFunc === 'count') {
        fizzBuzzFunction = playFizrrzBuzzForCount;
    }

    const gameResults = fizzBuzzFunction(count, isVerbose);
    displayGameResults(gameResults);
}

function playFizzBuzzPerNumber(count, isVerbose) {
    let gameResults = [];
    for (let i = 1; i <= count; i++) {
        const currentResult = exports.BWHazel.HelloWebAssembly.FizzBuzz.FizzBuzzPlayer.PlayFor(i, isVerbose);
        gameResults.push(currentResult);
    }

    return gameResults;
}

function playFizrrzBuzzForCount(count, isVerbose) {
    let gameResults = exports.BWHazel.HelloWebAssembly.FizzBuzz.FizzBuzzPlayer.PlayForCount(count, isVerbose);
    return gameResults;
}

function displayGameResults(gameResults) {
    const gameResultsFormatted = gameResults.join('<br />');
    document.getElementById('results').innerHTML = gameResultsFormatted;
}