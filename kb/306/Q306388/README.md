---
layout: page
title: "Q306388: PRB: CursorType Returns adOpenStatic from Server-Side Recordset"
permalink: kb/306/Q306388/
---

## Q306388: PRB: CursorType Returns adOpenStatic from Server-Side Recordset

	Article: Q306388
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.6,2.6sp1,2.7,6.0,7.0,8.0,SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft SQL Server version 7.0 
	- ActiveX Data Objects (ADO), versions 2.6, 2.6sp1, 2.7 
	- Microsoft SQL Server 2000 (all editions), versions 8.0, SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you request a static, server-side cursor from a SQL stored procedure, you
	cannot use MovePrevious or MoveFirst to move backward through the recordset. The
	cursor exhibits the behavior of a forward-only cursor.
	
	NOTE: This problem only occurs if there are user-defined variables in the stored
	procedure or SQL commands such as SET NOCOUNT ON.
	
	After you run MovePrevious or MoveFirst, you receive the following error
	message:
	
	  Run-time error '-2147217884(80040e24)';
	  Rowset does not support fetching backward.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Data Source Name (DSN) named SQLPUBS that points to the SQL Server
	  Pubs database.
	
	2. In the SQL Server Enterprise Manager, modify the ByRoyalty stored procedure.
	  Add SET NOCOUNT ON immediately following the AS portion of the stored
	  procedure, and save the changes.
	
	  NOTE: This step is important to reproduce the problem.
	
	3. Create a new Visual Basic Standard EXE project.
	
	4. From the Project menu, click References, and then select the "Microsoft Data
	  Access Objects 2.x Library" check box.
	
	5. Paste the following code in the form load event:
	
	  Dim rs As ADODB.Recordset
	      Dim comm As ADODB.Command
	      Dim oCon As New ADODB.Connection
	      Dim prm As ADODB.Parameter
	      Dim StrOut As String
	          
	      StrOut = ""
	      oCon.Open "DSN=SQLPUBS;uid=sa;password=Password1;"
	      Set comm = New ADODB.Command
	      Set comm.ActiveConnection = oCon
	      comm.CommandText = "byroyalty"
	      Set prm = comm.CreateParameter("@percentage", adInteger, adParamInput, , 25)
	      comm.Parameters.Append prm
	      Set rs = New ADODB.Recordset
	      
	      'rs.CursorLocation = adUseClient
	      rs.CursorLocation = adUseServer
	        
	      rs.Open comm, , adOpenStatic, adLockBatchOptimistic
	     'rs.Open "Select * from authors", oCon, adOpenKeyset, adLockBatchOptimistic
	         
	      Debug.Print "rs.CursorType = " & rs.CursorType
	      
	      rs.MoveNext
	      rs.MovePrevious ' ERROR OCCURS HERE.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q123008 HOWTO: Set Up ODBC Data Sources When Distributing Apps
	
	  Q171146 HOWTO: Create and Remove a DSN in Visual Basic
	
	  Q306385 PRB: CursorType Returns adOpenStatic When You Request adOpenDynamic
	  from a Server-Side Recordset
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbADOsearch kbADO260 kbZNotKeyword6 kbSQLServ700 kbSQLServ2000Search kbZNotKeyword2 kbVB600Search kbVB600 kbSQLServ2000 kbSQLServ2000SP1 kbADO260SP1 kbADO270
	Version           : :2.6,2.6sp1,2.7,6.0,7.0,8.0,SP1
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
