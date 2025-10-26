using System;
using System.Text;
using System.Text.RegularExpressions;

namespace Task1
{
    class Program
    {
        static void Main(string[] args)
        {
            // Call Question 1
            //Question1(); 

            // Call Question 2
            Question2();
        }

        // Question 1: Email-ID and Username Validation
        static void Question1()
        {
            Console.WriteLine("=== Question 1: Email and Username Validation ===");

            Console.Write("Enter Username: ");
            string username = Console.ReadLine();

            Console.Write("Enter Email: ");
            string email = Console.ReadLine();

            string usernamePattern = @"^.{3,16}$";
            string emailPattern = @"^[^@\s]+@[^@\s]+\.[^@\s]+$";

            bool isUsernameValid = Regex.IsMatch(username, usernamePattern);
            bool isEmailValid = Regex.IsMatch(email, emailPattern);

            Console.WriteLine($"Username Valid: {isUsernameValid}");
            Console.WriteLine($"Email Valid: {isEmailValid}");

            Console.ReadLine();
        }

        // Question 2: String Manipulation
        static void Question2()
        {
            Console.WriteLine("=== Question 2: String Manipulation ===");
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

            Console.ReadLine();
        }
    }
}
