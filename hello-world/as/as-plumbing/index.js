import { greet, greetUser } from './hello.js';

export function greetWorld() {
    const worldGreeting = greet();
    console.log(worldGreeting);

    document.getElementById('world-greeting').innerHTML = worldGreeting;
}

export function greetTheUser() {
    const name = document.getElementById('name').value;
    const userGreeting = greetUser(name);

    document.getElementById('user-greeting').innerHTML = userGreeting;
}