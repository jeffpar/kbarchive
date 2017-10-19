---
layout: page
title: "Q124322: BUG: SQLNumResultCols on a Prepared SELECT with ORDER in Name"
permalink: /kb/124/Q124322/
---

## Q124322: BUG: SQLNumResultCols on a Prepared SELECT with ORDER in Name

	Article: Q124322
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# QJET: 1813 (2.00.2317)
	
	SYMPTOMS
	========
	
	When a SQLNumResultCols call is executed on a statement handle, on which you
	perform a SELECT query on a table and the word ORDER or GROUP appears anywhere
	in the table's name, SQLNumResultCols returns one of the following errors:
	
	  SQLState=37000,
	  szErrorMsg=[Microsoft][ODBC Microsoft Access 2.0 Driver] Syntax error in FROM
	  clause
	
	-or-
	
	  SQLState=S0002,
	  szErrorMsg=[Microsoft][ODBC Microsoft Access 2.0 Driver] Couldn't find input
	  table or query <xx>
	
	For example, assume two tables exist in the database called ordering and
	reordering, respectively. Then the following sequence of calls will exhibit this
	behavior:
	
	Case A
	------
	
	     SQLPrepare(hstmt,"select * from ordering",SQL_NTS)
	     SQLNumResultCols(hstmt,pccol)
	        Returns SQL_ERROR.
	
	     SQLError(henv,hdbc,hstmt1,szSQLState,pfNativeError,SZErrorMsg)
	        Returns
	
	     SQLState=37000
	     szErrorMsg=[Microsoft][ODBC Microsoft Access 2.0 Driver] Syntax error
	     in From clause
	
	Case B
	------
	
	     SQLPrepare(hstmt,"select * from reordering",SQL_NTS)
	     SQLNumResultCols(hstmt,pccol)
	        Returns SQL_ERROR.
	
	     SQLError(henv,hdbc,hstmt1,szSQLState,pfNativeError,SZErrorMsg)
	        Returns
	
	     SQLState=S0002
	     szErrorMsg=[Microsoft][ODBC Microsoft Access 2.0 Driver] Couldn't
	     find input table or query 're'
	
	Also, these errors are returned for table names that contain the word GROUP, like
	regroup, regrouping. Other examples of the table names that have the problem are
	border, camcorder, or grouped.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Access ODBC Driver version
	2.00.2317. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00.2317 ODBC MFC Visual C++ MSVC Windows NT
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	
