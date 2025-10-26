using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Task2
{
    public delegate void OperationCallback(int result);

    class Program
    {
        static async Task Main(string[] args)
        {
            Console.WriteLine("=== Delegate and Callback Demo ===\n");

            // Synchronous example
            Console.WriteLine("Synchronous Example:");
            PerformOperation(5, 10, AddNumbers, ResultCallback);

            Console.WriteLine("\nAsynchronous Example:");
            // Asynchronous example using Task.Run
            OperationCallback del = new OperationCallback(ResultCallback);

            // Run asynchronously
            Task.Run(() => del(42));

            Console.WriteLine("Main method continues after async call...\n");

            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }

        static void PerformOperation(int a, int b, Func<int, int, int> operation, OperationCallback callback)
        {
            int result = operation(a, b);
            callback(result);
        }

        static int AddNumbers(int x, int y)
        {
            Console.WriteLine($"Adding {x} + {y}...");
            return x + y;
        }

        static void ResultCallback(int result)
        {
            Console.WriteLine($"Result: {result}");
        }
    }
}
