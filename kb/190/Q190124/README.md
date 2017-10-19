---
layout: page
title: "Q190124: PRB: Can Not Create temp Table Using ODBCdirect"
permalink: /kb/190/Q190124/
---

## Q190124: PRB: Can Not Create temp Table Using ODBCdirect

	Article: Q190124
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to create a temporary table(for example, #temp) with ODBCdirect,
	you receive no indication that the temporary table was created and no errors are
	reported.
	
	CAUSE
	=====
	
	The temporary table is created but as a result of its scope, the table appears
	not to be created. The default execution option for Connection and QueryDef
	statements is to run as a prepared statement. When the statement is executed as
	a prepared statement, the SQLPrepare ODBC API function is called and a temporary
	stored procedure is created in which the statement executes. As a result of the
	temporary stored procedure execution, the temporary table is destroyed as the
	stored procedure terminates. Thus, the scope of local temporary tables is the
	transaction space or stored procedure in which they were created. SQLServer
	Books Online contains a detailed discussion of the scopy of local and global
	temporary tables. To reproduce the problem, refer to the code sample contained
	in the MORE INFORMATION section of this article.
	
	RESOLUTION
	==========
	
	If you need to refer to a temporary table created with ODBCdirect, send the SQL
	statement in one transaction statement or use the <dbExecDirect> option
	with ODBCDirect Connection and QueryDef objects. For example:
	
	1. Create an ODBC DSN called <Pubs> with the ODBC32 administrator.
	
	2. Open Visual Basic and create a new Standard.exe project.
	
	3. On the Project menu, click References, and select the Microsoft DAO 3.5x
	  Object Library.
	
	4. In the <Form-Load> event, paste and run the following code:
	
	        Dim ws As Workspace
	        Dim cn As Connection
	        Dim strConnect as string
	        Dim strSQL as string
	
	        Set ws = DBEngine.CreateWorkspace("", "", "", dbUseODBC)
	        Set cn = ws.OpenConnection("", , ,
	                 "ODBC;DSN=Pubs;Database=Pubs;UID=sa;PWD=")
	
	        strSQL = "CREATE TABLE #test (field1 VARCHAR(20) NULL)" & vbCrLf & _
	           "CREATE TABLE TestTemp(field1 VARCHAR(20) NULL)" & vbCrLf & _
	          "INSERT INTO #test(field1) SELECT fname FROM Employee" & vbCrLf & _
	           "INSERT INTO TestTemp(field1) SELECT field1 FROM #test"
	
	        cn.Execute strSQL
	
	5. Start ISQL_W and run the following statement:
	
	        SELECT * FROM TestTemp
	        DROP TABLE TestTemp
	
	RESULTS: You should see rows returned in the results windows. If the #temp table
	was not created in step 4, TestTemp would not exist.
	
	This example demonstrates that the #temp table is created during step 4 but
	pausing/stopping the code at any point does not reveal that fact. The SQL
	statement is being executed and the connection is closed immediately, so you do
	not see the details within ISQL_W or Visual Basic.
	
	NOTE: The <DROP TABLE> statement deletes the table from the database so you
	may run the example again.
	
	To refer to the temporary table at some other point in the code, use the
	<dbExecDirect> option with the Connection or QueryDef object as in the
	following example.
	
	Follow steps 1 through 3 as in the previous example. Then paste the following
	code in the <Form-Load> event and run the project:
	
	     Dim ws As Workspace
	     Dim cn As Connection
	     Dim strConnect as string
	     Dim strSQL as string
	
	     Set ws = DBEngine.CreateWorkspace("", "", "", dbUseODBC)
	     Set cn = ws.OpenConnection("", , ,
	              "ODBC;DSN=Pubs;Database=Pubs;UID=sa;PWD=")
	
	     strSQL = "CREATE TABLE #test (field1 VARCHAR(20) NULL)" & vbCrLf & _
	              "INSERT INTO #test(field1) SELECT fname FROM Employee"
	     cn.Execute strSQL, dbExecDirect
	
	     strSQL = "CREATE TABLE TestTemp(field1 VARCHAR(20) NULL)" & vbCrLf & _
	              "INSERT INTO TestTemp(field1) SELECT field1 FROM #test"
	     cn.Execute strSQL, dbExecDirect
	
	You should see rows returned in the results windows. This demonstrates that the
	temporary table was created and its scope was not limited to a prepared
	statement (temporary stored procedure) but the database connection.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ODBC DSN called <Pubs> with the ODBC32 administrator.
	
	2. Open Visual Basic and create a new Standard.exe project.
	
	3. On the Project menu, click References, and select the Microsoft DAO 3.5x
	  Object Library.
	
	4. In the <Form-Load> event, paste the following code:
	
	        Dim ws As Workspace
	        Dim cn As Connection
	        Dim strConnect as string
	        Dim strSQL as string
	
	        Set ws = DBEngine.CreateWorkspace("", "", "", dbUseODBC)
	        Set cn = ws.OpenConnection("", , ,
	                 "ODBC;DSN=Pubs;Database=Pubs;UID=sa;PWD=")
	
	        strSQL = "CREATE TABLE #test (field1 VARCHAR(20) NULL)"
	        cn.Execute strSQL
	
	        'This statement results in an error.
	        strSQL = "INSERT INTO #test(field1) SELECT fname FROM Employee"
	        cn.Execute strSQL
	
	The temporary table was created but in a prepared statement (temporary stored
	procedure). Consequently, the temporary table was destroyed when the stored
	procedure terminated, resulting in an error on the subsequent reference to the
	temporary table.
	
	REFERENCES
	==========
	
	SQLServer Books Online Visual Basic Books Online, "ODBCDirect Prepared"
	
	Additional query words: kbDSupport kbdse kbvbp600 kbvbp500 kbDAO350 kbDAO kbSQLServ kbDatabase
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
