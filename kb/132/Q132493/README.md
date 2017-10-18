---
layout: page
title: "Q132493: PRB: Memory Leaks with Desktop Database Drivers"
permalink: kb/132/Q132493/
---

## Q132493: PRB: Memory Leaks with Desktop Database Drivers

	Article: Q132493
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	2.00
	
	WINDOWS
	
	kbinterop kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following sequence of calls lead to a 4K memory leak in Microsoft Desktop
	Database Drivers version 3.x, 12K to 20K memory leak in 32-bit Microsoft Desktop
	Database Drivers version 2.x, and a 64K memory leak when 16-bit Microsoft
	Desktop Database Drivers are used:
	
	  SQLAllocEnv, SQLAllocConnect, SQLConnect (or SQLDriverConnect),
	  SQLDisconnect, SQLFreeConnect, and SQLFreeEnv
	
	NOTE: If you use an Access 3.x ODBC driver against an Access 2.x MDB file, the
	memory leak is between 12K and 20K. If you use the Access 3.x ODBC driver
	against an Access 7.x MDB file, the leak is 4K.
	
	WORKAROUND
	==========
	
	Share ODBC connections as much as possible in the application.
	
	MORE INFORMATION
	================
	
	The 32-bit Microsoft Desktop Database Drivers include Microsoft Access, FoxPro,
	dBASE, Paradox, Microsoft Excel, and text drivers. The 16-bit Microsoft Desktop
	Database Drivers include Microsoft Access, Foxpro, dBASE, Paradox, Btrieve,
	Microsoft Excel, and text drivers.
	
	All of the Desktop Database Drivers are implemented using the Microsoft Jet
	Database Engine. For 16-bit Desktop Database Drivers, ODBCJT16.DLL is the driver
	DLL file and MSAJT200.DLL is the 16-bit Jet Engine DLL file. Note that there is
	no memory leak in ODBCJT16.DLL during a connection or disconnection.
	
	Steps to Check for 32-Bit ODBC Driver Memory Leaks
	--------------------------------------------------
	
	To determine memory leaks of the 32-bit ODBC driver, start the Process Viewer in
	the Windows NT Resource Kit. In addition, start the 32-bit ODBC Test application
	and to the following:
	
	1. In Process Viewer, select ODBCTE32. Click Refresh and note the "Heap Usage"
	  number.
	
	2. In the 32-bit ODBC Test application, do the following:
	
	  a. From the Connect menu, select SQLAllocEnv.
	
	  b. From the Connect menu, select SQLAllocConnect.
	
	  c. From the Connect menu, select SQLConnect. Connect to any Microsoft desktop
	     data source. You may also select SQLDriverConnect, instead of SQLConnect.
	
	  d. From the Connect menu, select SQLDisconnect, SQLFreeConnect, and
	     SQLFreeEnv.
	
	3. In Process Viewer, click Refresh. Note the "Heap Usage" number again.
	
	Process Viewer now displays memory leaks in the Desktop Database Drivers.
	
	
	Additional query words: 2.00.2317 sql 6.00 windows nt pviewer
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	
	=============================================================================
	
