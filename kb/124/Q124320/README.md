---
layout: page
title: "Q124320: BUG: No Error Message When Changing Qualifier on 2nd hstmt"
permalink: kb/124/Q124320/
---

## Q124320: BUG: No Error Message When Changing Qualifier on 2nd hstmt

	Article: Q124320
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# QJET: 1796 (2.002317)
	
	SYMPTOMS
	========
	
	When an attempt is made to change the current qualifier on the second statement
	handle with results pending on the first statement handle, SQL_ERROR is
	returned, as expected. However, when SQLError is called to retrieve the error
	information, no error message or SQLState information is returned.
	
	For example, consider the following sequence of calls:
	
	     SQLAllocEnv(phenv)
	     SQLAllocConnect(henv,phdbc)
	     SQLAllocStmt(hdbc,phstmt1)
	
	     // assume there exists a table called test
	     SQLExecDirect(hstmt1,"Select * from test",cbSQLStr)
	
	     // Attempt to change current qualifier, let C:\NEW be a valid qualifier
	     // This returns SQL_ERROR as expected
	     SQLSetConnectOption(hdbc,SQL_CURRENT_QUALIFIER,"C:\NEW")
	
	Returns SQL_ERROR
	
	     SQLError(henv,hdbc,hstmt1,szSQLState,pfNativeError,SZErrorMsg)
	
	Returns SQLSTATE= 24000, szErrorMsg="Invalid cursor state"
	
	This is as expected.
	
	However, at this point, if another statement handle is allocated and another
	attempt is made to change the current qualifier, the SQLSetConnectOption call
	returns SQL_ERROR, but it does not return any error information when SQLError is
	called for the second statement handle.
	
	     SQLAllocStmt(hdbc,phstmt2)
	
	     // Returns SQL_ERROR
	     SQLSetConnectOption(hdbc,SQL_CURRENT_QUALIFIER,"C:\NEW")
	
	     // Does not return any error information
	     SQLError(henv,hdbc,hstmt2,szSQLState,pfNativeError,SZErrorMsg)
	
	This should return the same error information as for the previous
	SQLSetConnectOption call.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC DESKTOP Database Drivers
	version 2.00.2317. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00.2309 ODBC MFC MSVC VISUAL C++ Btrieve Paradox Text Excel FoxPro dBase Windows NT
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	
