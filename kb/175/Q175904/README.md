---
layout: page
title: "Q175904: BUG: Multiple threads Cause Connection Busy Error in the Driver"
permalink: /kb/175/Q175904/
---

## Q175904: BUG: Multiple threads Cause Connection Busy Error in the Driver

{% raw %}

	Article: Q175904
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5,3.0; winnt:6.5
	Operating System(s): 
	Keyword(s): kbinterop kbSQLServ650bug
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server version 6.5 
	- Microsoft Open Database Connectivity, versions 2.5, 3.0 
	-------------------------------------------------------------------------------
	
	BUG #: 17322 (6.50)
	
	SYMPTOMS
	========
	
	Multiple threads, each allocating its own HSTMT using server cursors (active
	statements) sharing a single connection, cause the following error on prepared
	execution of a SQL statement:
	
	  S1000: [Microsoft][ODBC SQL Server Driver] Connection is busy with results
	  for another hstmt
	
	WORKAROUND
	==========
	
	To work around this problem, use SQLExecDirect statements instead of SQLPrepare
	and SQLExecute when using multiple active HSTMTs (on different threads) and
	server cursors.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SQL Server version 6.5 and Open
	Database Connectivity version 3.0. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: timing multi-threaded
	
	======================================================================
	Keywords          : kbinterop kbSQLServ650bug 
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ650 kbODBCSearch kbODBC300 kbODBC250
	Version           : WINDOWS:2.5,3.0; winnt:6.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
