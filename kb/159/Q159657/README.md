---
layout: page
title: "Q159657: HOWTO: Capture the Parameters from an SQL Procedure with RDO"
permalink: /kb/159/Q159657/
---

## Q159657: HOWTO: Capture the Parameters from an SQL Procedure with RDO

	Article: Q159657
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
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to capture the output parameters from an SQL
	procedure.
	
	An rdoParameter object represents a parameter associated with an
	rdoPreparedStatement object. You use the Direction property of the rdoParameter
	object to determine whether the parameter is used for input, output, both, or as
	a return value from the stored procedure.
	
	MORE INFORMATION
	================
	
	Sample Program
	--------------
	
	Step 1: Create the Stored Procedure
	-----------------------------------
	
	1. Open the SQL Server 6.5 ISQL utility and change the default database to Pubs.
	
	2. Paste the following code in the Query window:
	
	        create procedure test
	        @result1 integer output, @result2 integer output
	        as
	        select @result1 = 100
	        select @result2 = 200
	
	3. Click Execute Query or press CTRL+E to execute the Transact-SQL code.
	
	4. The following confirmation message appears:
	
	  "This command did not return data, and it did not return any rows"
	
	  This indicates that the Transact-SQL code created the stored procedure
	  correctly.
	
	Step 2: Create the Visual Basic Code
	------------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton(Command1) to Form1.
	
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
	
	              Set ps = rdoConn.CreatePreparedStatement _
	                ("", "{Call test(?,?)}")
	        ps.Type = 2
	           ps.rdoParameters(0).Direction = rdParamOutput
	           ps.rdoParameters(1).Direction = rdParamOutput
	           ps.Execute
	           Debug.Print ps.rdoParameters(0).Value, ps.rdoParameters(1).Value
	        rdoConn.Close
	           rdoEnv.Close
	          End Sub
	
	4. Press the F5 key to start the program.
	
	5. Click the Command1 button to execute the code and display the output
	  parameter in the debug window.
	
	Additional query words: kbVBp400 kbVBp600 kbdse kbDSupport kbVBp kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
