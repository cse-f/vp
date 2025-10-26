using System;

namespace EmployeeManagement
{
    // ===== Base Class =====
    class Person
    {
        public string FirstName;
        public string LastName;
        public string Gender;
        public DateTime DOB;
    }

    // ===== Child Class 1: Employee =====
    class Employee : Person
    {
        public string Department;
        public string Location;
        public int EmpSequence;
        public int YearsOfExperience;
        public double Salary;

        public Employee(string first, string last, string dept, string loc, int seq, int exp)
        {
            FirstName = first;
            LastName = last;
            Department = dept;
            Location = loc;
            EmpSequence = seq;
            YearsOfExperience = exp;
        }

        public string GenerateEmailID(string userID)
        {
            return userID + "@Tokyo.com";
        }

        public double CalculateSalary()
        {
            double netComp = YearsOfExperience * 1_00_000; // 1 LAKH per year
            double hra = 0.1 * netComp;
            Salary = netComp + hra;
            return Salary;
        }
    }

    // ===== Child Class 2: Registration =====
    class Registration : Employee
    {
        public static int EmployeeID;
        public static string UserID;

        public Registration(string first, string last, string dept, string loc, int seq, int exp)
            : base(first, last, dept, loc, seq, exp)
        {
            GenerateEmployeeID();
            GenerateUserID();
        }

        public void GenerateEmployeeID()
        {
            // EmployeeID = 10000 + EmpSequence
            EmployeeID = 10000 + EmpSequence;
        }

        public void GenerateUserID()
        {
            UserID = FirstName.Substring(0, 2).ToUpper() + EmployeeID;
        }
    }

    // ===== Main Program =====
    class Program
    {
        static void Main()
        {
            // Example: Register a new employee
            Registration emp = new Registration("Rajesh", "Kumar", "IT", "Tokyo", 101, 5);

            Console.WriteLine("=== Employee Details ===");
            Console.WriteLine("Employee ID: " + Registration.EmployeeID);
            Console.WriteLine("User ID: " + Registration.UserID);
            Console.WriteLine("Email ID: " + emp.GenerateEmailID(Registration.UserID));
            Console.WriteLine("Salary: " + emp.CalculateSalary());
        }
    }
}
