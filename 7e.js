create project>asp.net web application>web forms

note important::
in deafault.aspx.cs there will be a line like this
smtp.Credentials = new NetworkCredential(txtFrom.Text.Trim(), "replace with app password"); // Replace with App Password

here you need to replace with your app password
to get that-->login to your mail>manage your account>search app password>create new password>it will give you a password>replace it here

default.aspx

<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="q22._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <div style="width:400px; margin:auto; padding:20px; border:1px solid #ccc; border-radius:10px;">
        <h2 style="text-align:center;">Send Email Demo</h2>

        <!-- From -->
        <div class="form-control" style="margin-bottom:10px;">
            <label>From:</label>
            <asp:TextBox ID="txtFrom" runat="server" Text="your_email@gmail.com" Width="250px" />
        </div>

        <!-- To -->
        <div class="form-control" style="margin-bottom:10px;">
            <label>To:</label>
            <asp:TextBox ID="txtTo" runat="server" Width="250px" />
        </div>

        <!-- Subject -->
        <div class="form-control" style="margin-bottom:10px;">
            <label>Subject:</label>
            <asp:TextBox ID="txtSubject" runat="server" Width="250px" />
        </div>

        <!-- Message -->
        <div class="form-control" style="margin-bottom:10px;">
            <label>Message:</label>
            <asp:TextBox ID="txtBody" runat="server" TextMode="MultiLine" Rows="5" Width="250px" />
        </div>

        <!-- Send Button -->
        <div class="form-control" style="text-align:center; margin-bottom:10px;">
            <asp:Button ID="btnSend" runat="server" Text="Send Email" OnClick="btnSend_Click" />
        </div>

        <!-- Status Message -->
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
using System.Net;
using System.Net.Mail;

namespace q22
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void btnSend_Click(object sender, EventArgs e)
        {
            try
            {
                // Create the email message
                MailMessage mail = new MailMessage();
                mail.From = new MailAddress(txtFrom.Text.Trim());
                mail.To.Add(txtTo.Text.Trim());
                mail.Subject = txtSubject.Text.Trim();
                mail.Body = txtBody.Text.Trim();

                // Configure SMTP client
                SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587);
                smtp.Credentials = new NetworkCredential(txtFrom.Text.Trim(), "replace with app password"); // Replace with App Password
                smtp.EnableSsl = true;

                // Send the email
                smtp.Send(mail);

                lblMessage.ForeColor = System.Drawing.Color.Green;
                lblMessage.Text = "Email sent successfully!";
            }
            catch (Exception ex)
            {
                lblMessage.ForeColor = System.Drawing.Color.Red;
                lblMessage.Text = "Error: " + ex.Message;
            }
        }
    }
}
