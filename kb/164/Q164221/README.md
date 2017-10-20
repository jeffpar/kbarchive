---
layout: page
title: "Q164221: INFO: How to Enable Connection Pooling in an ODBC Application"
permalink: /kb/164/Q164221/
---

## Q164221: INFO: How to Enable Connection Pooling in an ODBC Application

{% raw %}

	Article: Q164221
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 07-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to enable connection pooling in an ODBC application.
	
	MORE INFORMATION
	================
	
	Microsoft ODBC version 3.0 introduced the concept of connection pooling.
	Connection pooling enables an ODBC application to reuse an existing
	connection from a pool, so the ODBC application does not have to go
	through the complete connection process for any subsequent connection.
	
	When an ODBC application disconnects a connection, the connection is saved
	into a pool instead of actually disconnected. How long this connection remains
	in the pool depends on the CPTimeout property of the ODBC driver. When the
	timeout expires, the connection is closed and removed from the pool. The ODBC
	application can use SQLConfigDriver to change the value of CPTimeout, and this
	value applies to all the ODBC applications that are using the specified ODBC
	driver.
	
	The default value for the CPTimeout is 60 seconds.
	
	
	Connection pooling is very useful when an ODBC application like Microsoft
	Internet
	Information Server (for example) connects and disconnects frequently. Microsoft
	Internet Information Server (IIS) version 3.0 with Active Server Pages (ASP)
	takes advantage of connection pooling. You can enable connection pooling for
	IIS users by changing the value of StartConnectionPool to 1. StartConnectionPool
	is located under:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\W3SVC\ASP\Parameters
	
	An ODBC application can use SQLSetEnvAttr to enable connection pooling. Following
	is an example of how to enable connection pooling in an ODBC application:
	
	     #include <windows.h>
	     #include <stdio.h>
	     #include <sql.h>
	     #include <sqlext.h>
	
	     void main()
	     {
	     SQLHENV   henv;
	     SQLHDBC   hdbc;
	     int       i=0;
	
	     if (!SQL_SUCCEEDED(SQLSetEnvAttr(
	        NULL,  // make process level cursor pooling
	        SQL_ATTR_CONNECTION_POOLING,
	        (SQLPOINTER)SQL_CP_ONE_PER_DRIVER,
	        SQL_IS_INTEGER)))
	     printf("SQLSetEnvAttr/SQL_ATTR_CONNECTION_POOLING error\n");
	
	     if (!SQL_SUCCEEDED(SQLAllocHandle(SQL_HANDLE_ENV, NULL, &henv)))
	        printf("SQLAllocHandle error\n");
	
	     // set the ODBC behavior version.
	     if (!SQL_SUCCEEDED(SQLSetEnvAttr(henv, SQL_ATTR_ODBC_VERSION,
	     (SQLPOINTER) SQL_OV_ODBC2, SQL_IS_INTEGER)))
	        printf("SQLSetEnvAttr/SQL_ATTR_ODBC_VERSION error\n");
	
	     //set the matching condition for using an existing connection in the
	     pool
	     if (!SQL_SUCCEEDED(SQLSetEnvAttr(henv, SQL_ATTR_CP_MATCH,
	     (SQLPOINTER) SQL_CP_RELAXED_MATCH, SQL_IS_INTEGER)))
	     printf("SQLSetEnvAttr/SQL_ATTR_CP_MATCH error\n");
	
	  while (i < 10) {
	     if (!SQL_SUCCEEDED(SQLAllocHandle(SQL_HANDLE_DBC,
	        henv, &hdbc)))
	        printf("SQLAllocHandle error\n");
	        if (!SQL_SUCCEEDED(SQLConnect(hdbc,
	     (unsigned char*)"testing\0", SQL_NTS,
	        (unsigned char*)"sa\0", SQL_NTS,
	     (unsigned char*)"\0", SQL_NTS)))
	        printf("SQLConnect error\n");
	     else
	        printf("Connect successfully %d times\n", i);
	     //the first time, the application calls SQLDisconenct, it will return
	                   //the connection to the //pool
	     SQLDisconnect(hdbc);
	
	     if (!SQL_SUCCEEDED(SQLFreeHandle(SQL_HANDLE_DBC, hdbc)))
	        printf("SQLFreeHandle error\n");
	     i++;
	     }
	     SQLFreeHandle(SQL_HANDLE_ENV, henv);
	     }
	
	When the ODBC application calls SQLDisconnect the first time, the connection is
	saved to the pool. Any subsequent SQLConnect/SQLDisconnect that matches the
	required condition will reuse the first connection.
	
	
	Additional query words: viper asp
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
