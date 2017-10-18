---
layout: page
title: "Q113146: BUG: Some API's May Return SQL_ERROR: SQLSTATE S0001"
permalink: kb/113/Q113146/
---

## Q113146: BUG: Some API's May Return SQL_ERROR: SQLSTATE S0001

	Article: Q113146
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCSDK2: 2309 (1.02.3231)
	
	SYMPTOMS
	========
	
	Calling any of the API's (SQLNumResultCols, SQLDescribeCol or SQLColAttributes),
	after executing a SELECT INTO statement with SQLExecDirect, will cause the SQL
	Server driver to return SQL_ERROR instead of SQL_SUCCESS. If you call SQLError,
	you will get the following:
	
	  SQLSTATE S0001, fNativeError 2714
	
	For example:
	
	1. Set up a SQL Server data source.
	
	2. Log onto this SQL Server and use the pubs database.
	
	3. SQLExecDirect: select * into test from authors. It returns SQL_SUCCESS.
	
	4. Now call SQLNumResultCols. This will return *pcCol = -1 and a return code of
	  SQL_ERROR.Calling SQLError yields:
	
	  szSqlState = "S0001", *pfNativeError = 2714, *pcbErrorMsg = 107
	  szErrorMsg="[Microsoft][ODBC SQL Server Driver][SQL Server] There is already
	  an object named 'test' in the database."
	
	  SQLNumResultCols should actually return SQL_SUCCESS with *pcCol=0. Calling
	  SQLDescribeCol (to describe any column) or SQLColAttributes (for any column)
	  will cause the same behavior.
	
	WORKAROUND
	==========
	
	Use the SQL Server driver versions prior to 1.02.3231. The problem does not
	occur in these earlier versions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the SQL Server Driver version
	1.02.3231. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.02.3231 ODBC
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
