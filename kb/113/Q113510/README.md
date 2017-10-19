---
layout: page
title: "Q113510: BUG: SQLFreeStmt After SQLExecute/SQLExecDirect May Cause GPF"
permalink: /kb/113/Q113510/
---

## Q113510: BUG: SQLFreeStmt After SQLExecute/SQLExecDirect May Cause GPF

	Article: Q113510
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCDBASE: 2062 (1.01.1928)
	
	SYMPTOMS
	========
	
	On certain Btrieve Tables, the following sequence of operations (or equivalent)
	can generate a general protection fault (GP fault) in BTRV110.DLL:
	
	1. Allocate a Env, Hdbc, and Stmt handle using SQLAllocEnv, SQLAllocConnect, and
	  SQLAllocStmt respectively or an equivalent sequence of calls to prepare to
	  execute a SQL statement.
	
	2. Execute SQLExecDirect or SQLExecute to execute a selection query (select *
	  from <tablename>).
	
	3. A subsequent call to SQLFreeStmt with fOption = SQL_CLOSE.
	
	The exact message of the error generated is:
	
	  <Application name> caused a general protection fault in module
	  BTRV110.DLL at 0011:0B7A.
	
	NOTE: The conditions under which this can happen are highly dependent on the
	combination of specific data in certain tables and the structure of the ddf
	files.
	
	WORKAROUND
	==========
	
	Try copying the data out and moving into another table. Run your query against
	the new table.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Btrieve Driver version
	1.01.1928. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.01.1928 DDD VB Access ODBC
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
