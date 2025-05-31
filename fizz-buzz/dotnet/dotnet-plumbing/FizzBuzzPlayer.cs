using System.Runtime.InteropServices.JavaScript;

namespace BWHazel.HelloWebAssembly.FizzBuzz;

public static partial class FizzBuzzPlayer
{
    private static readonly FizzBuzz fizzBuzz = new();

    public static FizzBuzz FizzBuzz => fizzBuzz;

    [JSExport]
    public static string PlayFor(int number, bool isVerbose)
    {
        return FizzBuzz.WhatIs(number, isVerbose);
    }

    [JSExport]
    public static string[] PlayForCount(int count, bool isVerbose)
    {
        return FizzBuzz.Play(count, isVerbose);
    }
}