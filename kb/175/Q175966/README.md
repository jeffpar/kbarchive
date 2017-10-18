---
layout: page
title: "Q175966: BUG: SQL_PRESERVE_CURSORS Fails on Reuse of a Connection Handle"
permalink: kb/175/Q175966/
---

## Q175966: BUG: SQL_PRESERVE_CURSORS Fails on Reuse of a Connection Handle

	Article: Q175966
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 3.0,6.5
	Operating System(s): 
	Keyword(s): kbcode kbProgramming kbSQLServ650bug
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server version 6.5 
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	BUG #: 17471 (6.50)
	
	SYMPTOMS
	========
	
	If you reuse a previously used connection handle and attempt to preserve cursors
	over transaction boundaries (that is, if the SQL Server driver connect option
	SQL_PRESERVE_CURSORS is used), the following error occurs:
	
	  [Microsoft][ODBC Driver Manager] Function sequence error
	
	WORKAROUND
	==========
	
	To work around this problem, do not reuse connection handles if you need to
	preserve cursors. Instead, close the handle and reopen a new one for preserve
	cursor operations.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SQL Server version 6.5 and Open
	Database Connectivity version 3.0. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The following script, used with ODBC Test (Odbcte32.exe) demonstrates the
	problem:
	
	     1)   Full Connect:  (connect to Pubs).
	     2)   SQLDisconnect:
	     3)   SQLSetConnectOption:
	           fOption=Conn: SQL_ODBC_CURSORS=110,
	           vParam=SQL_CUR_USE_DRIVER=2
	     4)   SQLDriverConnect: (reconnect to Pubs)
	     5)   SQLSetConnectOption:
	           fOption=Conn: SQL_AUTOCOMMIT=102,
	           vParam=SQL_AUTOCOMMIT_OFF=0
	     6)   SQLAllocStmt:
	     7)   SQLSetStmtOption:
	           fOption=SQL_CURSOR_TYPE=6,
	           vParam=SQL_CURSOR_STATIC=3
	     8)   SQLSetConnectOption:
	           fOption=1204 (#def value for SQL_PRESERVE_CURSORS)
	           vParam=1 (#def value for SQL_PC_ON)
	     9)   SQLPrepare:
	           select emp_id, fname from employee where job_id = 13
	     10)   SQLExecute:
	     11)   SQLTransact:
	     12)   Bind Col All:
	     13)   SQLSetStmtOption:
	           fOption=SQL_ROWSET_SIZE=9,
	           vParam=20,
	     14)   SQLExtendedFetch:
	           fFetchType=SQL_FETCH_NEXT=1
	           irow=0, pcrow=VALID, rgfRowStatus=VALID
	        Return:   SQL_ERROR=-1
	        szSqlState = "S1010", *pfNativeError = 0, *pcbErrorMsg = 56
	        szErrorMsg="[Microsoft][ODBC Driver Manager] Function sequence error"
	
	The script above will run successfully if you do either of the following:
	
	- Do not disconnect.
	
	  -or-
	
	- Free the connection handle and allocate a new one.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbProgramming kbSQLServ650bug 
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ650 kbODBCSearch kbODBC300
	Version           : :3.0,6.5
	Issue type        : kbbug
	
	=============================================================================
	
