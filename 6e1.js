create new project in microsoft visual studio 2022
choose the template as classLibrary(search at top) dont choose console app
name the solutions as task
name the project as MyPrivateLibrary(you have to name both)
if everything is done right you will see only class1.cs file
write the below

using System;
namespace MyPrivateLibrary
{
    public class Greeter
    {
        public string Greet(string name)
        {
            return $"Hello, {name}!";
        }
    }
}

now right click on the project(MyPrivateLibrary) not on the solution 
click build(this will create .dll file)
to check whether dll is created or not go to file explorer and locate the project 
D:\4-1\vp lab\Task15\MyPrivateLibrary\bin\Debug
in this debug folder .dll will be there

the first part is over ,now creating a consumer app
right click on the solution(Task) 
click on add
new project
now select the template console app
name the project as you wish
now in the solution we will have two projects consumer and privateassembly
in consumer app you will see program.cs
write the following

// ConsumerApp/Program.cs
using System;
using MyPrivateLibrary;

class Program
{
    static void Main()
    {
        Greeter greeter = new Greeter();
        Console.Write("Enter your name: ");
        string name = Console.ReadLine();
        Console.WriteLine(greeter.Greet(name));
    }
}

now right click on the consumer project 
Add>project reference>
  you will see myprivateassemby
check that

now we have created reference to that assembly

to run the project right click on consumer project and you will see SET AS STARTUP PROJECT
set the consumer project as startup project

now run the solultion at top


