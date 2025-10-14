using System;
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("enter a string you want to split:");
        string input = Console.ReadLine();
        Console.WriteLine("enter the separator character:");
        string separator = Console.ReadLine();
        string[] substrings = input.Split(separator);
        foreach (string s in substrings)
        {
            Console.WriteLine(s);
        }

    }
}
