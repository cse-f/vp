using System;
using System.Reflection;

public class Calculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }

    public int Subtract(int a, int b)
    {
        return a - b;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Calculator myCalc = new Calculator();
        InspectType(myCalc.GetType());

        Console.WriteLine("\n=========================================\n");

        InspectType(typeof(string));
    }

    public static void InspectType(Type type)
    {
        Console.WriteLine($"Inspecting the '{type.Name}' class...");
        Console.WriteLine("-------------------------------------");
        Console.WriteLine("Found the following methods:");

        MethodInfo[] methods = type.GetMethods(BindingFlags.Public | BindingFlags.Instance | BindingFlags.DeclaredOnly);

        foreach (MethodInfo method in methods)
        {
            Console.WriteLine($" -> {method.Name}");
        }
    }
}
