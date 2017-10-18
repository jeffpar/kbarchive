---
layout: page
title: "Q160168: PRB: Can't Read Temporary Table Created Using # Sign in RDO"
permalink: kb/160/Q160168/
---

## Q160168: PRB: Can't Read Temporary Table Created Using # Sign in RDO

	Article: Q160168
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
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Remote Data Object (RDO) to create a temporary table with a single
	pound sign (#) in the SQL statement, it appears that the temporary table is not
	created in SQL server. When an attempt is made to open this table within the
	same connection, RDO returns a run-time error.
	
	CAUSE
	=====
	
	When an action query is prepared in RDO and passed to SQL server, a stored
	procedure is created. However, this stored procedure is dropped after it is
	executed. Therefore, temporary tables created within the action query are
	destroyed once that stored procedure ends.
	
	RESOLUTION
	==========
	
	To work around this behavior, create a global temporary object by using a double
	pound sign (##). For example:
	
	     rdoConn.Execute "Select * Into ##Temp1 From Authors"
	          Set rs = rdoConn.OpenResultset("Select * from ##Temp1")
	
	Another workaround is to create temporary tables by using stored procedures in
	SQL server. For implementation details, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q147938 RDO: Getting Data from Temp Tables Created by Stored Procedure
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton, Command1 to Form1.
	
	3. Paste the following code into the General Declarations section of Form1:
	
	           Private Sub Command1_Click()
	
	        Dim rdoEnv As rdoEnvironment
	        Dim rdoConn As rdoConnection
	        Dim strConn As String
	        Dim ps As rdoPreparedStatement
	
	        Set rdoEnv = rdoEngine.rdoEnvironments(0)
	           rdoEnv.CursorDriver = rdUseOdbc
	
	           '***You need to change the SERVER, UID, and PWD parameters here.
	        strConn = "driver={SQL Server};server=myserver;" & _
	        "database=pubs;uid=sa;pwd="
	           Set rdoConn = rdoEnv.OpenConnection( _
	             dsName:="", _
	             Prompt:=rdDriverNoPrompt, _
	             ReadOnly:=False, _
	             Connect:=strConn)
	
	        rdoConn.Execute "Select * into #Temp1 From Authors"
	             Set rs = rdoConn.OpenResultset("Select * from #Temp1")
	             Do Until rs.EOF
	                Debug.Print rs.rdoColumns(0) & ", " & rs.rdoColumns(1)
	                rs.MoveNext
	             Loop
	             rs.Close
	             rdoConn.Close
	             rdoEnv.Close
	
	           End Sub
	
	4. Make sure you have an appropriate ODBC data source, user ID, and password.
	  Start the program by pressing the F5 key.
	
	5. Click the Command1 button to execute the code. You will receive the following
	  error message indicating that table #Temp1 in SQL server cannot be found:
	
	  Run-time Error '400002':
	  S0002: [Microsoft][ODBC SQL Server Driver][SQL Server] Invalid object name
	  '#Temp1'.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Issue type        : kbprb
	
	=============================================================================
	
