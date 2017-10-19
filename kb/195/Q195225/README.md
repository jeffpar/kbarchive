---
layout: page
title: "Q195225: PRB: DAO Run-Time Error 3146 When Modifying SQLServer Data"
permalink: /kb/195/Q195225/
---

## Q195225: PRB: DAO Run-Time Error 3146 When Modifying SQLServer Data

	Article: Q195225
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbSQLServ kbVBp400 kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to delete or update a record in a SQL Server cursor, the delete
	or update operation succeeds, but the following error returns:
	
	  Run-time error 3146 "ODBC call failed".
	
	CAUSE
	=====
	
	This behavior occurs when SQL Server does not return a message indicating the
	number of rows returned by a statement. SQL Server does not return a message
	indicating the number of rows affected by a statement after the following
	commands have been executed on SQL Server:
	
	  sp_configure "user options", 512
	  SET NOCOUNT ON
	
	MORE INFORMATION
	================
	
	The SQL Server stored procedure, sp_configure, displays or changes global SQL
	Server configuration settings. EXECuting the sp_configure using the following
	syntax turns off the message returned at the end of each statement indicating
	the number of rows affected by the statement:
	
	  sp_configure "user options", 512
	
	EXECuting the following SQL Server command also turns off the message returned at
	the end of each statement indicating the number of rows affected by the
	statement:
	
	  SET NOCOUNT ON
	
	SET NOCOUNT ON also prevents SQL Server from sending DONE_IN_PROC messages to the
	client for each statement executed in a stored procedure.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start ISQL-W and run the following command to retrieve the current global SQL
	  Server user option configuration settings:
	
	  sp_configure 'user options'
	
	WARNING: The following code changes SQL Server global configuration settings and
	may impact triggers as well as stored procedures and should be executed with
	extreme caution.
	
	2. Start ISQL-W and run the following commands:
	
	     sp_configure 'user options',512
	     GO
	     RECONFIGURE
	     GO
	     SET NOCOUNT ON
	     GO
	
	3. Create a new Visual Basic Project, and add a reference to the Microsoft DAO
	  3.5 Object Library. Add three text boxes and two command buttons to Form1.
	
	4. Paste the following code into the form:
	
	     Dim wk As Workspace
	     Dim rs As Recordset
	     Dim cn As Connection
	
	     Private Sub Form_Load()
	     Dim strConnect As String
	     Set wk = DBEngine.CreateWorkspace("ODBCDirect", "", "", dbUseODBC)
	              strConnect = "ODBC;DATABASE=PUBS;UID=sa;PWD=;DSN=MY_DSN"
	     Set cn = wk.OpenConnection("Connect1", dbDriverNoPrompt, _
	              False, strConnect)
	     Set rs = cn.OpenRecordset("SELECT * FROM STORES", dbOpenDynamic, _
	              0, dbOptimistic)
	     rs.MoveFirst
	            Text1.Text = rs.Fields("STOR_ID")
	            Text2.Text = rs.Fields("STOR_NAME")
	            Text3.Text = rs.Fields("STOR_ADDRESS")
	         End Sub
	
	    Private Sub Form_Unload(Cancel As Integer)
	         rs.Close
	         cn.Close
	         wk.Close
	    End Sub
	
	    Private Sub Command1_Click()
	         rs.Edit
	         rs.Fields("STOR_NAME") = Text2.Text
	         rs.Fields("STOR_ADDRESS") = Text3.Text
	         rs.Update
	    End Sub
	
	    Private Sub Command2_Click()
	        Unload Me
	    End Sub
	
	5. Run the form and click Command Button 1. The following error message is
	  returned:
	
	  "Run-time error '3146': ODBC call failed".
	
	6. Restore the global SQL Server user option configuration settings to the
	  original values.
	
	REFERENCES
	==========
	
	Transact - SQL Reference Help; search on: "sp_configure"; "SET".
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by John R.
	Desch, Microsoft Corporation.
	
	
	Additional query words: kbcode kbdse
	
	======================================================================
	Keywords          : kbDAOsearch kbSQLServ kbVBp400 kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
