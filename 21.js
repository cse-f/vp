using System;
class Employee
{
    public string Name;
    public int id;
    public double salary;
    public void display()
    {
        Console.WriteLine("Name: " + Name);
        Console.WriteLine("ID: " + id);
        Console.WriteLine("Salary: " + salary);
    }
}
class FullTimeEmployee : Employee
{
    public double basic;
    public int days;
    public double hra;
    public double da;
    public FullTimeEmployee(string name, int id, double basic, int days, double hra, double da)
    {
        this.Name = name;
        this.id = id;
        this.basic = basic;
        this.days = days;
        hra = 0.4 * basic;
        da = 0.2 * basic;
        salary = (basic + hra + da) * days;
    }
}
class PartTimeEmployee : Employee
{
    public double wages;
    public int days;
    public PartTimeEmployee(string name,int id,double wages,int days)
    {
               this.Name = name;
        this.id = id;
        this.wages = wages;
        this.days = days;
        salary = wages * days;
    }

}
class Program
{
    static void Main(string[] args)
    {
        FullTimeEmployee fte = new FullTimeEmployee("John", 101, 500, 30,0,0);
        fte.display();
        PartTimeEmployee pte = new PartTimeEmployee("Jane", 102, 200, 20);
        pte.display();
    }
}
