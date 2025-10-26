Task 1:curl -k https://cse-f.github.io/vp/1e.js
        1. Demonstrate a Console Application program to validate Email-ID and username
        with 3 to 16 characters length and also can have all special characters using
        Regular Expressions.
        2. String Manipulation with the String Builder and String Classes: Demonstrate
        some basic string manipulation using methods of both StringBuilder and String
        classes.
Task 2:
        1. Working with callbacks and delegates in C#: Demonstrate the use of delegates,
        callbacks, and synchronous and asynchronous method invocation.
Task 3:
        1. Working with Interface Inheritance: Demonstrate the interface inheritance using
        explicit interface Implementation.
Task 4:
        Working with Inheritance:
        Employee Management System
        Tokyo Company wants to register the new employee to their data.
        Write an application which generates EmployeeID, UserID, EmailID, Salary
        Employee ID: It is the sequence of the employee in the organization.
        1. Employee Sequence should be in between 1-9999
        2. It should be always in 5 digits starting with 10000, if the employee sequence is 1
        then Employee ID should be 10001, if sequence is 101 then Employee ID should be
        10101
        User ID: It is similar to EmployeeID, but first 2 letters in the first name is prefixed in UPPERCASE
        Example: If firstname of the employee is Rajesh and Employee Id is 10101 then UserId is
        RA10101
        Email ID: UserID@Tokyo.com
        With effect from the academic year 2025-26
        90
        Salary: of the employee
        1. NetCompensation of the Employee is=No. Of Years of experience*1(1 represented
        for 1 LAKH)
        2. HRA is 10% of the salary
        3. Salary=NetCompensation+HRA
        Class Requirements:
        Person class:
        Member Name Type
        First Name String
        LastName String
        Gender String
        DOB DateTime
        Employee class:
        Member Name Type
        Department String
        Location String
        EmpSequence int
        YearsOfExperience int
        This class should have parameterised constructor with
        First name, last name, department, location, empseq, years Of Experience
        Methods to implement:
        Public string GenerateEmailID()
        Public double CalculateSalary()
        Registration class:
        Members
        Static in EmployeeID
        Static string UserID
        This class should have parameterised constructor with
        Firstname, lastname, empseq
        Methods to implement:
        Public void GenerateEmployeeID()
        Public void GenerateUserID()
        Inheritance requirement:
        Base class: Person
        Child class 1: Employee class inherits Person.
        Child class 2: Registration class inherits Employee
Task 5:
        1. Using Reflection in C#: Demonstrate how to gather information on various types
        included in any assembly by using the System.Reflection namespace and some
        main.NET base classes.
Task 6:
          Working with Assemblies:
          1. Demonstrate a console application by creating a Private Assembly and use it in different
          applications.
          2. Demonstrate how to Create a Public assembly and store it in GAC and use it in all
          applications.
                  (Use the following case study for Tasks 7 to 10)
                  ToDo Planner
                  XYZ Inc. is a leading office automation service provider. They want to develop an application
                  using which the users can plan and manage their ToDos. As a developer you need to develop a
                  console based application to manage the list of tasks. You need to define the implementation for
                  scheduling a task, postpone, prepone, set priority, task completion etc. You are provided with
                  the class and respective members description and you are supposed to implement them
                  accordingly.
                  Namespace: Planning App
                  Use List Generic Class to Implement this Application
                  The class and it's members descriptions provided below and you need to define them accordingly.
                  1. Define a class by the name, Task and define the following private fields inside the Task class.
                  2. TaskID as int
                  3. TaskDescription as string
                  4. TaskStartDate as Date Time
                  5. TaskEndDate as Date Time
                  6. TaskPriority as string
                  7. CompletionStatus as string
                  8. In the Task class define a parameterized constructor to initialize the private fields to assign
                  the parameter values accordingly. Within the parameterized constructor ensure that a unique
                  integer value is auto-generated and assigned to TaskID private field.
                  9. Define a class by the name, To Do Planner with the following specifications.
                  10. Define a generic list collection of type Task.
                  11. Define the below methods accordingly.
                  public bool AddTask(Task obj)
                  This method is to add a task to the tasks generic collection of type Task. If the parameter obj is
                  null, the method should return false, else the method should add the task details to tasks generic
                  collection and return true.
                  TaskPriority can be either high or low initially completion status can be pending
                  public bool DeleteTask(int intTaskID)
                  This method should delete a task based on the task ID provided. If the deletion successful return
                  true else return false, If no task exists with the given task ID, return false.
                  public bool Update TaskStatus(int intTaskID, string strStatus)
                  This method should update a particular task's status. If the task found and able to update the
                  CompletionStatus, return true. If the task is not found or unable to update the CompetionStatus
                  return false. Updated CompletionStatus can be either "Inprogress" or "Completed"
                  public Task GetTasks()
                  This method should return the list of tasks as an Array.
                  Use List Generic Concept to implementthisprogram
                  List<Task> task=new List<Task>
Task 7:
          1. Sending Mail with SmtpMail : Use a simple web form to demonstrate how to use the
          SmtpMail class in the .Net Framework.
Task 8:
          1. Using the System.NetWebClient to Retrieve or Upload Data: Demonstrate how to create
          windows form that can use HTTP to download and save a resource from a specified URI,
          upload a resource to a specified URI, or read and write data through a stream object.
          With effect from the academic year 2025-26
          92
Task 9:
          1. Working with ASP.NET Web Pages:
          Create the ASP.Net Web Application that accepts Name, Password, age, email id, and userid. All
          the information entry is mandatory. Password should be reconfirmed; age should be within 21-
          30. Email id should be valid. User id should have atleast a capital letter and digit as well as length
          should be between 7 and 20 characters. Use all Validation Controls.
Task 10:
          1. Working with LINQ:
          Create a table with given fields
          Field Name Type
          EmpNo Number
          EmpName Varchar
          EmpSal Number
          EmpJob Varchar
          EmpDeptNo Number
          For the given table design a web page to display the employee information from table to grid
          control. Use LINQ to ADO.NET
          Student Management System Application Development (For Tasks 11 to 14)
Task 11:
          1. Create Website Application for Student Management System with a master page which
          is linked to other web pages in the application.x
Task 12:
          1. Create 5 content pages and design it accordingly and use different Navigation controls to
          navigate between content pages.
Task 13:
          1. Use ADO.NET for storing and manipulating the data. Develop the necessary forms for the
          better user Interface.
Task 14:
          1. Convert the above application to a web application using ASP.NET and SQL Server. Use
          IIS to deploy the web application developed in ASP.NET.
