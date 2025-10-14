using System;
using System.Text;

class Program
{
    static void Main()
    {
        // String class methods
        Console.WriteLine("=== String Class Methods ===");
        string str = "Hello World";

        Console.WriteLine("Original: " + str);
        Console.WriteLine("Length: " + str.Length);
        Console.WriteLine("Uppercase: " + str.ToUpper());
        Console.WriteLine("Lowercase: " + str.ToLower());
        Console.WriteLine("Substring: " + str.Substring(0, 5));
        Console.WriteLine("Replace: " + str.Replace("World", "C#"));
        Console.WriteLine("Contains 'Hello': " + str.Contains("Hello"));

        // StringBuilder class methods
        Console.WriteLine("\n=== StringBuilder Class Methods ===");
        StringBuilder sb = new StringBuilder("Hello");

        Console.WriteLine("Original: " + sb);
        sb.Append(" World");
        Console.WriteLine("After Append: " + sb);

        sb.Insert(5, " Beautiful");
        Console.WriteLine("After Insert: " + sb);

        sb.Remove(5, 10);
        Console.WriteLine("After Remove: " + sb);

        sb.Replace("World", "C#");
        Console.WriteLine("After Replace: " + sb);
    }
}
