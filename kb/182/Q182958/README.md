---
layout: page
title: "Q182958: PRB: RDO RowsAffected Property Does Not Return Correct Value"
permalink: kb/182/Q182958/
---

## Q182958: PRB: RDO RowsAffected Property Does Not Return Correct Value

	Article: Q182958
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The RowsAffected property of RDO does not return the correct number of rows
	affected when using a stored procedure. Instead the RowsAffected property
	returns a zero or 1.
	
	CAUSE
	=====
	
	This behavior occurs when using Microsoft SQL Server driver (SQLSRV32.DLL)
	version 3.xx. In earlier versions of the SQL Server driver, the RDO RowsAffected
	property correctly returned the numbers of rows that were affected by the stored
	procedure.
	
	RESOLUTION
	==========
	
	To work around the problem described below, it is necessary to return the
	@@ROWCOUNT value manually at the end of the stored procedure and change the
	Visual Basic code so that it captures this value. To do this in the code below,
	comment out the SQL = "{Call RowsAffectedTest}" line. Then uncomment both the
	line SQL = "{? = Call RowsAffectedTest}" and the last line of the code. Run the
	program again to see that the correct number of rows affected is returned by the
	stored procedure's return value.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce this problem you will first need to run the stored procedure given
	below against the pubs database. Once that has been completed, follow the steps
	under Visual Basic Code.
	
	Stored Procedure:
	
	1. Run the following stored procedure against the Pubs database in SQL Server:
	
	        DROP PROCEDURE RowsAffectedTest
	        go
	
	        CREATE PROCEDURE RowsAffectedTest
	
	        AS
	
	        UPDATE AUTHORS SET ZIP = '99998'
	        RETURN @@ROWCOUNT
	
	        go
	
	Visual Basic Code:
	
	1. Start a new Visual Basic Standard EXE Project. Form1 is created by default.
	  Add a reference to Microsoft Remote Data Object 2.0.
	
	2. Add a CommandButton to the default form.
	
	3. Add the following code to the CommandButton's click event. You will need to
	  modify the connect string here to point to your SQL Server:
	
	        Dim SQL As String
	        Dim cn As rdoConnection
	        Dim qd As rdoQuery
	        Dim numberchanged As Integer
	
	        Set cn = rdoEnvironments(0).OpenConnection( _
	        dsname:="", _
	        Prompt:=rdDriverNoPrompt, _
	        Connect:="driver={SQL " & _
	         "server};server=YourServerName;uid=sa;pwd=;database=pubs")
	
	        'Comment out this line when un-commenting the other
	        SQL = "{Call RowsAffectedTest}"
	
	        'Uncomment this line to get the return value
	        'SQL = "{? = Call RowsAffectedTest}"
	
	        Set qd = cn.CreateQuery("MyTest", SQL)
	
	        qd.Execute
	
	        Debug.Print "RDO RowsAffected Property Value: " & qd.RowsAffected
	
	        'Uncomment this line to see the returned value
	        'Debug.Print "Returned Value From SP: " & qd(0).Value
	
	4. Run the code and look at the RDO RowsAffected value. Note that it does not
	  return the correct value.
	
	Additional query words: kbrdo kbVBp400 kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbprb
	
	=============================================================================
	
