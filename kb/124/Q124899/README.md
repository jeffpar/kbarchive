---
layout: page
title: "Q124899: BUG: SQLNumResultCols May Fail After Prepared SQL Statement"
permalink: /kb/124/Q124899/
---

## Q124899: BUG: SQLNumResultCols May Fail After Prepared SQL Statement

	Article: Q124899
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	BUG# AddonBugs: 10888 (1.02.3231)
	
	SYMPTOMS
	========
	
	After preparing a SELECT statement, a call to an ODBC meta data function call,
	such as SQLDescribeCol, SQLNumResultCols, and SQLColAttributes, fails with the
	message:
	
	  Syntax error near 'where'
	
	This happens only if the above functions are called after SQLPrepare has been
	called but before SQLExecute has been called. The following code demonstrates
	the problem:
	
	     SQLPrepare(hstmt, "select sum(qty) from sales group by stor_id")
	     SQLNumResultCols(hstmt, &col)  ==> SQL_ERROR
	     SQLError() ==> "Syntax error near 'where'"
	
	CAUSE
	=====
	
	The SQL Server driver is sending an improperly constructed SQL statement to SQL
	Server at the time SQLNumResultCols, SQLDescribeCol, and SQLColAttributes are
	called.
	
	WORKAROUND
	==========
	
	Because this problem appears only if SQLExecute has not been called, it is
	recommended that meta data function calls be called after both SQLPrepare and
	SQLExecute have been called.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the 16-bit Microsoft SQL Server
	driver version 1.02.3231 and 32-bit SQL Server driver version 2.00.1912. We are
	researching this problem and will post more information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 1.02.3231 2.00.1912 Windows NT
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200 kbODBC100
	Version           : WINDOWS:1.0,2.0
	Issue type        : kbbug
	
	=============================================================================
	
