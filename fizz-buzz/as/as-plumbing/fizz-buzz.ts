class FizzBuzz {
  static defaultFizz: i32 = 3;
  static defaultBuzz: i32 = 5;

  fizz: i32 = FizzBuzz.defaultFizz;
  buzz: i32 = FizzBuzz.defaultBuzz;

  constructor(fizz?: i32, buzz?: i32) {
    this.fizz = fizz ? fizz : FizzBuzz.defaultFizz;
    this.buzz = buzz ? buzz : FizzBuzz.defaultBuzz;
  }

  is(value: i32, divisor: i32): bool {
    return value % divisor == 0;
  }

  whatIs(value: i32, isVerbose: bool): string {
    const isFizz = this.is(value, 3);
    const isBuzz = this.is(value, 5);

    let result: string = "";
    if (isFizz && isBuzz) {
      result = "Fizz Buzz";
    } else if (isFizz) {
      result = "Fizz";
    } else if (isBuzz) {
      result = "Buzz";
    } else {
      result = value.toString();
    }

    if (isVerbose) {
      console.log(`${value}, ${result}`);
    }

    return result;
  }

  play(count: i32, isVerbose: bool): string {
    let results: Array<string> = new Array<string>(count);
    for (let i: i32 = 1; i <= count; i++) {
      const result: string = this.whatIs(i, isVerbose);
      results[i - 1] = result;
    }

    return results.join(",");
  }
}

export function playFizzBuzzFor(count: i32, isVerbose: bool): string {
  const fizzBuzz = new FizzBuzz(FizzBuzz.defaultFizz, FizzBuzz.defaultBuzz);
  return fizzBuzz.play(count, isVerbose);
}