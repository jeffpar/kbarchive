---
layout: page
title: "Q177516: PRB: ODBCDirect Query Causes Error 3667"
permalink: /kb/177/Q177516/
---

## Q177516: PRB: ODBCDirect Query Causes Error 3667

{% raw %}

	Article: Q177516
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running a query or manipulating a recordset in an ODBCDirect workspace causes
	the following error to occur:
	
	  "A different operation is preventing this operation from being executed,
	  runtime error 3667."
	
	CAUSE
	=====
	
	This error can be caused by trying to run more than one asynchronous operation
	at a time on the same connection object or performing other Data Access Object
	(DAO) operations (such as recordset manipulation) on the same connection object
	while an asynchronous query runs.
	
	RESOLUTION
	==========
	
	To run multiple asynchronous queries on the same connection object, you must
	first test the value of the StillExecuting property to determine whether you can
	start the next asynchronous operation. To run multiple asynchronous queries in
	parallel, you must create separate connection objects and run each asynchronous
	query on its own connection object.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a Visual Basic standard .exe file. By default this places a Form in
	  the project. Under Project References select "Microsoft DAO 3.5 Object
	  Library."
	
	2. In the General Declarations section of the Form1, place the following code:
	
	        Dim wks As Workspace
	        Dim cn As Connection
	        Dim recset As Recordset
	        Dim SQLStuff As String
	
	3. In the Form_Load event place the following code. This code assumes that you
	  have a DSN that connects to the sample pubs database in SQL Server.
	
	        SQLStuff = "ODBC;DSN=PubsDSN;UID=sa;PWD="
	        Set wks = CreateWorkspace("", "admin", "", dbUseODBC)
	        Set cn = wks.OpenConnection("", dbDriverNoPrompt, False, SQLStuff)
	
	4. Place a command button on the form by adding the following code to the
	  Command1_Click event:
	
	        SQLStuff = "UPDATE employee SET job_lvl = job_lvl + job_lvl * .1"
	        cn.Execute SQLStuff, dbRunAsync
	        Set recset = cn.OpenRecordset("SELECT * FROM authors", dbOpenDynamic,
	           dbRunAsync, dbOptimisticValue)
	
	Note that the connection execute method is still using the connection when the
	openrecordset method is used. This is what causes the error to occur.
	
	REFERENCES
	==========
	
	For more information query on stillexecuting in the help file or in "Books On
	Line."
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
