create a project
select asp.net web application(template)
select webforms rather than blank application

default you will get these things
site.master
about.aspx
contact.aspx
default.aspx

change the content of about.aspx,contact.aspx with your own html

change the site.master to below

<%@ Master Language="C#" AutoEventWireup="true" CodeBehind="Site.master.cs" Inherits="q12.SiteMaster" %>
<!DOCTYPE html>
<html>
<head runat="server">
    <title>College Information</title>
</head>
<body>
    <form id="form1" runat="server">
        <div style="text-align:center; background-color:lightgray; padding:10px;">
            <h1>ABC College</h1>
            <a href="/">Home</a> 
            <a href="About.aspx">About</a> 
            <a href="Contact.aspx">Contact</a>
        </div>
        <hr />
        <asp:ContentPlaceHolder ID="MainContent" runat="server" />
        <hr />
        <div style="text-align:center;">© 2025 ABC College</div>
    </form>
</body>
</html>

change the default.aspx to the below
  
<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="q12._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <main>
        <h2>Welcome to ABC College</h2>
        <p>Our college offers undergraduate and postgraduate courses in Engineering, Arts, and Science.</p>
    </main>

</asp:Content>



ch
