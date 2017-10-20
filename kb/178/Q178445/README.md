---
layout: page
title: "Q178445: PRB: Stored Procedure with Text (BLOB) Input Returns Null Output"
permalink: /kb/178/Q178445/
---

## Q178445: PRB: Stored Procedure with Text (BLOB) Input Returns Null Output

{% raw %}

	Article: Q178445
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a stored procedure has a input text parameter (known as BLOB, Binary Large
	Object), all the output parameters get set to Null by the SQL Server on the way
	back to the client.
	
	CAUSE
	=====
	
	This is a known issue with SQL Server driver.
	
	RESOLUTION
	==========
	
	Instead of using output parameters, prepare the returned information in a
	resultset.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Besides steps to reproduce the behavior, the following sample code provides a
	workaround by returning to the Visual Basic client the identity column of the
	newly-created record as a resultset. Test table and stored procedures are
	created in Pubs database.
	
	Command1 inserts a new record to table, BLOBTest, by passing the contents in
	Text1 as an input parameter to the stored procedure, InputBLOBTest, and returns
	the Identity column as an output parameter. The return value is shown in the
	debug window as Null. Command2 provides a workaround by executing a modified
	version of the original stored procedure, which passes back the identity column
	in a resultset.
	
	1. Start a new project in Visual Basic and choose "Standard EXE." Form1 is
	  created by default.
	
	2. From the Project menu, select References, and then place a check next to
	  Microsoft Remote Data Object 2.0.
	
	3. Add 2 CommandButtons, Command1 and Command2, to Form1.
	
	4. Add a TextBox, Text1, to Form1.
	
	5. Paste the following code in the General Declarations section of Form1:
	
	     Dim cn As New rdoConnection
	
	     Private Sub Command1_Click()
	        Dim qy As New rdoQuery
	        With qy
	           Set .ActiveConnection = cn
	           .SQL = "{? = CALL InputBLOBTest(?, ?, ?) }"
	        End With
	        qy(0).Direction = rdParamReturnValue
	        qy(1).Direction = rdParamInput
	        qy(2).Direction = rdParamInput
	        qy(3).Direction = rdParamOutput
	        qy(1) = Now
	        qy(2) = Text1.Text
	        qy.Execute
	        Debug.Print qy(3)
	     End Sub
	
	     Private Sub Command2_Click()
	        Dim strSQL As String
	        Dim rs As rdoResultset
	
	        strSQL = "{CALL InputBLOBTest2('" & Now & "','" & Text1.Text & "')}"
	        Set rs = cn.OpenResultset(strSQL)
	        Debug.Print rs(0)
	     End Sub
	
	     Private Sub Form_Load()
	
	        Dim strSQL As String
	
	        cn.CursorDriver = rdUseOdbc
	        cn.Connect = "Driver={SQL server};" _
	          &  "Server=MyServer;Database=Pubs;Uid=sa;Pwd="
	        cn.EstablishConnection rdDriverNoPrompt
	
	        On Error Resume Next
	        strSQL = "DROP TABLE dbo.BLOBTest"
	        cn.Execute strSQL, rdExecDirect
	        On Error GoTo 0
	
	        strSQL = "CREATE TABLE dbo.BLOBTest "
	        strSQL = strSQL & "(ID int IDENTITY NOT NULL PRIMARY KEY, "
	        strSQL = strSQL & "WhenEntered Varchar(30), Comment TEXT)"
	        cn.Execute strSQL, rdExecDirect
	
	        On Error Resume Next
	        strSQL = "DROP PROCEDURE dbo.InputBLOBTest"
	        cn.Execute strSQL, rdExecDirect
	        On Error GoTo 0
	
	        strSQL = "CREATE PROCEDURE dbo.InputBLOBTest "
	        strSQL = strSQL & "@WhenEntered Varchar(30), _
	        @Comment TEXT, @id Int OUTPUT
	        strSQL = strSQL & "AS Insert Into BLOBTest(WhenEntered, Comment) "
	        strSQL = strSQL & "Values(@WhenEntered, @Comment) "
	        strSQL = strSQL & "Select @id=@@Identity"
	        cn.Execute strSQL, rdExecDirect
	
	        On Error Resume Next
	        strSQL = "DROP PROCEDURE dbo.InputBLOBTest2"
	        cn.Execute strSQL, rdExecDirect
	        On Error GoTo 0
	
	        strSQL = "CREATE PROCEDURE dbo.InputBLOBTest2 "
	        strSQL = strSQL & "@WhenEntered Varchar(30), @Comment TEXT "
	        strSQL = strSQL & "AS Insert Into BLOBTest(WhenEntered, Comment) "
	        strSQL = strSQL & "Values(@WhenEntered, @Comment) "
	        strSQL = strSQL & "Select @@Identity"
	        cn.Execute strSQL, rdExecDirect
	
	        Command1.Caption = Command1.Caption & "(Repro)"
	        Command2.Caption = Command2.Caption & "(Workaround)"
	
	     End Sub
	
	     Private Sub Form_Unload(Cancel As Integer)
	        cn.Close
	     End Sub
	
	6. Note that you should change your Server, Uid, and Pwd parameters in the RDO
	  connection string.
	
	7. Start the program or press the F5 key. Look at immediate window for output.
	
	(c) Microsoft Corporation 1997. All Rights Reserved.
	Contributions by Adrian Chiang, Microsoft Corporation
	
	
	Additional query words: kbdse kbDSupport kbVBp kbVBp500 kbVBp600 kbNoKeyWord
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
