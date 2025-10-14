using System;
class fibonacci
{
    static void Main(string[] args)
    {
        Console.WriteLine("Enter the number of terms:");
        int n = int.Parse(Console.ReadLine());
        int a = 0, b = 1, c;
        Console.WriteLine("Fibonacci Series:");
        for (int i = 0; i < n; i++)
        {
            Console.Write(a + " ");
            c = a + b;
            a = b;
            b = c;
        }
        Console.WriteLine();

    }
}
