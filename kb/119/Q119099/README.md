---
layout: page
title: "Q119099: BUG: Memory Leak with Desktop Database Drivers with USE"
permalink: kb/119/Q119099/
---

## Q119099: BUG: Memory Leak with Desktop Database Drivers with USE

	Article: Q119099
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# odbcdbase: 2126 (1.01.1928)
	
	SYMPTOMS
	========
	
	When an ODBC application, using any of the desktop drivers (dBASE, FoxPro,
	Paradox, BTRIEVE, Access, Excel, and Text), executes a USE statement, a memory
	loss of 2048 bytes occurs. For example, the following sequence of calls exhibit
	the behavior:
	
	     SQLAllocEnv(&henv);
	     SQLAllocConnect (henv, &hdbc);
	     SQLDriverConnect (hdbc, hwnd, "", 0, szConnStrOut, cbConnStrOutMax,
	                       &cbConnStrOut, SQL_DRIVER_PROMPT);
	     SQLAllocStmt(hdbc, &hstmt);
	     SQLExecDirect(hstmt,"use c:\\",SQL_NTS);
	     SQLFreeStmt (hstmt, SQL_DROP);
	     SQLDisconnect(hdbc);
	     SQLFreeConnect(hdbc);
	     SQLFreeEnv(henv);
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Desktop Drivers version
	1.01.1928. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.01.1928 ODBC Visual C++ MSVC DDD
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
