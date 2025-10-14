using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter a number: ");
        int num = int.Parse(Console.ReadLine());

        int sum = 0;
        int original = num;

        while (num != 0)
        {
            sum += num%10;
            num = num / 10;
        }

        Console.WriteLine("Sum of digits: " + sum);
    }
}
