---
layout: page
title: "Q181715: PRB: RDO/Jet: Run-Time Error 40069; Client Cursor Error 11 or 12"
permalink: kb/181/Q181715/
---

## Q181715: PRB: RDO/Jet: Run-Time Error 40069; Client Cursor Error 11 or 12

	Article: Q181715
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
	
	When you run a SELECT statement against the Microsoft Jet ODBC driver using RDO
	and the client batch cursor engine, you receive one of the following two error
	messages:
	
	  Run-time error 40069
	  Client Cursor: 11 - No update tables are specified
	
	  -or-
	
	  Run-time error '40069':
	  Client Cursor: 12 - No key columns are specified for the update table
	
	CAUSE
	=====
	
	When using the client batch cursor engine, and opening a static resultset, you
	must use the same case as in the table when typing field names into the SELECT
	clause of the SQL statement. This applies to the primary key field and any BLOB
	(Binary Long Object) columns--LongVarChar and LongVarBinary.
	
	RESOLUTION
	==========
	
	Use one of the following methods to resolve this problem:
	
	- Type the field names using the same case as the field names in the ODBC
	  table.
	
	  -or-
	
	- After opening the recordset, manually specify the SourceTable property of the
	  problematic columns prior to doing any data access. Also, set the KeyColumn
	  property of the primary key field to True.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The client batch cursor engine needs to locate the source table name for the
	primary key field and any BLOB fields, because these fields are required when
	updating data and retrieving BLOB data.
	
	If the BLOB column names don't have the correct case, you will receive the error
	11 message.
	
	If only the primary key column has an incorrect case for the field name, you will
	receive the error 12 message.
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK.
	Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	1. In the ODBC 32-bit Administrator, in the Control Panel, add a DSN called
	  NWIND using the Microsoft Access ODBC driver.
	
	2. Open a new Standard EXE project in Microsoft Visual Basic 5.0.
	
	3. On the Project menu, click Reference, and check Microsoft Remote Data Object
	  2.0.
	
	4. Add a command button (Command1) to the default form (Form1).
	
	5. Add the following code:
	
	        Private Sub Command1_Click()
	        Dim cn As rdoConnection, rs As rdoResultset
	          rdoEngine.rdoDefaultCursorDriver = rdUseClientBatch
	          Set cn = rdoEngine(0).OpenConnection("NWIND", rdDriverComplete, _
	                   False, "")
	          Set rs = cn.OpenResultset( _
	                   "SELECT employeeid, notes, lastname FROM Employees", _
	                   rdOpenStatic, rdConcurRowVer, rdExecDirect)
	          Do While Not rs.EOF
	            Debug.Print rs!EmployeeID, rs!LastName, Len(rs!Notes), rs!Notes
	            rs.MoveNext
	          Loop
	          rs.Close
	          cn.Close
	        End Sub
	
	6. Run the code and note the error that appears on the Debug.Print line.
	
	7. Change notes to Notes in the SELECT clause and rerun the project.
	
	  Note that the Client Cursor error code will change from 11 to 12.
	
	8. Change employeeid to EmployeeID in the SELECT clause and rerun.
	
	  Note that the error goes away.
	
	To demonstrate the alternative workaround:
	
	1. Using the original code from step 5, add the following lines immediately
	  prior to the Do statement:
	
	        rs!EmployeeID.SourceTable = "Employees"
	        rs!EmployeeID.KeyColumn = True
	        rs!Notes.SourceTable = "Employees"
	
	The code should run without error.
	
	(c) Microsoft Corporation 1988, All Rights Reserved. Contributions by Malcolm
	Stewart, Microsoft Corporation
	
	
	Additional query words: upper lower kbRDO kbODBC kbVBp500 kbVBp600 kbdse kbDSupport 
	kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
