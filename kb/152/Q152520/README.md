---
layout: page
title: "Q152520: PRB: Opening a Dynaset on a SQL Server Stored Procedure"
permalink: /kb/152/Q152520/
---

## Q152520: PRB: Opening a Dynaset on a SQL Server Stored Procedure

	Article: Q152520
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbSQL kbVC200 kbVC210 kbVC220 kbVC400 kbVC420 kbVC500 kbVC600 kbDSuppo
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to call a SQL Server 6.x stored procedure from a dynaset-type
	CRecordset throws a CDBException if the procedure has any additional SELECT,
	INSERT, UPDATE or DELETE statement other than a single SELECT statement.
	
	You will see the following error message on recordset Open (DB Tracing enabled):
	
	  
	
	  Cannot open a cursor on a stored procedure that has anything other
	  than a single select statement in it
	  State:37000,Native:16937,Origin:[Microsoft][ODBC SQL Server Driver]
	  [SQL Server]
	
	CAUSE
	=====
	
	Calling the following stored procedure from a dynaset-type recordset will cause
	the error described above:
	
	        CREATE PROCEDURE twosel AS
	               BEGIN
	
	                select * from myTable
	                select * from myTable
	
	               End
	
	This is by design as documented in the Help file for SQL Server ODBC driver
	version 2.5. You can navigate the Help file in the following way to get to the
	description:
	
	  What's New
	   Server Cursors
	     Using ODBC Cursors
	       Creating Cursors
	
	  "You will get a cursor on SQLExecDirect (Exec procedure_name or{Call
	  procedure_name}) only if the procedure contains one SELECTstatement and
	  nothing else. Otherwise, SQL Server generates an error message. Because of
	  this restriction, you cannot use server cursors with the ODBC catalog
	  functions (which use stored procedures that contain multiple SELECT
	  statements)."
	
	You will also get the same error message when using dynaset if your stored
	procedure has a RETURN statement in addition to a SELECT statement.
	
	RESOLUTION
	==========
	
	Use a snapshot (with the cursor library loaded) or readOnly forwardOnly- type
	recordset when the stored procedure has more data manipulation statements other
	than a single SELECT statement.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	MFC Encyclopedia article: "Recordset: Declaring a Class for a Predefined Query"
	
	Additional query words: MfcDatabase kbVC401 kbdse
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbSQL kbVC200 kbVC210 kbVC220 kbVC400 kbVC420 kbVC500 kbVC600 kbDSupport kbGrpDSODBC kbSQLProg 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
