---
layout: page
title: "Q111724: BUG: Extra Block of 256 Bytes Used by Access ODBC Driver"
permalink: kb/111/Q111724/
---

## Q111724: BUG: Extra Block of 256 Bytes Used by Access ODBC Driver

	Article: Q111724
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCDBASE: 2048 (1.01.1928)
	
	SYMPTOMS
	========
	
	The following sequence of calls,
	
	  SQLAllocEnv, SQLAllocConnect, SQLConnect (or SQLDriverConnect),
	  SQLDisconnect, SQLFreeConnect, and SQLFreeEnv
	
	will cause an extra block of 256 bytes to be used by the application that made
	the calls. This happens only with the Access ODBC Driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Access Driver version
	1.01.1928. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	Start the Heapwalker (for memory analysis). Start the ODBC Test application.
	Instead of using ODBC Test you can use other ODBC application.
	
	1. From the Connect menu, choose SQLAllocEnv.
	
	2. From the Connect menu, choose SQLAllocConnect.
	
	3. From the Connect menu, choose SQLConnect and connect to any Microsoft Access
	  data source. You may alternatively choose SQLDriverConnect instead of
	  SQLConnect.
	
	4. From the Connect menu, choose SQLDisconnect, SQLFreeConnect, and SQLFreeEnv.
	
	Heapwalker shows one more memory block of 256 bytes for ODBCTST. Every time you
	repeat steps 2 through 4, a new memory block of 256 bytes stays allocated. This
	block is fixed and is in the global heap. These blocks are freed on program
	termination.
	
	NOTE: This happens only with the Microsoft ODBC Access driver. It does not happen
	with any of the other desktop database drivers: viz., DBASE, Paradox, Btrieve,
	FoxPro, XLS, and Text.
	
	Additional query words: 1.01.1928 DDD VISUAL C++ 1.5
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
