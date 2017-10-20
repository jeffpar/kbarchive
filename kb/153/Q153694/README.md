---
layout: page
title: "Q153694: FIX: SQLNumResultCols Fails with Incorrect Syntax Near 'SET'"
permalink: /kb/153/Q153694/
---

## Q153694: FIX: SQLNumResultCols Fails with Incorrect Syntax Near 'SET'

{% raw %}

	Article: Q153694
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.65
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.65 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Calling SQLNumResultCols after SQLPrepare of a SELECT statement that contains a
	subquery in the select list will fail with:
	
	  szSqlState = "37000", pfNativeError = 156
	  szErrorMsg="[Microsoft][ODBC SQL Server Driver][SQL Server]
	  Incorrect syntax near the keyword 'SET'."
	
	CAUSE
	=====
	
	When the SQL Server ODBC driver constructs the T-SQL statement that will be sent
	to the server to resolve the number of columns that will be returned in the
	resultset, it incorrectly parses the initial query and excludes the final table
	name. For example:
	
	     SQLPrepare(hstmt, "SELECT t1.c1, (SELECT t2.c1 FROM t2)
	                        FROM t1", 44)
	     SQLNumResultCols(hstmt, pcol1)
	
	This results in the following statement being sent to the server on the call to
	SQLNumResultCols:
	
	     SET FMTONLY ON SELECT t1.c1, (SELECT t2.c1 FROM t2)
	     FROM SET FMTONLY OFF
	
	Hence, causing SQL Server to report "Incorrect syntax near the Keyword 'SET'."
	
	WORKAROUND
	==========
	
	Where possible convert the offending query to a SQL Server VIEW.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SQL Server ODBC Driver
	version 2.65.0201. This problem was corrected in U.S. Service Pack 1 for
	Microsoft SQL Server version 6.5. For more information, contact your primary
	support provider.
	
	Additional query words: 6.50 sp1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch
	Version           : WINDOWS:2.65
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
