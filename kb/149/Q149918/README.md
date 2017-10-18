---
layout: page
title: "Q149918: BUG: SQLState S1011 on SQL_AUTOCOMMIT_OFF with Active Results"
permalink: kb/149/Q149918/
---

## Q149918: BUG: SQLState S1011 on SQL_AUTOCOMMIT_OFF with Active Results

	Article: Q149918
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity 
	-------------------------------------------------------------------------------
	
	Bug#: 1686 (2.00)
	
	SYMPTOMS
	========
	
	If an application does the following in the Microsoft Access 2.0 or 3.0 version
	ODBC drivers:
	
	     SQLExecDirect(hstmt, "select * from any_table", SQL_NTS);
	     SQLFetch(hstmt);
	     SQLSetConnectOption(hstmt, SQL_AUTOCOMMIT, SQL_AUTOCOMMIT_OFF);
	
	The error generated is:
	
	  szSqlState = "S1011", *pfNativeError = 59, *pcbErrorMsg = 76
	  szErrorMsg="[Microsoft][ODBC Microsoft Access 7.0 Driver]Operation invalid at
	  this time."
	
	CAUSE
	=====
	
	The Access ODBC driver generates an S1011 error if an attempt is made to turn
	off the ODBC autocommit connection option while a result set is active.
	
	WORKAROUND
	==========
	
	Either set the autocommit option before opening the result set, or close the
	result set before issuing the SQLSetConnectOption command.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the ODBC Access 2.00.2317
	driver. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00.2317 3.40.2505 ms access
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch
	Version           : WINDOWS:
	Issue type        : kbbug
	
	=============================================================================
	
