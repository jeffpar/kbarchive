---
layout: page
title: "Q114630: PRB: ODBC SQL Server Driver and Access Violation on SQL Server"
permalink: /kb/114/Q114630/
---

## Q114630: PRB: ODBC SQL Server Driver and Access Violation on SQL Server

{% raw %}

	Article: Q114630
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-2000
	
	1.01.2807
	
	WINDOWS
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the SQL Server ODBC driver with an ODBC enabled application to access
	SQL Server for Windows NT, an update on a table with a trigger which calls a
	stored procedure, which in turn contains an unmatched COMMIT TRAN or ROLLBACK
	TRAN statement, may cause an access violation to be encountered on SQL Server,
	causing SQL server to terminate.
	
	In case of Access and Visual Basic, an attempt to update the SQL server table,
	will generate the following message,
	
	  ODBC - Update failed.
	
	followed by:
	
	  [Microsoft][ODBC SQL Server Driver]Communication Link Failure.
	
	For ODBC application writer, the following steps will encounter the behavior:
	
	     // prepared execution to update the table
	     SQLPrepare: update <tablename> set <col>= ? where <col>=?
	
	     //Set parameters for the above prepared stmt
	     SQLSetParam:
	
	     //Begin transaction
	     SQLSetConnectOption:
	        fOption: SQL_AUTOCOMMIT
	        vParam : FALSE or 0
	
	     //Execute the previously prepared stmt
	     SQLExecute:
	
	This will return
	
	  SQL_ERROR, with szSqlState = "08S01", *pfNativeError = 0, *pcbErrorMsg = 61,
	  szErrorMsg = [Microsoft][ODBC SQL Server Driver] Communication link failure.
	
	WORKAROUND
	==========
	
	This does not happen, if on SQL Server, the ROLLBACK TRAN or COMMIT TRAN
	statement itself is contained in the trigger instead of being in the stored
	procedure that is called by the trigger.
	
	This happens only for prepared execution in ODBC. Thus, another workaround is to
	revoke stored procedure permissions from the users which will result in a
	non-prepared execution, and it will not cause access violation on the SQL
	Server.
	
	Additional query words: 1.01.2807
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
