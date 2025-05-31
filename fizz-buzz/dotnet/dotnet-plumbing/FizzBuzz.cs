using System.Linq;
using System.Runtime.InteropServices.JavaScript;

namespace BWHazel.HelloWebAssembly.FizzBuzz;

public partial class FizzBuzz
{
    private const int DefaultFizz = 3;
    private const int DefaultBuzz = 5;

    [JSImport("globalThis.console.log")]
    private static partial void LogResult(string message);

    public FizzBuzz()
        : this(DefaultFizz, DefaultBuzz)
    {
    }

    public FizzBuzz(int fizz, int buzz)
    {
        this.Fizz = fizz;
        this.Buzz = buzz;
    }

    public int Fizz { get; set; } = DefaultFizz;
    public int Buzz { get; set; } = DefaultBuzz;

    public bool Is(int value, int divisor)
    {
        return value % divisor == 0;
    }

    public string WhatIs(int value, bool isVerbose)
    {
        bool isFizz = this.Is(value, this.Fizz);
        bool isBuzz = this.Is(value, this.Buzz);

        string result = string.Empty;
        if (isFizz && isBuzz)
        {
            result = "Fizz Buzz";
        }
        else if (isFizz)
        {
            result = "Fizz";
        }
        else if (isBuzz)
        {
            result = "Buzz";
        }
        else
        {
            result = value.ToString();
        }

        if (isVerbose)
        {
            LogResult($"{value}, {result}");
        }

        return result;
    }

    public string[] Play(int count, bool isVerbose)
    {
        string[] results = [.. Enumerable.Range(1, count).Select(i => this.WhatIs(i, isVerbose))];
        return results;
    }
}