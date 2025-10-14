using System;
class primeCheck
{
    static void Main(string[] args)
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        bool isPrime = true;
        if (n <= 1) isPrime = false;
        else
        {
            for(int i = 2; i < Math.Sqrt(n); i++)
            {
                if(n%i==0)
                {
                    isPrime = false;
                    break;
                }
            }
        }
        Console.WriteLine(isPrime ? "Prime" : "Not Prime");
    }
}
