---
layout: page
title: "Q166083: INF: How to Enable Connection Pooling in an OLE DB Application"
permalink: /kb/166/Q166083/
---

## Q166083: INF: How to Enable Connection Pooling in an OLE DB Application

	Article: Q166083
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.1,3.0
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	- Microsoft OLE DB, version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to enable ODBC connection pooling in an OLE DB
	application.
	
	MORE INFORMATION
	================
	
	An OLE DB application can enable ODBC connection pooling if the OLE DB
	application is using the OLE DB provider for ODBC. The OLE DB application that
	uses the ODBC provider is like an ODBC application because the ODBC provider
	internally calls the ODBC API to perform data manipulation.
	
	The ODBC provider does not expose any property to allow an OLE DB application to
	enable connection pooling. In order to enable connection pooling, the OLE DB
	application needs to use the ODBC API to enable connection pooling before using
	the ODBC provider. Because connection pooling is a process-level attribute, any
	subsequent connection made through the ODBC provider will be using connection
	pooling.
	
	The following code demonstrates how an OLE DB application can enable connection
	pooling:
	
	     SQLAllocEnv(&henv);
	
	     //enable connection pooling
	        SQLSetEnvAttr(
	           NULL,
	           SQL_ATTR_CONNECTION_POOLING,
	           (SQLPOINTER)SQL_CP_ONE_PER_DRIVER,
	           SQL_IS_INTEGER);
	
	     SQLAllocConnect(henv,&hdbc);
	
	     // connect to the OLE DB ODBC provider
	           OleInitialize(NULL);
	  ...
	        hr = CoCreateInstance( CLSID_MSDASQL, NULL, CLSCTX_INPROC_SERVER,
	           IID_IDBInitialize, (void **)&pIDBInit );
	  ...
	        CoUninitialize();
	     //finish OLE DB stuff
	
	       SQLFreeConnect(hdbc);
	       SQLFreeEnv(henv);
	
	     //disable connection pooling
	        SQLSetEnvAttr(
	           NULL,  // make process level cursor pooling
	           SQL_ATTR_CONNECTION_POOLING,
	           (SQLPOINTER)SQL_CP_OFF,
	           SQL_IS_INTEGER);
	
	Additional query words: viper asp pool ado
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbAudDeveloper kbODBCSearch kbOLEDBSearch kbOLEDB110 kbODBC300
	Version           : WINDOWS:1.1,3.0
	Issue type        : kbhowto
	
	=============================================================================
	
