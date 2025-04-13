class FizzBuzz {
  static defaultCount: i32 = 30;
  static defaultFizz: i32 = 3;
  static defaultBuzz: i32 = 5;

  static fizzString: string = "Fizz";
  static buzzString: string = "Buzz";
  static fizzBuzzString: string = "Fizz Buzz";

  count: i32 = FizzBuzz.defaultCount;
  fizz: i32 = FizzBuzz.defaultFizz;
  buzz: i32 = FizzBuzz.defaultBuzz;

  constructor(count?: i32, fizz?: i32, buzz?: i32) {
    this.count = count ? count : FizzBuzz.defaultCount
    this.fizz = fizz ? fizz : FizzBuzz.defaultFizz;
    this.buzz = buzz ? buzz : FizzBuzz.defaultBuzz;
  }

  is(value: i32, divisor: i32): i32 {
    return value % divisor == 0 ? 1 : 0;
  }

  whatIs(value: i32): string {
    const isFizz = this.is(value, 3);
    const isBuzz = this.is(value, 5);

    if (isFizz && isBuzz) {
      return FizzBuzz.fizzBuzzString;
    } else if (isFizz) {
      return FizzBuzz.fizzString;
    } else if (isBuzz) {
      return FizzBuzz.buzzString;
    }

    return value.toString();
  }

  play(count: i32): string {
    let results: Array<string> = new Array<string>(count);
    for (let i: i32 = 1; i <= count; i++) {
      const result: string = this.whatIs(i);
      results[i - 1] = result;
    }

    return results.join(",");
  }
}

export function playFizzBuzzFor(
  count: i32 = FizzBuzz.defaultCount,
  fizz: i32 = FizzBuzz.defaultFizz,
  buzz: i32 = FizzBuzz.defaultBuzz): string {
  const fizzBuzz = new FizzBuzz(count, fizz, buzz);
  return fizzBuzz.play(count);
}