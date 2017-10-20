---
layout: page
title: "Q158622: BUG: Cursor Library Fails to Close Buffer"
permalink: /kb/158/Q158622/
---

## Q158622: BUG: Cursor Library Fails to Close Buffer

{% raw %}

	Article: Q158622
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5
	Operating System(s): 
	Keyword(s): kbSDKODBC kbBug kbISS
	Last Modified: 27-JUL-2001
	
	2.50
	WINDOWS
	kbusage kbbug2.50 kbother
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC SDK version 2.5 
	-------------------------------------------------------------------------------
	
	BUG #: 4317 (ODBC3.0 SDK)
	
	SYMPTOMS
	========
	
	Under certain situations, multithreaded applications using the ODBC Cursor
	Library generate the following error message:
	
	  SQLFreeStmt:
	  szSqlState = S1000
	  pfNativeError = 0
	  szErrorMsg = [Microsoft][ODBC Cursor Library]
	  General error: Unable to close or remove file buffer.
	
	Applications using MFC database classes with snapshots use the ODBC Cursor
	Library, so they may also generate this error message.
	
	WORKAROUND
	==========
	
	If you are using the ODBC API, change the connection option to use driver
	cursors, such as SQLSetConnectOption( .. SQL_ODBC_CURSORS, SQL_CUR_USE_DRIVER).
	Use Dynasets when using MFC Database Classes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft ODBC SDK 2.5. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following sequence outlines the scenario:
	
	1. The primary thread connects to the ODBC driver using the ODBC Cursor Library.
	
	2. The primary thread runs queries and generates result sets.
	
	3. The primary thread creates a thread that launches processes (and need not use
	  any ODBC calls) with the CreateProcess() API, with the bInheritHandles
	  parameter set to TRUE.
	
	4. When the primary thread tries to close the result set by issuing
	  SQLFreeStmt() SQL_CLOSE, the error message noted above may be generated.
	
	For more information on the CreateProcess() API, refer to the Win 32 SDK
	documentation.
	
	
	Additional query words: 2.50 VC
	
	======================================================================
	Keywords          : kbSDKODBC kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbSDKSearch kbSDKODBCSearch kbSDKODBC250
	Version           : :2.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
