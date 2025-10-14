using System;
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("enter the number");
        int n = int.Parse(Console.ReadLine());
        int count = 0;
        while (n > 0)
        {
            if ((n%10) % 2 == 1) count++;
            n /= 10;
        }
        Console.WriteLine("the count of odd digits is " + count);
    }
}
