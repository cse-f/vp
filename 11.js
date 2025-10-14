using System;
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Enter a positive integer:");
        int n = int.Parse(Console.ReadLine());
        int smallest = 10;
        while (n > 0)
        {
            if (n % 10 < smallest) smallest = n % 10;
            n /= 10;
        }
        Console.WriteLine(smallest);
    }
}
