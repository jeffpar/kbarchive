---
layout: page
title: "Q169468: BUG: SQL Server ODBC Driver AVs When Inserting from a Remote SP"
permalink: /kb/169/Q169468/
---

## Q169468: BUG: SQL Server ODBC Driver AVs When Inserting from a Remote SP

{% raw %}

	Article: Q169468
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.65
	Operating System(s): 
	Keyword(s): kbprogramming kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, version 2.65 
	-------------------------------------------------------------------------------
	
	BUG #: 16924 (SQL)
	
	SYMPTOMS
	========
	
	The SQL Server ODBC driver may generate an access violation (AV) error if an
	application is inserting data from a remote stored procedure that contains ORDER
	BY clause. The access violation occurs when the application calls SQLExecDirect
	or SQLPrepare/SQLExecute to execute the INSERT statement.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft SQL Server ODBC
	driver version 2.65. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the ORDER BY clause from the remote stored
	procedure.
	
	Additional query words: SQLFetch SQLExecDirect 2.65.240
	
	======================================================================
	Keywords          : kbprogramming kbBug kbISS 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbODBCSQLServ265
	Version           : WINDOWS:2.65
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
