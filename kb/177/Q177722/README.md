---
layout: page
title: "Q177722: PRB: SQL Server Stores One-Character String with Empty String"
permalink: /kb/177/Q177722/
---

## Q177722: PRB: SQL Server Stores One-Character String with Empty String

	Article: Q177722
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual Basic 5.0 and higher using ODBC Direct, when a record is added/edited
	with a one-character string to a Text field of a SQL Server table, the
	one-character string is replaced with an empty string.
	
	RESOLUTION
	==========
	
	Instead of using AddNew or Edit method, use the SQL statement INSERT INTO or
	UPDATE directly.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Besides steps to reproduce the behavior, the following sample code provides a
	workaround by passing the SQL INSERT statement to add a new record. Command1
	demonstrates the problem. Command2 provides a workaround.
	
	Task One: Create Test Table and Stored Procedure
	------------------------------------------------
	
	For testing purpose, table TestTbl, is created in the Pubs database. To create a
	table in SQL Server, select the Pubs database, place the following Create Table
	T-SQL in the SQL window of ISQL/W and execute it:
	
	        CREATE TABLE TestTbl
	               (ID VarChar(20), Comment Text NULL)
	        CREATE UNIQUE INDEX IDIndex ON TestTbl(ID)
	
	Task Two: Build the Visual Basic Code
	-------------------------------------
	
	1. Start a new project in Visual Basic and choose "Standard EXE". Form1 is
	  created by default.
	
	2. From the Project menu, select References, and then place a check next to
	  Microsoft DAO 3.5 Object Library.
	
	3. Add 2 CommandButtons, Command1, and Command2, to Form1.
	
	4. Paste the following code in the General Declarations section of Form1:
	
	     Option Explicit
	     Dim wk As Workspace
	     Dim cn As Connection
	     Dim rs As Recordset
	
	     Sub command1_Click()
	        rs.AddNew
	        rs("ID") = Now
	        rs("Comment") = "Z"
	        rs.Update
	        rs.Move 0
	        rs.Bookmark = rs.LastModified
	        Debug.Print "IsEmpty() Returns: " & IsEmpty(rs("Comment"))
	        Debug.Print rs("Comment")
	     End Sub
	
	     Private Sub Command2_Click()
	        Dim strSQL As String
	        strSQL = "Insert Into TestTbl(ID, Comment) _
	        Values('" & Now & "', 'Z')"
	        cn.Execute strSQL, dbExecDirect
	        rs.Requery
	        rs.MoveLast
	        Debug.Print "IsEmpty() Returns: " & IsEmpty(rs("Comment"))
	        Debug.Print rs("Comment")
	     End Sub
	
	     Private Sub Form_Load()
	        Dim strConnect As String
	        Set wk = CreateWorkspace("MyWrk", "", "", dbUseODBC)
	        strConnect = "ODBC;DRIVER={SQL Server}; _
	        SERVER=MyServer;DATABASE=pubs;UID=sa;PWD=;"
	        Set cn = wk.OpenConnection("", dbDriverNoPrompt, True, strConnect)
	        Set rs = cn.OpenRecordset _
	        ("Select ID, Comment From TestTbl", dbOpenDynaset, , 3)
	     End Sub
	
	     Private Sub Form_Unload(Cancel As Integer)
	        rs.Close
	        cn.Close
	     End Sub
	
	5. Note that you should change the SERVER, UID, and PWD parameters in the
	  connection string.
	
	6. Start the program or press the F5 key.
	
	Additional query words: sqlserver odbcdirect kbODBC kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
