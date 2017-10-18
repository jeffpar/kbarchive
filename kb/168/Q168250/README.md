---
layout: page
title: "Q168250: FIX: IIS Performance Degrades with a Bad Connection"
permalink: kb/168/Q168250/
---

## Q168250: FIX: IIS Performance Degrades with a Bad Connection

	Article: Q168250
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0; winnt:3.0
	Operating System(s): 
	Keyword(s): kbinterop kbprogramming
	Last Modified: 12-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	BUG #: 4636 (odbc3)
	
	SYMPTOMS
	========
	
	Microsoft Internet Information Server (IIS) version 3.0 may experience degrading
	performance when there is a bad connection in the ODBC connection pool and the
	backend database server for the bad connection is not available for connecting.
	
	CAUSE
	=====
	
	With connection pooling enabled, whenever IIS users try to connect to the same
	backend database server, the ODBC driver manager tests the existing connection
	in the pool before reusing the connection. If there is a bad connection in the
	pool and the backend database server for the bad connection is unavailable, the
	ODBC driver manager keeps testing the bad connection, and IIS essentially
	creates a thread for each attempted connection. The testing connection process
	takes time, and the IIS threads are also being generated continuously, which
	causes the performance to degrade.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Open Database
	Connectivity version 3.0. This problem has been corrected in U.S. Service Pack 1
	for Microsoft Open Database Connectivity, version 3.0. For more information,
	contact your primary support provider.
	
	
	MORE INFORMATION
	================
	
	A new registry key and ODBC API have been introduced to avoid testing the
	connection continuously. The new registry key is under:
	
	  HKEY_LOCAL_MACHINE\Software\Odbc\ODBCINST.INI \ODBC Connection Pooling\Retry
	  Wait
	
	The Retry Wait registry key is a value of REG_SZ and the default value is 120 (in
	second). The value for the Retry Wait registry key can be set by calling
	ODBCSetTryWaitValue ODBC API. The ODBCSetTryWaitValue API takes a DWORD
	argument.
	
	If there is a bad connection in the pool, the ODBC driver manager will attempt to
	connect before the connection can be reused for the first time. If the
	connection still fails, the ODBC driver manager returns the error and marks the
	connection with the time. From that point until the RetryWait value expires, the
	ODBC driver manager returns a failure without testing the connection.
	
	Additional query words: timeout asp
	
	======================================================================
	Keywords          : kbinterop kbprogramming 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0; winnt:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
