---
layout: page
title: "Q147938: RDO: Getting Data from Temp Tables Created by Stored Procedure"
permalink: /kb/147/Q147938/
---

## Q147938: RDO: Getting Data from Temp Tables Created by Stored Procedure

	Article: Q147938
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
	
	It is common to have stored procedures use temporary tables to build a result
	set. When using RDO (Remote Data Object) to call this type of stored procedure
	it appears as though RDO does not return any results, only an empty result set
	and no errors.
	
	Testing this same query with the Microsoft SQL Server version 6.0 ISQL utility
	produces the expected results, which leads you to believe RDO is restricted from
	reading these temporary tables.
	
	This is not an RDO restriction and RDO CAN retrieve data from a temporary table
	created in a stored procedure. However, no data access library can create a
	SCROLLABLE CURSOR on a temporary table created within a stored procedure.
	Temporary tables that are created within a stored procedure are DESTROYED when
	that stored procedure ends. If the table is not there, no data access library
	can possibly open a scrollable cursor on it, and go back to it when the next
	rowset is needed or when the user tries to update, insert or delete it.
	
	ISQL does not open a cursor, nor use a cursor library, so it just reads data off
	the pipe, one row at a time, read-only, forward-only (this is also the default
	mode of dblib so many people are used to working this way). The good news is
	that RDO can do this as well. You just need to tell SQL Server not to open a
	server-side cursor on the temporary table. This is done by setting the
	RowsetSize property to 1 and opening the result set as forward-only and
	read-only (just like ISQL does). RDO uses 100 as the default for RowsetSize,
	since this is the optimal setting for most cursor operations and when it is set
	to anything greater than 1, SQL Server' ODBC driver MUST attempt to create a
	server-side cursor, since fat rowsets require the ability to scroll and possibly
	update.
	
	Remember that using cursors is much different than the read-only, forward-only,
	rowset size of 1, approach to getting data back to the client. To support the
	operations that cursors do (like scrolling backwards, doing positioned updates,
	etc.), the source of the data has to live for the entire time the cursor is
	open. RDO can operate in a cursor mode, or a "fire hose" mode, which allows you
	to perform whatever functionality you want.
	
	MORE INFORMATION
	================
	
	Sample Program
	--------------
	
	Step 1: Create the Stored Procedure
	-----------------------------------
	
	This stored procedure simply creates a temporary table called "#temptest,"
	filling it with all the rows from the Authors table in the Pubs database.
	
	1. Open the SQL Server 6.0 ISQL utility and change the default database to Pubs.
	
	2. Paste the following code into the Query window and click the Execute Query
	  button, or press CTRL+E, to execute the Transact-SQL code:
	
	     create proc TempTableTest as
	     select * into #testtemp from authors
	     select * from #testtemp
	
	3. The following confirmation message displays
	
	  "This command did not return data, and it did not return any rows"
	
	  which indicates that the Transact-SQL code created the stored procedure
	  correctly.
	
	Step 2: Create the Visual Basic Code
	------------------------------------
	
	The following Visual Basic code opens a connection to the server, creates a
	prepared statement for the stored procedure, sets the result set size to 1 and
	opens the result set as forward-only, read-only. When you run this code, all the
	author IDs and last names appear in the debug window.
	
	This sample code uses a "DSN-less" ODBC connection so you do not need to set up a
	DSN (Data Source Name) with the ODBC Admin utility.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a command button (Command1) and a listbox (list1) to Form1.
	
	3. Paste the following code into the General Declarations section of Form1:
	
	     Private Sub Command1_Click()
	       Dim cn As rdoConnection
	       Dim ps As rdoPreparedStatement
	       Dim rs As rdoResultset
	       Dim strConnect As String
	
	       strConnect = "driver={SQL Server};server=myserver;" & _
	         "database=pubs;uid=sa;pwd="
	       rdoEnvironments(0).CursorDriver = rdUseOdbc
	       Set cn = rdoEnvironments(0).OpenConnection( _
	         dsName:="", _
	         Prompt:=rdDriverNoPrompt, _
	         ReadOnly:=False, _
	         Connect:=strConnect)
	
	       Set ps = cn.CreatePreparedStatement( _
	         Name:="ps1", _
	         SqlString:="{call TempTableTest }")
	       ps.RowsetSize = 1
	       Set rs = ps.OpenResultset( _
	         Type:=rdOpenForwardOnly, _
	         LockType:=rdConcurReadOnly)
	
	       While Not rs.EOF
	         list1.AddItem rs(0) & ", " & rs(1)
	         rs.MoveNext
	       Wend
	     End Sub
	
	4. Note that you need to change your DATABASE, UID, and PWD parameters in the
	  OpenConnection method.
	
	5. Start the program or press the F5 key.
	
	6. Click the Command1 button to execute the stored procedure and display the
	  results in the list control.
	
	REFERENCES
	==========
	
	For complete documentation, refer to the "Microsoft ODBC 2.0
	
	  Programmer's Reference and SDK Guide."
	
	  Hitchhiker's Guide to Visual Basic and SQL Server, Microsoft Press. ISBN:
	  1-55615-906-4.).
	
	Additional query words: kbVBp400 kbVBp600 kbdse kbDSupport kbVBp kbODBC kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbVB400Search kbVB400
	
	=============================================================================
	
