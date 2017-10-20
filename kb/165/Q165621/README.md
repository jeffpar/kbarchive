---
layout: page
title: "Q165621: FIX: Error 231 After Opening a Server Side Cursor"
permalink: /kb/165/Q165621/
---

## Q165621: FIX: Error 231 After Opening a Server Side Cursor

{% raw %}

	Article: Q165621
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0,3.0; winnt:6.5
	Operating System(s): 
	Keyword(s): kbinterop kbprogramming kbusage kbSQLServ650bug
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server version 6.5 
	- Microsoft ODBC Driver for SQL Server, versions 2.0, 3.0 
	- Microsoft Open Database Connectivity, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	BUG #: 16328 (2.65.0240)
	
	SYMPTOMS
	========
	
	In a multi-threaded application that has two threads, when the first thread does
	a SQLExecDirect of a select statement and the second thread does a SQLCancel in
	the middle of the select, the driver does not get a response back from the
	server, and therefore closes the connection.
	
	The following error is reported by the Net-Library:
	
	  Error 231: ConnectionTransact (GetOverLappedResult()).
	
	The SQL Server driver then reports the following error:
	
	  szSqlState = "08S01", *pfNativeError = 0, *pcbErrorMsg = 61
	  szErrorMsg = "[Microsoft][ODBC SQL Server Driver]Communication link failure"
	
	WORKAROUND
	==========
	
	There is no known workaround at this time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SQL Server driver
	version 2.65. This problem has been corrected in U.S. Service Pack 3 for
	Microsoft SQL Server version 6.5. For more information, contact your primary
	support provider.
	
	Additional query words: odbc cursor
	
	======================================================================
	Keywords          : kbinterop kbprogramming kbusage kbSQLServ650bug 
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ650 kbODBCSearch kbODBCSQLServ200 kbODBCSQLServ300 kbODBC300 kbODBC200
	Version           : WINDOWS:2.0,3.0; winnt:6.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
