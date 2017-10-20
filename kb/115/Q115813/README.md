---
layout: page
title: "Q115813: INF: Checking for an ODBC Driver's Transaction Support"
permalink: /kb/115/Q115813/
---

## Q115813: INF: Checking for an ODBC Driver's Transaction Support

{% raw %}

	Article: Q115813
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.5,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 1.5, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The appropriate way to check for a driver's support for transactions is to check
	the return value from the call to SQLGetInfo with fSQLType=SQL_TXN_CAPABLE.
	Relying upon SQLTransact with fType=SQL_ROLLBACK to return SQL_ERROR to check
	the transaction support in not recommended and can lead to unexpected results.
	
	MORE INFORMATION
	================
	
	With ODBC Driver Manager (ODBC.DLL) version 1.5 and later, in case of drivers
	that export SQLTransact function, SQLTransact with fType=SQL_ROLLBACK will
	return SQL_SUCCESS. However, the actual driver may not support transactions.
	SQLGetInfo with fSQLType=SQL_TXN_CAPABLE with return correct information that
	the driver does not support transactions. This is applicable in general to
	drivers that support multiple DBMSs.
	
	For example, Database Desktop Drivers fall into the category where SQLTransact is
	exported, and hence, SQLTransact with fType=SQL_ROLLBACK will return
	SQL_SUCCESS, though the drivers do not support the transactions. Calling
	SQLGetInfo with fSQLType=SQL_TXN_CAPABLE correctly return 0 to indicate that the
	transactions are not supported.
	
	Additional query words: 1.50 Driver Manager VB Visual Basic Access ODBC Paradox Text Excel Btrieve Foxpro dBase Simba
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200 kbODBC150
	Version           : WINDOWS:1.5,2.0
	
	=============================================================================
	

{% endraw %}
