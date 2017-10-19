---
layout: page
title: "Q170548: PRB: DAO Transactions to ODBC Database Can Hang Application"
permalink: /kb/170/Q170548/
---

## Q170548: PRB: DAO Transactions to ODBC Database Can Hang Application

	Article: Q170548
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbADO kbDAOsearch kbDatabase kbJET kbODBC kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbG
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using transactions to an ODBC database, it is possible to cause a Visual
	Basic application to appear to hang until the ODBC query time-out interval is
	reached and error 3146 "ODBC Call Failed" is raised. The DBEngine errors
	collection will show an ODBC "Time-out Expired" error.
	
	The Visual Basic application appears to hang and will eventually display and
	error with an ODBC Time-out message after the interval specified in the
	QueryTimeout property of the database object (default = 60 seconds). If the
	error is trapped and handled, the application can resume normally although the
	data may have been rolled back or partially committed.
	
	CAUSE
	=====
	
	When the Microsoft Jet Engine, used by Visual Basic, performs transactions on an
	ODBC database, it issues ODBC transactions down each connection that it opens
	between the BeginTrans and the CommitTrans/Rollback. It then commits or rolls
	back all of the transactions on all of the connections when a CommitTrans or
	Rollback is issued.
	
	It must do this because the Jet engine offers global and nested transactions
	while the current ODBC specification does not; it only allows for a single
	transaction on a per connection basis.
	
	If needed, the Jet engine will open multiple connections in order to perform the
	transactions. The server sees each connection as a separate process. It has no
	way of knowing that it is from the same application or that you may want the
	connections to get along with each other in terms of locking or available data.
	It simply treats each connection as a completely independent and distinct
	entity.
	
	This raises a problem. If the Jet engine opens a connection, begins a transaction
	that affects a given page of data on a given table, then opens another
	connection and begins another transaction that affects the same page of data,
	the server will block (serialize) the second connection until the first one
	releases the locks (completes). This causes the Visual Basic application to hang
	on the line of code that is running the statement on the second connection until
	the transaction that it sent on the first connection completes. This can never
	happen because the transaction on the first connection is open until a
	CommitTrans or Rollback is encountered in the Visual Basic code, but that code
	is hung waiting for the transaction to complete. It is hung indefinitely unless
	a time-out occurs on one of the connections, which is what eventually happens.
	
	The following example demonstrates the problem with most ODBC servers:
	
	1. Create a datasource for your server named DSN_BLK_TEST using the ODBC
	  Administrator applet.
	
	2. Open Visual Basic and start a new project.
	
	3. Reference the appropriate DAO reference in the References dialog.
	
	4. Add a CommandButton to the form.
	
	5. Add the following code to the click event of the CommandButton:
	
	        Private Sub Command1_Click()
	
	           Dim db As Database
	           Dim rs As Recordset
	           Dim strSQL As String
	           Dim intLoop As Integer
	
	           'Open up the ODBC datasource
	           Set db = DBEngine.Workspaces(0).OpenDatabase("", _
	           False, False, "ODBC;DSN=DSN_BLK_TEST;DATABASE=TestDB;UID=sa;PWD=;")
	           'Create a table with two fields one a primary key
	           strSQL = "IF EXISTS(SELECT * FROM sysobjects WHERE id = "
	           strSQL = strSQL & "object_id('t_blocking')) DROP TABLE t_blocking"
	           db.Execute strSQL, dbSQLPassThrough
	           strSQL = "CREATE TABLE t_blocking (f_pkey int " & _
	                    "NOT NULL PRIMARY KEY,"
	           strSQL = strSQL & " f_dummy varchar(10) NULL)"
	           db.Execute strSQL, dbSQLPassThrough
	           Set rs = db.OpenRecordset("SELECT * FROM t_blocking")
	           'Demonstrate Blocking
	           BeginTrans
	           'Add some records
	           For intLoop = 1 To 25
	              rs.AddNew
	              rs.Fields("f_pkey") = intLoop
	              rs.Fields("f_dummy") = "test" & Str$(intLoop)
	              rs.Update
	           Next intLoop
	           'Try to update a few records. This should cause a second
	           'connection' to be created by the JET engine
	           'causing a blocking condition.
	           strSQL = "UPDATE t_blocking SET f_dummy = 'updated' " & _
	                    "WHERE f_pkey > 20"
	           db.Execute strSQL
	           CommitTrans
	
	        End Sub
	
	The code should appear to hang on the last db.Execute statement. Using the server
	administrative tools for the server that you are using, check the locking status
	on the t_blocking table. It should show the first connection blocking the
	second.
	
	NOTE: Depending on the locking mechanisms of the server, this test may not cause
	a locking problem.
	
	RESOLUTION
	==========
	
	To work around the problem:
	
	1. Keep transactions as small as possible. If this condition is encountered,
	  check the locking on the server and limit the transaction to the point where
	  blocking occurs.
	
	2. Use the ODBC API. If you are using the 32-bit Visual Basic Enterprise
	  Edition, use Remote Data Objects (RDO) or ActiveX Data Objects (ADO). When
	  using RDO or ADO, you have complete control over connections and transactions
	  on the connections, so you can avoid this problem.
	
	3. Use SQLPassthrough queries that combine the blocking statements into one
	  statement that does transactions within the SQL statement. This could be ad
	  hoc SQL or precompiled into a stored procedure.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Troy
	Cambra, Microsoft Corporation.
	
	
	Additional query words: kbdse kbDSupport kbVBp kbVBp500bug kbVBp600bug kbVBp400bug kbADO
	
	======================================================================
	Keywords          : kbADO kbDAOsearch kbDatabase kbJET kbODBC kbVBp kbVBp400bug kbVBp500bug kbVBp600bug kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC260 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
