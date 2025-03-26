function getPersonInfo() {
    const genderEnum = [
        Module.gender.female,
        Module.gender.male
    ];
    
    const name = document.getElementById('name').value;
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const gender = genderEnum[parseInt(document.getElementById('gender').value)];

    let person = new Module.person(name, birthYear, gender);
    let personInfo = person.whoAmI();
    person.delete();

    document.getElementById('personInfo').innerHTML = personInfo;
}