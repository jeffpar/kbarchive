---
layout: page
title: "Q160762: PRB: ODBC Call Failed or Error 3146"
permalink: /kb/160/Q160762/
---

## Q160762: PRB: ODBC Call Failed or Error 3146

	Article: Q160762
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.x, 2.5,  3.0; winnt:4.2x,6.0,6.5
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbsetup kbusage kbprb
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server versions 4.2x, 6.0, 6.5 
	- Microsoft Open Database Connectivity, version 1.x, 2.5, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If ODBC 2.x drivers pass function calls to the ODBC 1.x Driver Manager, you may
	receive the following errors from any 16-bit application that uses ODBC on a
	Windows 16-bit environment (such as Windows for Workgroups 3.11 or Windows
	3.1).
	
	  ODBC Call Failed
	
	  -or-
	
	  3146 error - driver doesn't support the function
	
	CAUSE
	=====
	
	Early versions of the ODBC Driver Manager (1.x) were placed in the Windows
	directory on 16-bit Windows platforms, while subsequent versions of the ODBC
	Driver Manager (2.x and above) were placed in the Windows\System directory. The
	best way to determine if you are encountering the problem is to search the
	computer for the Odbc.dll file, and verify the version in File Manager. You can
	do this by clicking on the file and then clicking Properties on the File menu.
	If the first possible Odbc.dll file in the path is the ODBC 1.x Driver Manager,
	you are most likely encountering the problem.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the ODBC 1.x Driver Manager (Odbc.dll) from
	the path and/or place the ODBC 2.x Driver Manager (Odbc.dll) in the path first.
	
	MORE INFORMATION
	================
	
	The following portion of an ODBC Spy trace was obtained from an instance in
	which the error reported was "ODBC Call Failed" from Access (the SQLSetParam was
	replaced in ODBC 2.0 with SQLBindParameter):
	
	  SQLSetParam
	     0x01010009
	     1
	     SQL_C_DEFAULT
	     SQL_VARCHAR
	     11
	     0
	     0x6E16774D
	     0x6A16774D
	     SQL_ERROR
	  SQLError
	     NULL
	     NULL
	     0x01010009
	     [5]IM001
	     -8190
	     [54][SYWARE][ODBCSPY]Driver does not support this function
	     511
	     54
	     SQL_SUCCESS
	  SQLError
	     NULL
	     NULL
	     0x01010009
	     [5]00000
	     -8190
	     [0]
	     511
	     0
	     SQL_NO_DATA_FOUND.
	
	Additional query words: 1.xx 2.50
	
	======================================================================
	Keywords          : kbenv kbinterop kbsetup kbusage kbprb 
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ600 kbSQLServ650 kbODBCSearch kbSQLServ420
	Version           : WINDOWS:1.x, 2.5,  3.0; winnt:4.2x,6.0,6.5
	
	=============================================================================
	
