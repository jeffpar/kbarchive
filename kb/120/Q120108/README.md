---
layout: page
title: "Q120108: BUG: dBASE: SQL_ERROR w/ SQLExecute/SQLFreeStmt(SQL_CLOSE)"
permalink: kb/120/Q120108/
---

## Q120108: BUG: dBASE: SQL_ERROR w/ SQLExecute/SQLFreeStmt(SQL_CLOSE)

	Article: Q120108
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCDBASE: 2147 (1.01.1928)
	
	SYMPTOMS
	========
	
	Calling SQLExecute, SQLFetch, and SQLFreeStmt/SQL_CLOSE in a loop on a prepared
	statement can cause SQLExecute to return SQL_ERROR after several iterations. The
	exact number of iterations before this error occurs depends on the number of
	columns in the table. Users of MFC Database classes note that
	CRecordSet::Requery followed by CRecordSet::MoveNext in a loop can cause the
	same behavior.
	
	To produce the problem, do the following with the ODBC dBASE driver:
	
	  create table test (col1 char(5), col2 char(5))
	     SQLPrepare: select * from test order by col2
	     Loop
	       SQLExecute
	       SQLFetch
	       SQLFreeStmt/SQL_CLOSE
	     End Loop
	
	At the 925th iteration of the above loop, SQLExecute will fail with SQL_ERROR.
	
	Calling SQLError will return SQL_NO_DATA_FOUND. The number of iterations before
	failure is dependent on the number of columns in the table. Here is some data
	that will provide a rough idea of this dependency:
	
	  Table with                 Iterations to SQL_ERROR
	-----------------------------------------------------
	   2 columns,    1 row                925
	   2 columns, 1000 rows               925
	   6 columns, 1000 rows               919
	  10 columns, 1000 rows               599
	  15 columns, 1000 rows               476
	  17 columns, 1000 rows               399
	  19 columns, 1000 rows               393
	
	MFC Database class users will see the same behavior with the following loop,
	after the same number of iterations as above:
	
	     CRecordSet::Open, szSQLStr = select * from test order by col2
	     Begin Loop
	        CRecordSet::Requery
	        CRecordSet::MoveNext
	     End Loop
	
	WORKAROUND
	==========
	
	Making either of the following two changes will work around the problem:
	
	1. Remove the ORDER BY in the above SELECT statement (this is applicable to MFC
	  users).
	
	2. Do SQLExecDirect instead of SQLPrepare/SQLExecute. (This is not applicable to
	  MFC users.)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC dBASE Driver version
	1.01.1928. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.01.1928 Desktop Database Drivers Simba MSVC Visual C++
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
