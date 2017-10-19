---
layout: page
title: "Q157588: FIX: SQLDescribeCol Returns Error on Prepared Outer Join"
permalink: /kb/157/Q157588/
---

## Q157588: FIX: SQLDescribeCol Returns Error on Prepared Outer Join

	Article: Q157588
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.65; winnt:6.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server version 6.5 
	- Microsoft Open Database Connectivity, version 2.65 
	-------------------------------------------------------------------------------
	
	BUG #: 16200 (2.65.0201)
	
	SYMPTOMS
	========
	
	If you call SQLDescribeCol after preparing an outer join statement, you receive
	the following error message:
	
	  szSqlState = "37000", *pfNativeError = 107, *pcbErrorMsg = 135
	  szErrorMsg="[Microsoft][ODBC SQL Server Driver][SQL Server]
	  The column prefix 'c1' does not match with a table name or alias name used in
	  the query."
	
	WORKAROUND
	==========
	
	To work around this problem, call SQLDescribeCol after running the prepared
	statement.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SQL Server version 6.5
	and the Open Database Connectivity driver version 2.65. This problem has been
	corrected in U.S. Service Pack 2 for Microsoft SQL Server version 6.5. For more
	information, contact your primary support provider.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ650 kbODBCSearch
	Version           : WINDOWS:2.65; winnt:6.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
