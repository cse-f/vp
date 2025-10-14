create a project in studio 2022
choose only Windows Forms App
after creation you will see a toolbox on left(if not shown at top select view and then toolbox)
inside tool box search for these below
label,button,text box,saveFileDialog 
and drag and drop these 4 into the form

past the below code into form1.cs
note------->>>>check for the component names inside the code and make sure they match with the names of label,button,textbox (the names are show in form1.designer.cs)
using System.Net;

namespace q13
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string url = textBox1.Text.Trim();

            if (string.IsNullOrEmpty(url))
            {
                MessageBox.Show("Please enter a valid URL.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            try
            {
                // Ask user where to save
                saveFileDialog1.FileName = Path.GetFileName(url);
                saveFileDialog1.Filter = "All Files|*.*";

                if (saveFileDialog1.ShowDialog() == DialogResult.OK)
                {
                    string savePath = saveFileDialog1.FileName;

                    using (WebClient client = new WebClient())
                    {
                        label2.Text = "Downloading...";
                        Application.DoEvents(); // update UI
                        client.DownloadFile(url, savePath);
                    }

                    label2.Text = "File downloaded successfully!";
                    MessageBox.Show("File saved at:\n" + savePath, "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
            }
            catch (Exception ex)
            {
                label2.Text = "Error: " + ex.Message;
                MessageBox.Show("Failed to download file.\n\n" + ex.Message, "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

    }
}
