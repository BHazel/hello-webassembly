import { whoIs } from './person.js';

export function getPersonInfo() {
    const name = document.getElementById('name').value;
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const gender = parseInt(document.getElementById('gender').value);

    let personInfo = whoIs(name, birthYear, gender);

    document.getElementById('personInfo').innerHTML = personInfo;
}