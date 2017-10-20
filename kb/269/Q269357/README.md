---
layout: page
title: "Q269357: INFO: INSERT/DELETE/UPDATE behavior in SQL Server ODBC apps"
permalink: /kb/269/Q269357/
---

## Q269357: INFO: INSERT/DELETE/UPDATE behavior in SQL Server ODBC apps

{% raw %}

	Article: Q269357
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbMDAC kbODBC kbSQLServ kbGrpDSVCDB kbGrpDSMDAC kbDSupport
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With the Microsoft ODBC Driver for SQL Server, the SQLExecDirect and SQLExecute
	functions return SQL_NO_DATA_FOUND when no rows are affected by an UPDATE,
	DELETE, or INSERT statement.
	
	MORE INFORMATION
	================
	
	The following are examples of where an UPDATE, DELETE, or INSERT would not
	affect any rows:
	
	  UPDATE pubs..publishers SET pub_id='1232' WHERE 1=2
	
	  INSERT INTO temptable (SELECT * FROM pubs..publishers WHERE 1=2)
	
	In such cases, the return code for SQLExecDirect or SQLExecute would be
	SQL_NO_DATA_FOUND (instead of SQL_SUCCESS). This is in accordance with the ODBC
	specification.
	
	This change was made in the Microsoft ODBC Driver for SQL Server version
	3.50.0305 and later.
	
	If this change affects your application, you can either add functionality in your
	code to process the SQL_NO_DATA_FOUND return code, or you can use the SET
	NOCOUNT ON statement so that the return code will be SQL_SUCCESS. The use of SET
	NOCOUNT ON tells the server not to return the number of rows that are affected
	by the UPDATE, DELETE, or INSERT statement; therefore, the ODBC driver just
	returns SQL_SUCCESS.
	
	Additional query words: SQLSRV32 MSDASQL DRIVER
	
	======================================================================
	Keywords          : kbMDAC kbODBC kbSQLServ kbGrpDSVCDB kbGrpDSMDAC kbDSupport 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbODBCSQLServ350
	Version           : :3.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
