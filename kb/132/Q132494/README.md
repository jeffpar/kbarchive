---
layout: page
title: "Q132494: PRB: Memory Leaks in SQL Srv Driver During Connect/Disconnect"
permalink: /kb/132/Q132494/
---

## Q132494: PRB: Memory Leaks in SQL Srv Driver During Connect/Disconnect

{% raw %}

	Article: Q132494
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0,2.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	2.00.1912 2.50.0121
	
	WINDOWS
	
	kbprb kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following sequence of calls:
	
	  SQLAllocEnv, SQLAllocConnect, SQLConnect (or SQLDriverConnect),
	  SQLDisconnect, SQLFreeConnect, and SQLFreeEnv
	
	can lead to a 4K memory leak in the following Microsoft SQL Server drivers:
	
	- 16-bit SQL Server Driver 2.00.1912, ships with SQL Server version 4.21a
	
	- 32-bit SQL Server Driver 2.00.1912, ships with SQL Server version 4.21a
	
	- 16-bit SQL Server Driver 2.50.0121, ships with SQL Server version 6.0
	
	CAUSE
	=====
	
	STEPS TO CHECK 32-BIT SQL SERVER DRIVER MEMORY LEAKS:
	
	Start the Process Viewer in the NT Resource Kit. Start the 32-bit ODBC Test
	application.
	
	1. Inside P-Viewer, select ODBCTE32, click Refresh, and write down the number of
	  "Heap Usage."
	
	2. Inside 32-bit ODBC Test:
	
	  a. From the Connect menu, select SQLAllocEnv.
	
	  b. From the Connect menu, select SQLAllocConnect.
	
	  c. From the Connect menu, select SQLConnect and connect to SQL Server data
	     source. Alternatively, you can select SQLDriverConnect instead of
	     SQLConnect.
	
	  d. From the Connect menu, select SQLDisconnect, SQLFreeConnect, and
	     SQLFreeEnv.
	
	3. Go back to P-Viewer, click Refresh, again write down the number of "Heap
	  Usage."
	
	Process Viewer will show 4K memory leaks in the SQL Server Drivers mentioned
	above. Every time you repeat steps 2.a through 2.d, another 4K of memory stays
	allocated.
	
	NOTE: There is no memory leakage in the 32-bit SQL Server driver 2.50.0121 that
	ships with SQL Server version 6.0.
	
	
	WORKAROUND
	==========
	
	Share ODBC connections as much as possible in the application.
	
	Additional query words: 2.00.1912 2.50.0121 sql6 6.00 4.21a
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200 kbODBC250
	Version           : WINDOWS:2.0,2.5
	
	=============================================================================
	

{% endraw %}
