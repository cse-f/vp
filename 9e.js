create web application(template) --> blank
add new form 

webform.aspx

﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="Task9_FieldsValidator.WebForm1" UnobtrusiveValidationMode="None"%>


<!DOCTYPE html>
<html>
<head runat="server">
    <title>Registration Form</title>
</head>
<body>
    <form id="form1" runat="server">
        <h2>User Registration</h2>

        Name: <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="rfvName" runat="server" 
            ControlToValidate="txtName" ErrorMessage="Name is required!" ForeColor="Red">*Error Invalid</asp:RequiredFieldValidator>
        <br /><br />

        Password: <asp:TextBox ID="txtPassword" TextMode="Password" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="rfvPass" runat="server" 
            ControlToValidate="txtPassword" ErrorMessage="Password is required!" ForeColor="Red">*Error Invalid</asp:RequiredFieldValidator>
        <br /><br />

        Confirm Password: <asp:TextBox ID="txtConfirm" TextMode="Password" runat="server"></asp:TextBox>
        <asp:CompareValidator ID="cvPass" runat="server"
            ControlToValidate="txtConfirm" ControlToCompare="txtPassword" ErrorMessage="Passwords must match!" ForeColor="Red">*Error Invalid</asp:CompareValidator>
        <br /><br />

        Age: <asp:TextBox ID="txtAge" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="rfvAge" runat="server" ControlToValidate="txtAge" ErrorMessage="Age required!" ForeColor="Red">*Error Invalid</asp:RequiredFieldValidator>
        <asp:RangeValidator ID="rvAge" runat="server" ControlToValidate="txtAge"
            MinimumValue="21" MaximumValue="30" Type="Integer" ErrorMessage="Age must be 21-30!" ForeColor="Red">*Error Invalid</asp:RangeValidator>
        <br /><br />

        Email: <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="rfvEmail" runat="server" ControlToValidate="txtEmail" ErrorMessage="Email required!" ForeColor="Red">*Error Invalid</asp:RequiredFieldValidator>
        <asp:RegularExpressionValidator ID="revEmail" runat="server" ControlToValidate="txtEmail"
            ValidationExpression="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            ErrorMessage="Invalid email!" ForeColor="Red">*Error Invalid</asp:RegularExpressionValidator>
        <br /><br />

        User ID: <asp:TextBox ID="txtUserID" runat="server"></asp:TextBox>
        <asp:RequiredFieldValidator ID="rfvUserID" runat="server" ControlToValidate="txtUserID" ErrorMessage="UserID required!" ForeColor="Red">*Error Invalid</asp:RequiredFieldValidator>
        <asp:RegularExpressionValidator ID="revUserID" runat="server" ControlToValidate="txtUserID"
            ValidationExpression="^(?=.*[A-Z])(?=.*\d).{7,20}$"
            ErrorMessage="UserID must have 1 capital, 1 digit & 7-20 chars" ForeColor="Red">*Error Invalid</asp:RegularExpressionValidator>
        <br /><br />

        <asp:Button ID="btnSubmit" runat="server" Text="Register" OnClick="btnSubmit_Click" />
        <br /><br />
        <asp:Label ID="lblMessage" runat="server" ForeColor="Green"></asp:Label>
    </form>
</body>
</html>


webform.aspx.cs

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Task9_FieldsValidator
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            if (Page.IsValid)
            {
                lblMessage.Text = "Registration Successful! Welcome, " + txtName.Text;
            }
        }
    }
}


