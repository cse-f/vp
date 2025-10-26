using System;
using System.Threading;
using System.Threading.Tasks;

class Program
{
    delegate void MyDelegate(string msg);

    static void ShowMessage(string msg)
    {
        Console.WriteLine($"[{msg}] Starting...");
        Thread.Sleep(2000); // Simulate long task (2 sec)
        Console.WriteLine($"[{msg}] Finished!");
    }

    static async Task Main()
    {
        MyDelegate del = ShowMessage;

        Console.WriteLine("=== Synchronous Call ===");
        del("Sync Call 1");
        del("Sync Call 2");

        Console.WriteLine("\n=== Asynchronous Call ===");
        // Both run at same time — not blocking
        Task t1 = Task.Run(() => del("Async Call 1"));
        Task t2 = Task.Run(() => del("Async Call 2"));

        Console.WriteLine("Main thread still working...");
        await Task.WhenAll(t1, t2);  // Wait for async calls to finish

        Console.WriteLine("\nDone.");
    }
}
