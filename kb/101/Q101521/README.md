---
layout: page
title: "Q101521: INF: When and How an ODBC Driver DLL Gets Unloaded"
permalink: /kb/101/Q101521/
---

## Q101521: INF: When and How an ODBC Driver DLL Gets Unloaded

{% raw %}

	Article: Q101521
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	A driver gets unloaded by the ODBC Driver Manager when an application calls the
	ODBC SQLDisconnect() function by passing the handle to the database connection
	made by that driver. This article discusses how the driver is unloaded.
	
	MORE INFORMATION
	================
	
	All ODBC calls by an application are intercepted and routed by the ODBC Driver
	Manager (DM). When an application calls the SQLDisconnect() function on a
	particular connection, the DM calls the driver's SQLDisconnect() function.
	
	When the driver returns a status of SQL_SUCCESS or SQL_SUCCESS_WITH_INFO on this
	call, the DM then calls the driver's SQLFreeConnect() and SQLFreeEnv() in quick
	succession. Also, since the driver has made a successful disconnect on the call
	to SQLDisconnect(), the DM calls the FreeLibrary() function in the Windows API
	to reduce the reference count of the driver DLL by one. When the reference count
	of the Driver DLL gets to zero (0) after repeated calls to SQLDisconnect() by
	the application for all connections made by that driver, Windows will unload the
	driver DLL.
	
	Driver developers may note minor implications arising out of the above. Note that
	every time an application calls SQLDisconnect(), the DM, besides calling the
	driver's SQLDisconnect(), also calls the Driver's SQLFreeConnect() and
	SQLFreeEnv() immediately. Thus SQLFreeEnv() is called on every SQLDisconnect().
	When the application calls SQLFreeConnect() and SQLFreeEnv(), the DM does its
	own cleanup and does not make the same calls to the Driver because these calls
	would have been made at the time of SQLDisconnect().
	
	If an ODBC application terminates without calling SQLDisconnect on all open
	connections, Windows will unload the Driver Manager if its reference count is
	reduced to zero. However, the Driver Manager cannot unload the driver DLL
	because the WEP of the Driver Manager (or any Windows DLL) cannot call the
	FreeLibrary function.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
