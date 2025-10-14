using System;
class Vowels
{
    static void Main(string[] args)
    {
        Console.WriteLine("Enter a string:");
        string s = Console.ReadLine();
        s = s.ToLower();
        int count = 0;
        foreach(char c in s)
        {
            if(isVowel(c))
                count++;
        }
        Console.WriteLine(count);

    }
    static Boolean isVowel(char c)
    {
        return c=='a' ||c=='e'||c=='i'||c=='o'||c=='u';
    }
}
