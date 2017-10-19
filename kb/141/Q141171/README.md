---
layout: page
title: "Q141171: PRB: RDO Forward-Only Cursor Doesn't Allow MoveLast"
permalink: /kb/141/Q141171/
---

## Q141171: PRB: RDO Forward-Only Cursor Doesn't Allow MoveLast

	Article: Q141171
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbenv kbDatabase kbODBC
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to use the MoveLast method on a forward-only remote data object
	recordset, you receive the error
	
	  "S1106: [Microsoft][ODBC SQL Server Driver]Fetch type out of range".
	
	Forward-only resultsets are the only type returned by the OpenResultset method.
	
	CAUSE
	=====
	
	Forward-only cursors only allow the use of MoveNext methods. This is a
	limitation of ODBC.
	
	RESOLUTION
	==========
	
	There is no direct way to implement an exact copy of MoveLast with code when
	using a resultset with a forward-only cursor. The following code loops through
	and touches all records in a resultset. When the loop finishes, the current
	record will be the EOF marker.
	
	     'The following code loops through all the records in a resultset
	     While Not rdoToMove.EOF
	
	        'do any processing here
	        rdoToMove.MoveNext
	     Wend
	
	To determine the number of records in a resultset, code a loop like the one above
	and increment a count variable inside the loop.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When RDO works with a forward-only resultset, it uses a call to the ODBC API
	function SQLExtendedFetch to obtain data. As one of its parameters, this
	function takes a value that specifies the type of fetch to be performed. ODBC
	specifies that when a resultset has a forward-only cursor, this fetch argument
	may only be SQL_FETCH_NEXT. If the argument is something besides this constant,
	ODBC returns 'S1106: Fetch type out of range,' indicating that the argument was
	invalid. For more information, see the reference listed in the References
	section below.
	
	Steps to Reproduce
	------------------
	
	1. Start Visual Basic.
	
	2. On the File menu, click New Project.
	
	3. Double-click the Command button icon in the Toolbox to create a command
	  button on the form.
	
	4. Insert the following code in the command button's Click event. Replace
	  strDSN, strConnect, and strSQL with the relevant values for your database.
	
	     Private Sub Command1_Click()
	               Dim ps As rdoPreparedStatement
	               Dim conn As rdoConnection
	               Dim strDSN As String
	               Dim strConnect As String
	               Dim strSQL As String
	
	               strDSN = "pubs"
	               strConnect = "uid=sa;pwd=;database=pubs"
	               strSQL = "Select * From Authors"
	
	               With rdoEnvironments(0)
	                   .CursorDriver = rdUseOdbc
	               Set conn = .OpenConnection _
	                 (strDSN, rdDriverNoPrompt, False, strConnect)
	               End With
	               Set ps = conn.CreatePreparedStatement("", strSQL)
	               Set rs = ps.OpenResultset(rdOpenForwardOnly)
	
	               rs.MoveLast      'this line causes the error
	
	     End Sub
	
	5. On the Run menu, click Start (ALT, R, S) or press the F5 key. The program
	  will stop when it reaches the rs.Movelast line, and give the error listed
	  above.
	
	REFERENCES
	==========
	
	Microsoft ODBC 2.0 Programmer's Reference and SDK Guide: SQLExtendedFetch
	function - return code S1106.
	
	Additional query words: 4.00 vb4win vb432
	
	======================================================================
	Keywords          : kbenv kbDatabase kbODBC 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : 4.00
	Issue type        : kbprb
	
	=============================================================================
	
