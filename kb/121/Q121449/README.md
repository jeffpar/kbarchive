---
layout: page
title: "Q121449: BUG: SQL Server: Certain Outer Joins Can Cause SQL_ERROR"
permalink: /kb/121/Q121449/
---

## Q121449: BUG: SQL Server: Certain Outer Joins Can Cause SQL_ERROR

	Article: Q121449
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# Addon_Bugs: 10175 (2.00.1912)
	
	SYMPTOMS
	========
	
	A left outer join between two tables with two columns from each table
	participating in the outer join will generate a syntax error. This happens when
	the outer join escape clause is used.
	
	SQLExecDirect
	-------------
	
	  SELECT * FROM {oj testoj1 LEFT OUTER JOIN testoj2 ON
	                    testoj1.col1= testoj2.col1
	                       AND
	                       testoj1.col2 = testoj2.col2}
	
	This generates the syntax error:
	
	  SQLSTATE = 37000 NativeError = 102
	  ErrorMsg =[Microsoft][ODBC SQL Server Driver][SQL Server] Incorrect syntax
	  near '*='."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ODBC SQL Server Driver
	version 2.00.1912. This problem does not occur in any 1.x version drivers. We
	are researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 2.00.1912 Windows NT
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	
