---
layout: page
title: "Q126613: BUG: Connection Fails with SQLSetConnectOption-SQLConnect"
permalink: kb/126/Q126613/
---

## Q126613: BUG: Connection Fails with SQLSetConnectOption-SQLConnect

	Article: Q126613
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	2.00.2317
	
	WINDOWS
	
	kbbug2.00.2317 kbprg kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# QJET: 1870 (2.00.2317)
	
	SYMPTOMS
	========
	
	After using SQLSetConnectOption to set SQL_CURRENT_QUALIFIER to a valid data
	source path, the following SQLConnect (or SQLDriverConnect) will return
	SQLSetConnectOption failure message, and a connection is established without
	current qualifier set to that desired path.
	
	NOTE: It occurs with all the desktop database drivers.
	
	For example, in case of Microsoft Access driver, do the following:
	
	     SQLAllocConnect(henv, &hdbc);
	     SQLSetConnectOption(
	        hdbc, SQL_CURRENT_QUALIFIER, "C:\ODBC20\SMPLDATA\ACCESS\SAMPLE"
	     );  //Note: It's a valid path
	     SQLConnect(
	        hdbc, "sdk21-Access", SQL_NTS, "admin", SQL_NTS, NULL, 0
	     );  //Note: DSN points to "C:\ODBCSDK\SMPLDATA\ACCESS\SAMPLE"
	
	You will get:
	
	  SQL_SUCCESS_WITH_INFO, IM006, "[Microsoft][ODBC DLL] Driver's
	  SQLSetConnectOption failed" 08003, "[Microsoft][ODBC Driver pack 2.0
	  Driver]Connection is not open"
	
	The 08003 is misleading. Actually, the connection to sdk21-Access has been
	established with the current qualifier set to
	
	  C:\ODBCSDK\SMPLDATA\ACCESS\SAMPLE.
	
	WORKAROUND
	==========
	
	Invoke SQLSetConnectOption to set SQL_CURRENT_QUALIFIER after the connection has
	been established, (that is, SQLConnect or SQLDriverConnect has succeeded).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC DeskTop Database Drivers
	Pack version 2.00.2317. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00.2317 ODBC ACCESS BTRIEVE DBASE EXCEL FOX PARADOX TEXT VISUAL BASIC C++ MFC Windows NT
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	
