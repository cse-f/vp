using System;
using System.Text.RegularExpressions;
class Program
{
    static void Main(string[] args)
    {
        Console.Write("Enter email:");
        string mail = Console.ReadLine();
        string pattern = @"^[a-z A-Z 0-9 ._%+-]+@[a-z A-Z 0-9 .-]+.\[a-z A-Z]{2,}$";
        Regex reg = new Regex(pattern);
        Console.WriteLine(reg.IsMatch(mail) ? "valid" : "invalid");

    }
}
