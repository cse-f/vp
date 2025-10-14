create project>asp.net web applicaton>web form(not blank)

default.aspx
  
<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="q14._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div class="form-container" style="width:400px; margin:auto; padding:20px; border:1px solid #ccc; border-radius:10px;">
        <h2 style="text-align:center;">Registration Form</h2>

        <!-- Full Name -->
        <div class="form-control" style="margin-bottom:10px;">
            <label for="txtName">Full Name:</label>
            <asp:TextBox ID="txtName" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="rfvName" runat="server" ControlToValidate="txtName"
                ErrorMessage="Name is required" ForeColor="Red" Display="Dynamic" />
        </div>

        <!-- Email -->
        <div class="form-control" style="margin-bottom:10px;">
            <label for="txtEmail">Email:</label>
            <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
            <asp:RequiredFieldValidator ID="rfvEmail" runat="server" ControlToValidate="txtEmail"
                ErrorMessage="Email is required" ForeColor="Red" Display="Dynamic" />
            <asp:RegularExpressionValidator ID="revEmail" runat="server" ControlToValidate="txtEmail"
                ErrorMessage="Enter valid email address" ForeColor="Red" Display="Dynamic"
                ValidationExpression="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />
        </div>

        <!-- Password -->
        <div class="form-control" style="margin-bottom:10px;">
            <label for="txtPassword">Password:</label>
            <asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>
            <asp:RequiredFieldValidator ID="rfvPassword" runat="server" ControlToValidate="txtPassword"
                ErrorMessage="Password is required" ForeColor="Red" Display="Dynamic" />
        </div>

        <!-- Gender -->
        <div class="form-control" style="margin-bottom:10px;">
            <label>Gender:</label>
            <asp:RadioButtonList ID="rblGender" runat="server">
                <asp:ListItem>Male</asp:ListItem>
                <asp:ListItem>Female</asp:ListItem>
                <asp:ListItem>Other</asp:ListItem>
            </asp:RadioButtonList>
        </div>

        <!-- Country -->
        <div class="form-control" style="margin-bottom:10px;">
            <label>Country:</label>
            <asp:DropDownList ID="ddlCountry" runat="server">
                <asp:ListItem>Select</asp:ListItem>
                <asp:ListItem>India</asp:ListItem>
                <asp:ListItem>USA</asp:ListItem>
                <asp:ListItem>UK</asp:ListItem>
                <asp:ListItem>Canada</asp:ListItem>
            </asp:DropDownList>
        </div>

        <!-- Terms & Conditions -->
        <div class="form-control" style="margin-bottom:10px;">
            <asp:CheckBox ID="chkAgree" runat="server" Text="I agree to the Terms and Conditions" />
        </div>

        <!-- Register Button -->
        <div class="form-control" style="text-align:center; margin-bottom:10px;">
            <asp:Button ID="btnRegister" runat="server" Text="Register" OnClick="btnRegister_Click" />
        </div>

        <!-- Message -->
        <div class="form-control" style="text-align:center;">
            <asp:Label ID="lblMessage" runat="server" ForeColor="Green"></asp:Label>
        </div>
    </div>

</asp:Content>

default.aspx.cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace q14
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void btnRegister_Click(object sender, EventArgs e)
        {
            if (!chkAgree.Checked)
            {
                lblMessage.ForeColor = System.Drawing.Color.Red;
                lblMessage.Text = "You must agree to the terms!";
                return;
            }

            string name = txtName.Text;
            string email = txtEmail.Text;
            string gender = rblGender.SelectedValue;
            string country = ddlCountry.SelectedValue;

            lblMessage.ForeColor = System.Drawing.Color.Green;
            lblMessage.Text = $"Registration successful!<br/>Welcome, {name} ({gender}) from {country}.";
        }
    }

}

