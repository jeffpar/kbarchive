---
layout: page
title: "Q226490: BUG: Optional Parameters Generate  Error with Data Environment"
permalink: /kb/226/Q226490/
---

## Q226490: BUG: Optional Parameters Generate  Error with Data Environment

	Article: Q226490
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDatabase kbStoredProc kbVBp kbVBp600bug kbDataEnv kbGrpDSVBDB
	Last Modified: 25-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you process a query based on stored procedures with optional parameters
	within the DataEnvironment designer, you get the following Compiler error:
	
	  Argument not optional
	
	The Required option of the stored procedure's parameter within the Parameters tab
	of the Data Environment Designer doesn't seem to have an effect in this case.
	Even if you set the Required option to be False, the same error occurs.
	
	CAUSE
	=====
	
	The Data Environment uses Call syntax to execute stored procedures as follows:
	
	         cmd.CommandText = "CALL TestProc(?)"
	         cmd.CommandType = adCmdText
	
	If you don't pass a value for the parameter in the above Call syntax, you get an
	error.
	
	RESOLUTION
	==========
	
	To work around the behavior, the application developer needs to add a function
	to call the procedure dynamically as follows:
	
	Building a private function in a Form module to call the procedure programmatically::
	
	1. Follow steps 1 through 3 in the MORE INFORMATION section below to create the
	  Data Environment.
	
	2. Add a TextBox (Text1) and a command button (Command1) to Form1. The TextBox
	  would be used to get the value of the optional parameter.
	
	3. Place the following code in the General Declarations of Form1:
	
	     Private Sub Command1_Click()
	
	     Dim rs As New ADODB.Recordset
	     Dim DE As New DataEnvironment1
	
	     DE.Connection1.Open , "sa"
	     Select Case Text1.Text
	         Case ""
	            Set rs = OptionalParamFunc
	         Case Is <> ""
	            Set rs = OptionalParamFunc(Text1.Text)
	      End Select
	      MsgBox "Number of records: " & rs.RecordCount, , "Test Output"
	      rs.Close
	      DE.Connection1.Close
	      Set DE = Nothing
	      End Sub
	
	     Private Function OptionalParamFunc(Optional ID As Variant) As                                                      ADODB.Recordset
	
	        Dim sExecProc As String
	        If IsMissing(ID) Then
	            sExecProc = "Exec TestProc "
	        Else
	            sExecProc = "Exec TestProc " & ID
	        End If
	        Set OptionalParamFunc = DE.Connection1.Execute(sExecProc)
	
	     End Function
	
	Build a Data Environment method that calls the procedure programmatically::
	
	1. Follow steps 1 to 3 in the MORE INFORMATION section below to create the Data
	  Environment.
	
	2. Add a TextBox (Text1) and a command button (Command1) to Form1.
	
	3. Place the following code in the general declaration of Form1:
	
	     
	     Private Sub Command1_Click()
	
	        Dim rs As New ADODB.Recordset
	        Dim DE As New DataEnvironment1
	
	        DE.Connection1.Open , "sa"
	
	        Select Case Text1.Text
	            Case ""
	                Set rs = DE.OptionalParamFunc
	            Case Is <> ""
	                Set rs = DE.OptionalParamFunc(Text1.Text)
	        End Select
	        MsgBox "Number of records: " & rs.RecordCount, , "Test Output"
	
	        rs.Close
	        DE.Connection1.Close
	        Set DE = Nothing
	
	     End Sub
	
	4. Place the following function in the code window of the Data Environment:
	
	  Public Function OptionalParamFunc(Optional ID As Variant) As ADODB.Recordset
	
	        Dim sExecProc As String
	
	        If IsMissing(ID) Then
	            sExecProc = "Exec TestProc "
	        Else
	            sExecProc = "Exec TestProc " & ID
	        End If
	        Set OptionalParamFunc = Me.Connection1.Execute(sExecProc)
	
	     End Function
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The Required option of the Data Environment Designer can only be used to build
	commands with hierarchical recordsets. Child commands should not have any
	Required parameter.
	
	Below is sample code that reproduces the above behavior. It uses the Pubs
	database in SQL Server.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Stored Procedure::
	
	  CREATE PROCEDURE TestProc
	         (@ID smallint = NULL)
	     AS
	     IF @ID = NULL
	        select * from jobs
	     ELSE
	        select * from jobs where job_id = @ID
	
	Create the Data Environment::
	
	1. Start a new data project in Visual Basic. Form1 is created by default. Remove
	  the Data report as it will not be used in this test.
	
	2. Connect your Data Environment to "Pubs" database on your SQL server.
	
	3. Right-click the Data Environment connection (Connection1), and then insert
	  the stored procedure "TestProc."
	
	4. Add a command button (Command1) to Form1.
	
	5. Place the following Visual Basic Code in the general declaration of Form1:
	
	     Private Sub Command1_Click()
	
	        Dim rs As New ADODB.Recordset
	        Dim DE As New DataEnvironment1
	
	        DE.Connection1.Open , "sa"
	
	        Set rs = DE.dbo_TestProc    '<-- Error always occur here
	
	        MsgBox "Number of records: " & rs.RecordCount, , "Test Output"
	
	        DE.Connection1.Close
	        Set DE = Nothing
	
	     End Sub
	
	6. Run the project and note the behavior.
	
	REFERENCES
	==========
	
	For additional information on related to topics, please refer to the following
	Knowledge Base article
	
	Q170371HOWTO: Implement Optional Parameter with UserConnection Designer
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Ammar Abuthuraya, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbDatabase kbStoredProc kbVBp kbVBp600bug kbDataEnv kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
