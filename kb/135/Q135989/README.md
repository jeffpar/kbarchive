---
layout: page
title: "Q135989: BUG: SQLNumResultCols Returns Zero for the pcCol Argument"
permalink: /kb/135/Q135989/
---

## Q135989: BUG: SQLNumResultCols Returns Zero for the pcCol Argument

	Article: Q135989
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kbprogramming kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the ODBC 32-bit 2.50.0121 SQL Server driver along with the
	2.50.3006 Cursor Library, SQLNumResultCols returns zero for the number of
	columns in the result set.
	
	This problem occurs only when the hstmt is in a positioned state.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the 2.50.3006 version of the
	cursor library. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following steps reproduce the problem:
	
	1. In the database, Create table test(col1 int, col2 char(10))
	
	2. insert test values(10,'Unchanged')
	
	Then, use ODBC Test:
	
	1. Set connect option to use the cursor library. Allocate two statements, hstmt1
	  and hstmt2. On hstmt1, set the cursor type to 'Static', concurrency to
	  'Values', and cursor name to 'c1'.
	
	2. Do a SQLPrepare on hstmt1 and "select * from test for update of col2".
	  Execute this statement. SQLNumResultCols at this point returns a correct
	  value. Do a SQLFreeStmt with SQL_CLOSE option. Execute hstmt1 again. Do a
	  SQLExtendedFetch.
	
	3. On hstmt2, do a SQLExecDirect on "update blow set col2='Changed' where
	  current of c1".
	
	4. On hstmt1, call SQLNumResultCols again. It returns zero.
	
	Since SQLNumResultCols is called on hstmt1 and not hstmt2, SQLNumResultCols
	should not be returning 0.
	
	Additional query words: mfc sql
	
	======================================================================
	Keywords          : kbprogramming kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC250
	Version           : WINDOWS:2.5
	Issue type        : kbbug
	
	=============================================================================
	
