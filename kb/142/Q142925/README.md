---
layout: page
title: "Q142925: HOWTO: Cancel an Asynchronous Query--RDO"
permalink: kb/142/Q142925/
---

## Q142925: HOWTO: Cancel an Asynchronous Query--RDO

	Article: Q142925
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After executing an asynchronous query with the OpenResultset method, program
	control continues to the next line of code while the query is executing.
	
	Later in your code, you can decide to cancel the asynchronous query by using the
	Cancel method of the rdoResultset.
	
	MORE INFORMATION
	================
	
	Sample Program
	--------------
	
	This example assumes that you already have an ODBC database server available and
	that you have an SQL query that runs long enough to make a cancel operation
	practical. This example uses a "DSN-less" ODBC connection, so you do not need to
	set up a DSN with the ODBC Admin utility.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add two command buttons to Form1. Change the caption property of Command1 to
	  Begin and the caption property of Commmand2 to Cancel.
	
	3. Paste the following code into the General Declarations section of form1:
	
	        Option Explicit
	        Dim cn As rdoConnection
	        Dim en As rdoEnvironment
	        Dim rs As rdoResultset
	        Private Sub Form_Load()
	          Command1.Enabled = True
	          Command2.Enabled = False
	          'Establish connection.
	          Set en = rdoEngine.rdoEnvironments(0)
	          en.CursorDriver = rdUseOdbc
	          'This should be modified to connect to your database.
	          Dim cnStr As String
	          cnStr = "driver={SQL Server};server=mysvr;" & _
	            "database=pubs;uid=myuid;pwd=mypwd"
	          Set cn = en.OpenConnection(dsname:="", Prompt:=rdDriverNoPrompt, _
	             Connect:=cnStr)
	        End Sub
	
	        Private Sub Command1_Click()
	          Dim sql As String
	          'Change this to an SQL statement that takes at least a few
	          'seconds to finish, such as a Cartesian join or a text
	          'column search, i.e. Where textcolumn Like '*find this text*'.
	          sql = "Select title From Titles"
	          Command1.Enabled = False
	          Command2.Enabled = True
	          Set rs = cn.OpenResultset(Name:=sql, Type:=rdOpenStatic, _
	            Option:=rdAsyncEnable)
	          While rs.StillExecuting
	            DoEvents  ' Allow user to click on Cancel command button.
	          Wend
	          Command1.Enabled = True
	          Command2.Enabled = False
	        End Sub
	
	        Private Sub Command2_Click()
	          rs.Cancel
	        End Sub
	
	4. Note that you need to change your DRIVER, SERVER, DATABASE, UID, and PWD in
	  the OpenConnection function contained in the Form_Load event. You also need
	  to modify the SQL statement contained in the Command1_Click event to match
	  your own SQL data source and to be complex enough to make this example a
	  practical use of the cancel operation. A good example is a Cartesian join or
	  a text column search:
	
	        Select * from mytable Where textcolumn Like '*find this text*'
	
	5. Start the program or press the F5 key.
	
	6. You can then click the Begin Command button to start the query and the Cancel
	  Command button to cancel the currently running query while it is in
	  operation.
	
	REFERENCES
	==========
	
	(Hitchhiker's Guide to Visual Basic and SQL Server, Microsoft Press. ISBN:
	1-55615-906-4.).
	
	Additional query words: kbdse kbDSupport kbVBp kbVBp400 kbVBp600 kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
