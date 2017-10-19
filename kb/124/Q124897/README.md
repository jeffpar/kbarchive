---
layout: page
title: "Q124897: FIX: Cursor Library Returns Duplicate Row in Asynchronous Mode"
permalink: /kb/124/Q124897/
---

## Q124897: FIX: Cursor Library Returns Duplicate Row in Asynchronous Mode

	Article: Q124897
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When the ODBC Cursor Library is used to set up a static cursor with a driver
	whose asynchronous mode is enabled, it returns duplicate rows under certain
	circumstances. These duplicate rows are returned every time an asynchronous
	operation with the driver returns SQL_STILL_EXECUTING. The number of duplicate
	rows retrieved on subsequent fetches (MoveNext's in MFC) is variable. Certain
	conditions can cause as many as 500 consecutive repetitions of the same record.
	
	This behavior has typically been observed in MFC applications using the ODBC
	database classes to build snapshots (which cause the ODBC Cursor Library's
	static cursor implementation to be used).
	
	WORKAROUND
	==========
	
	Users of MFC database classes can avert this behavior by:
	
	1. Setting synchronous mode on by calling the SetSynchronousMode() method of
	  CDatabase
	
	2. Using forwardOnly recordsets
	
	Users of the ODBC API and the Cursor Library can work around the behavior by:
	
	1. Calling SQLSetStmtOption (hstmt, SQL_ASYNC_ENABLE, SQL_ASYNC_ENABLE_OFF).
	
	2. Using forward-only cursors in the Cursor Library.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Cursor Library version
	2.00.1510. This problem has been fixed in the 32-bit version of the ODBC 2.5
	Cursor Library (ODBCCR32.DLL, 2.50.3006). The 16-bit cursor library has not been
	changed. If you are using the 16 bit SQL Server driver, this should not be a
	problem because you can use the server side cursors in SQL Server version 6.0
	and eliminate the need for the cursor library. If you are using the Access
	driver, you need to use the 32-bit driver and the new 32-bit cursor library.
	
	
	MORE INFORMATION
	================
	
	You can get ODBC 2.50 components from:
	
	- anonymous-FTP: FTP.MICROSOFT.COM:\BUSSYS\SQL_ODBC\ODBC-PUBLIC\ODBC25.EXE
	
	- The Microsoft Developer Network (MSDN) Level II CD: ODBC210B\X86\ODBC25
	
	They are also available on the SQL Server version 6.0 CD, under
	ODBC_SDK\ODBC25\REDIST.
	
	Additional query words: 2.00.1510 MFC VISUAL C++ MSVC Windows NT
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
