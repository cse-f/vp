using System;
interface IEmployee
{
 void Work();
}
interface IManager : IEmployee
{
 void Manage();
}
class Program:IManager
{
 void IManager.Manage()
 {
 Console.WriteLine("Managing");
 }
 void IEmployee.Work()
 {
 Console.WriteLine("works");
 }
 static void Main(string[] args)
 {
 IManager m = new Program();
 m.Manage();
 m.Work();
 }
}
