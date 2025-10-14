using System;
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Enter a string:");
        string s = Console.ReadLine();
        Dictionary<char,int> count = new Dictionary<char, int>();
        foreach(char c in s)
        {
            if (count.ContainsKey(c)) count[c]++;
            else count[c] = 1;
        }
        int max = 0;
        char ans=' ';
        foreach(var kv in count)
        {
            if (kv.Value > max)
            {
                max = kv.Value;
                ans = kv.Key;
            }
        }
        Console.WriteLine(ans);
    }
}
