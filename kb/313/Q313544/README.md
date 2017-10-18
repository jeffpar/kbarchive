---
layout: page
title: "Q313544: BUG: Incorrect Number for Affected Rows When You Run Stored Proc"
permalink: kb/313/Q313544/
---

## Q313544: BUG: Incorrect Number for Affected Rows When You Run Stored Proc

	Article: Q313544
	Product(s): Open Database Connectivity (ODBC)
	Version(s): Build 2.573.7713.2
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB kbDSupport
	Last Modified: 24-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.7 Build 2.573.7713.2 
	- Microsoft Visual Studio.NET (2002), Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a stored procedure that inserts, updates, or deletes, you receive
	an incorrect number (-1) for the number of rows that are affected.
	
	This problem also occurs in Microsoft Visual Basic 6.0 applications that use the
	Microsoft ODBC for Oracle driver.
	
	
	RESOLUTION
	==========
	
	To work around this problem, use the OLE DB managed provider with Microsoft OLE
	DB Provider for Oracle.
	
	For Visual Basic 6.0 applications that use the ODBC for Oracle driver, use
	Microsoft ActiveX Data Objects (ADO) with Microsoft OLE DB Provider for Oracle.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Oracle SQL*Plus, create the following table:
	
	  Create table TestProc(ID number(2,0), Col1 Char(50));
	  insert into Testproc values(1, 'Row1');
	  insert into testproc values(2, 'Row2');
	
	2. In SQL*Plus, create the following stored procedure:
	
	  create procedure testprocproc as 
	  begin
	    Update testproc set col1 = 'Row1Updated' where col1 = 'Row1';
	  end;
	
	3. If you have not already done so, download and install the ODBC .NET managed
	  provider from the following Microsoft Web site:
	
	  http://www.microsoft.com/data/
	
	4. Start Microsoft Visual Studio .NET, and then create a new Windows Application
	  project in Visual Basic .NET.
	
	5. Add a reference to the System.Data.Odbc namespace in the project.
	
	6. Add the following statements to the top of the Code window:
	
	  Imports System.Data.Odbc
	  Imports System.Data.OleDb
	
	7. Drag two Button controls from the toolbox, and then drop these controls onto
	  the default form.
	
	8. Add the following code after the "Windows Form Designer Generated Code"
	  section:
	
	  Private Sub Button1_Click(ByVal sender As System.Object, _
	  ByVal e As System.EventArgs) Handles Button1.Click
	          Dim Mycon As New Odbc.OdbcConnection("Driver={Microsoft ODBC For Oracle};" & _
	                                               "Server=OracleServer;UID=MyUserID;PWD=MyPwd")
	          Dim Mycmd As New Odbc.OdbcCommand("{Call TestProcProc}")
	          Dim x As Integer
	
	          Mycon.Open()
	          Mycmd.Connection = Mycon
	          x = Mycmd.ExecuteNonQuery
	          MessageBox.Show(x & " rows affected")
	          Mycon.Close()
	          Mycon = Nothing
	      End Sub
	
	      Private Sub Form1_Load(ByVal sender As System.Object, _
	      ByVal e As System.EventArgs) Handles MyBase.Load
	          Button1.Text = "ODBC"
	          Button2.Text = "OLEDB"
	      End Sub
	
	      Private Sub Button2_Click(ByVal sender As System.Object, _
	      ByVal e As System.EventArgs) Handles Button2.Click
	          Dim Mycon As New OleDbConnection("Provider=MSDAORA.1;Password=MyPwd;" & _
	                                           "User ID=MyUserID;Data Source=OracleServer")
	          Dim Mycmd As New OleDbCommand("{call TestProcProc}")
	          Dim x As Integer
	
	          Mycon.Open()
	          Mycmd.Connection = Mycon
	          x = Mycmd.ExecuteNonQuery
	          MessageBox.Show(x & " rows affected")
	          Mycon.Close()
	          Mycon = Nothing
	      End Sub
	
	9. Change the connection strings as necessary to connect your Oracle database.
	
	10. Press the F5 key to run the application.
	
	11. Click ODBC. Notice that -1 is returned instead of 1 for the updated row.
	
	12. Click OLEDB. Notice that 1 is returned as expected.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q309486 HOW TO: Execute SQL Parameterized Stored Procedures by Using the ODBC
	  .NET Provider and Visual Basic .NET
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: incorrect number is returned
	
	======================================================================
	Keywords          : kbGrpDSVBDB kbDSupport 
	Technology        : kbVSsearch kbAudDeveloper kbODBCSearch kbVSNETPro kbODBCOracle257377132 kbVSNETSearch
	Version           : :Build 2.573.7713.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
