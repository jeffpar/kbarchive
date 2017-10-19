---
layout: page
title: "Q161634: INF: Connection Pooling Requires Same Henv and Driver"
permalink: /kb/161/Q161634/
---

## Q161634: INF: Connection Pooling Requires Same Henv and Driver

	Article: Q161634
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the relationships of connection pooling, environments,
	and drivers.
	
	MORE INFORMATION
	================
	
	Connection pooling is one the new features introduced in ODBC 3.0. Connection
	pooling enables an ODBC application to reuse a connection from a pool of
	connections. Once a connection has been created and placed in the pool, an ODBC
	application can reuse the same driver and the connection within the same
	environment (henv) without performing the complete connection process.
	Connection can never be reused between different henv or different drivers.
	
	You can use the SQLSetEnvAttr function call to enable connection pooling. There
	are two attributes available for connection pooling under the SQLSetEnvAttr
	function: SQL_CP_ONE_PER_HENV and SQL_CP_ONE_PER_DRIVER. The difference between
	these two attributes is a performance/comparison consideration, and the use of
	any one of these options does not change which connection is reused.
	
	With the SQL_CP_ONE_PER_HENV attribute, a comparison pool is created for each
	henv. The pool may include connections from different drivers within the same
	environment. The ODBC driver manager searches this pool for the driver that
	matches the requested connection. You normally use this option if there are many
	henvs but few drivers, because it saves you the number of comparisons (with the
	cost of memory for the pools).
	
	With the SQL_CP_ONE_PER_DRIVER attribute, a comparison pool is created for each
	driver. The pool may include different henvs that use the same driver. The ODBC
	driver manager searches this pool for the henv that matches the requested
	connection. You normally use this option if there are many drivers but few
	henvs, for the same reason in the previous paragraph.
	
	The ODBC 3.0 API online Help version 4.00.950 mistakenly states that you can
	share connections between different environments with the SQL_CP_ONE_PER_HENV
	attribute. Connections can only be reused within the same henv and the same
	driver. Connections can never be reused between different henvs or different
	drivers.
	
	Additional query words: viper sql memory leak
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
