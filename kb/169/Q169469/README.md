---
layout: page
title: "Q169469: BUG: SQLState S1000 with SQL_AUTOCOMMIT_OFF/SQLTransact"
permalink: kb/169/Q169469/
---

## Q169469: BUG: SQLState S1000 with SQL_AUTOCOMMIT_OFF/SQLTransact

	Article: Q169469
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5,3.0,7.0,97
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 2.5, 3.0 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	BUG #: 4841 (Brazos)
	
	SYMPTOMS
	========
	
	If an application does the following in the Microsoft Access 7.0 or 97 version
	of the ODBC drivers more than seven times
	
	  SQLSetConnectOption(hdbc, SQL_AUTOCOMMIT, SQL_AUTOCOMMIT_OFF);
	  SQLTransact(henv, hdbc, SQL_COMMIT);
	
	The error generated is:
	
	  *szSqlState = "S1000", *pfNativeError = -1103,
	  *szErrorMsg = "[Microsoft][ODBC Microsoft Access 97 Driver] "
	
	If the application calls SQLExecDirect with any SQL statement, the error
	generated is:
	
	  szSqlState = "S1000", *pfNativeError = -1103, *pcbErrorMsg = 110
	  szErrorMsg="[Microsoft][ODBC Microsoft Access 97 Driver] Couldn't start
	  transaction; too many transactions already nested."
	
	WORKAROUND
	==========
	
	To work around this problem, do not set the SQL_AUTOCOMMIT option repeatedly
	within a connection. The SQL_AUTOCOMMIT option is a per-connection option. Once
	this option is set, it stays valid until the connection is dropped; an ODBC
	application does not have to set the option repeatedly within a connection.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Access ODBC driver
	version 3.50.3602. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: SQLEndTran SQLSetConnectAttr
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbAudDeveloper kbAccessSearch kbAccess97 kbODBCSearch kbAccess97Search kbODBC300 kbODBC250
	Version           : WINDOWS:2.5,3.0,7.0,97
	Issue type        : kbbug
	
	=============================================================================
	
