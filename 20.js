step 1:download microsoft sql server 2019 express edition
step 2:check whether server is running or not
step 3:create a new project with asp.net web application(template) and with blank
step 4:click view>server Explorer
step 5:you will be opened server explorer on the left side
        right click on data connections>create connection>select microsoft sql server>inside name enter .\SQLEXPRESS and select ok
step 5.1:after adding new connection,right click on it and open query,create a table employee and insert some value..
        
                CREATE TABLE Employees (
                    ID INT PRIMARY KEY,
                    Name NVARCHAR(50)
                );
                
                INSERT INTO Employees (ID, Name) VALUES (2, 'Priya');
                INSERT INTO Employees (ID, Name) VALUES (3, 'Ravi');

step 6:on right side on project name right click>add>new item>webform
step 7:you will be opened webform at bottom select design
step 8:select view at top>toolbox now toolbox will be opened
      drag and drop gridview(inside data inside toolbox) into the design of webform
step 8:at top search>search for linq>you will get "install linq tools" install the tools
step 9:after installing right click on project name>add>new item>search for linq(you will get "linq to sql classes" >add this
step 10:now at left open server explorer..and drag and drop the employee table into dataclasses1.dbml(this is added in before step)..
step 11:open webform1.aspx.cs and add the following

using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
              protected void Page_Load(object sender, EventArgs e)
              {
                  if (!IsPostBack)
                  {
                      ShowEmployeeData();
                  }
      
              }
      
              private void ShowEmployeeData()
              {
                  string connString = ConfigurationManager.ConnectionStrings["DataSourceConnectionString"].ConnectionString;
      
                  DataClasses1DataContext db = new DataClasses1DataContext(connString);
                  var empDetails = from emp in db.Employees
                                   select emp;
                  GridView1.DataSource = empDetails;
                  GridView1.DataBind();

                }

make sure the table names math

step 12:run the program...
