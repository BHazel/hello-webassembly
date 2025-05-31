using System.Runtime.InteropServices.JavaScript;

namespace BWHazel.HelloWebAssembly.Calculator;

public partial class Calculator
{
    [JSExport]
    public static double Add(double num1, double num2) => num1 + num2;

    [JSExport]
    public static double Subtract(double num1, double num2) => num1 - num2;

    [JSExport]
    public static double Multiply(double num1, double num2) => num1 * num2;

    [JSExport]
    public static double Divide(double num1, double num2) => num1 / num2;
}
