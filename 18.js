using System;
delegate int Op(int x, int y);

class calculator
{
    public int add(int a, int b) => a + b;
    public int mul(int a, int b) => a * b;

}
class Program
{
    static void Main(string[] args)
    {
        calculator c = new calculator();
        Op op = c.add;
        Console.WriteLine($" addition is {op(1, 2)}");
        op = c.mul;
        Console.WriteLine($" multiplication is {op(2, 3)}");
        op = (a, b) => a - b;
        Console.WriteLine($" subtraction is {op(5, 3)}");
    }
}
