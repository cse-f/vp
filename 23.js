create a project with template asp.net
choose webforms rather than blank application

remove the default.aspx write the below
  
<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="q23._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <h2>Registration Form</h2>

    <asp:Label ID="lblEmail" runat="server" Text="Email:" />
    <asp:TextBox ID="txtEmail" runat="server" />
    <asp:RegularExpressionValidator 
        ID="revEmail" 
        runat="server" 
        ControlToValidate="txtEmail"
        ErrorMessage="Enter a valid email address"
        ForeColor="Red"
        ValidationExpression="^[\w\.-]+@[\w\.-]+\.\w{2,4}$" />
    <br /><br />

    <asp:Label ID="lblPhone" runat="server" Text="Phone Number:" />
    <asp:TextBox ID="txtPhone" runat="server" />
    <asp:RegularExpressionValidator 
        ID="revPhone" 
        runat="server" 
        ControlToValidate="txtPhone"
        ErrorMessage="Enter a valid 10-digit phone number"
        ForeColor="Red"
        ValidationExpression="^\d{10}$" />
    <br /><br />

    <asp:Button ID="btnSubmit" runat="server" Text="Register" OnClick="btnSubmit_Click" />
    <br /><br />

    <asp:Label ID="lblResult" runat="server" ForeColor="Green" />

</asp:Content>


and now in default.aspx.cs write this function inside it

protected void btnSubmit_Click(object sender, EventArgs e)
{
    if (Page.IsValid)
    {
        lblResult.Text = "Registration successful!";
    }
    else
    {
        lblResult.Text = "Please correct the highlighted errors.";
    }
}
