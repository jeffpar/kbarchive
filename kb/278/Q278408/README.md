---
layout: page
title: "Q278408: PRB: DataGrid Cannot Be Bound to a Non-Bookmarkable Recordset"
permalink: /kb/278/Q278408/
---

## Q278408: PRB: DataGrid Cannot Be Bound to a Non-Bookmarkable Recordset

	Article: Q278408
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbADO kbVBp600 kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.0, 2.1, 2.1 SP1, 2.1 SP2, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to bind an OLEDB DataGrid control to a forward-only or dynamic
	ActiveX Data Objects (ADO) recordset, you may receive the following run-time
	error message:
	
	  Run-time error '7004': The Rowset is not bookmarkable
	
	CAUSE
	=====
	
	You cannot bind the DataGrid control to recordsets that do not support
	bookmarks. The forward-only and dynamic ADO recordsets do not support bookmarks,
	and therefore cannot be specified as the DataSource for an OLEDB DataGrid
	control.
	
	RESOLUTION
	==========
	
	Bind the DataGrid to a bookmarkable recordset such as the keyset and static ADO
	recordsets.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual Basic version 6.0, create a new Data project.
	
	2. In the frmDataEnv form, add a DataGrid and a CommandButton control.
	
	3. In the frmDataEnv form module, paste the following code:
	
	NOTE: Supply the required connection parameters to the cn.Open statement to
	connect to the SQL Server, and specify a valid table name in the rs.Open
	statement.
	
	  'General Declarations Section
	  Dim cn As ADODB.Connection
	  Dim rs As ADODB.Recordset
	
	  Private Sub Command1_Click()
	
	  Set cn = New ADODB.Connection
	  Set rs = New ADODB.Recordset
	
	  cn.Open "Provider=SQLOLEDB;Data Source=<<I>SQL Server</I>>;Initial Catalog=<<I>SQL Database</I>>;User Id=<<I>SQL UserId</I>>;Password=<<I>SQL Password</I>>"
	  rs.Open "Select * from <<I>TableName</I>>", cn, adOpenDynamic, adLockOptimistic
	
	  Set DataGrid1.DataSource = rs
	
	  End Sub
	
	4. Save and then run the project.
	
	5. When frmDataEnv is displayed, click the command button.
	
	You receive the error specified in the "Symptoms" section of this article.
	
	6. Modify the rs.Open statement in the Command1_Click() event procedure to open
	  a keyset or a static ADO recordset. To do this, replace the constant
	  adOpenDynamic with adOpenKeyset or adOpenStatic.
	
	7. Save and then run the project.
	
	8. On frmDataEnv, click the command button.
	
	The records in the specified table in the OLEDB DataGrid control are displayed.
	
	Additional query words: 7004
	
	======================================================================
	Keywords          : kbADO kbVBp600 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO200 kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :2.0,2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbprb
	
	=============================================================================
	
