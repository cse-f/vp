using System;
class Palindrome
{
    static void Main(string[] args)
    {   
        Console.WriteLine("Enter a string:");
        string a = Console.ReadLine();
        string b = "";
        for (int i = a.Length - 1; i >= 0; i--) b += a[i];
        Console.WriteLine(a == b ? "YES" : "NO");

    }
}
