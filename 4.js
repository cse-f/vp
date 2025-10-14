using System;
class reverseNumber
{
    static void Main(string[] args)
    {   
        Console.WriteLine("Enter a number: ");
        int n = int.Parse(Console.ReadLine());
        int reverse = 0;
        while (n != 0)
        {
            reverse *= 10;
            reverse += n % 10;
            n /= 10;
        }
        Console.WriteLine("Reversed Number: " + reverse);
    }
}
