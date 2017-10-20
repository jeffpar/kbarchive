---
layout: page
title: "Q183639: PRB: Oracle Cursors Remain Open After Calling VB rdoQuery"
permalink: /kb/183/Q183639/
---

## Q183639: PRB: Oracle Cursors Remain Open After Calling VB rdoQuery

{% raw %}

	Article: Q183639
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 4.0,5.0,6.0,Build 2.573.2927,Build 2.73.7283.03
	Operating System(s): 
	Keyword(s): kb3rdparty kbAPI kbOracle kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.0 Build 2.73.7283.03 
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.2927 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling the rdoQuery object in Visual Basic 5.0 or later or a Remote Data Object
	(RDO) PreparedStatement in Visual Basic 4.0 opens three Oracle cursors; two
	remain open after closing the rdoQuery or PreparedStatement object.
	
	These cursors should not be confused with cursors that return data. Oracle opens
	cursors internally, and they are defined as follows:
	
	  A cursor is a synonym for context area - a work area in memory where Oracle
	  stores the current SQL statement. For a query, the area in memory also
	  includes column headings and one row retrieved by the Select Statement.
	
	CAUSE
	=====
	
	Oracle provides an API to get the stored procedure information. This API is
	called, in the case of a stored procedure execution, to get the parameter
	information. The API generates two additional cursors, which are not released
	until the logoff request happens. These cursors do not increase when you attempt
	multiple executions.
	
	RESOLUTION
	==========
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Oracle opens a single cursor for an RDO Resultset and closes the cursor when the
	Resultset object is closed. However, the rdoQuery or rdoPreparedStatement leaves
	two cursors open as illustrated below.
	
	To test in Visual Basic 4.0, substitute the Visual Basic 4.0 PreparedStatement
	object for the rdoQuery object.
	
	It is assumed the reader knows how to check for open cursors via Oracle
	Administrator utilities.
	
	This application calls a stored procedure that accepts a numeric input parameter
	and returns the value divided in half as an output parameter. Calling any stored
	procedure should produce similar results. The script for the stored procedure
	called by this project is as follows:
	
	     Create Or Replace Procedure NoTable
	     (inNum IN NUMBER, outNUM OUT NUMBER)
	     IS
	     BEGIN
	        outNUM := inNUM/2;
	     END;
	     / 
	
	Steps to Reproduce Behavior
	---------------------------
	
	After the stored procedure is created, follow these steps:
	
	1. Open a new project in Visual Basic. Form1 is created by default.
	
	2. Place a command button on the new Form.
	
	3. On the Project menu, click References, and select Microsoft Remote Data
	  Object 2.0.
	
	4. Place the following code in the General Declarations section of Form1. You
	  will need to alter the database connection information in the strCon String:
	
	        '
	           Dim strSql As String
	           Dim strError As String
	           Dim En As rdoEnvironment
	           Dim Qr As rdoQuery
	           Dim Cn As rdoConnection
	           Dim Rs As rdoResultset
	           Dim strCon, UserID As String
	
	           Private Sub Command1_Click()
	
	              strCon = "DSN=MyOracle;UID=MyUID;PWD=MyPassword;"
	              strSql = "{call NoTable(?,?)}"
	
	              Set En = rdoEnvironments(0)
	              En.CursorDriver = rdUseClientBatch
	              Set Cn = En.OpenConnection("", rdDriverNoPrompt, _
	              False, strCon)
	
	           'Pause the program to check on number of open cursors.
	           'Should be 0 (zero) at this point
	              MsgBox "Check Open Cursors"
	
	              Set Qr = Cn.CreateQuery("", strSql)
	
	              Qr.rdoParameters(0).Value = 10
	              Qr.Execute
	
	           'Pause the program to check on number of open cursors.
	           'Should be three at this point.
	              MsgBox "Check Open Cursors"
	
	              Debug.Print "The Output is " & Qr(1)
	              Qr.Close
	
	              'Should be two open cursors at this point.
	              MsgBox "DONE"
	
	           End Sub
	
	NOTE: Comments in the above code show at what point in the code you should
	examine the number of open Oracle cursors.
	
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Ron Nelson, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbAPI kbOracle kbVBp kbVBp400 kbVBp500 kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbODBCSearch kbVB500 kbVB600 kbVB400Search kbVB400 kbODBCOracle273728303 kbODBCOracle25732927 kbODBCOracle200Search kbODBCOracle250Search
	Version           : :4.0,5.0,6.0,Build 2.573.2927,Build 2.73.7283.03
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
