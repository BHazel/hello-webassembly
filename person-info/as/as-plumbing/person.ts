enum Gender {
    Female = 0,
    Male = 1
}

class Person {
    static currentYear: i32 = 2025;

    name: string;
    birthYear: i32;
    gender: Gender;

    constructor(name: string, birthYear: i32, gender: Gender) {
        this.name = name;
        this.birthYear = birthYear;
        this.gender = gender;
    }

    myAge(): i32 {
        return Person.currentYear - this.birthYear;
    }

    myGender(): string {
        return this.gender > 0 ? 'male' : 'female';
    }

    whoAmI(): string {
        return `I am ${this.name}, ${this.myGender()}, and I am ${this.myAge()} years old!`;
    }
}

export function whoIs(name: string, birthYear: i32, gender: i32): string {
    let genderValue: Gender;
    switch (gender) {
        case 0:
            genderValue = Gender.Female;
            break;
        case 1:
            genderValue = Gender.Male;
            break;
        default:
            throw new Error("Gender is not supported.");
    }

    const person = new Person(name, birthYear, genderValue);
    return person.whoAmI();
}