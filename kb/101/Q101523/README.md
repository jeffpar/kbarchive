---
layout: page
title: "Q101523: INF: Meaning of an Active ODBC Statement Handle"
permalink: /kb/101/Q101523/
---

## Q101523: INF: Meaning of an Active ODBC Statement Handle

	Article: Q101523
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	An ODBC application can call SQLGetInfo() with an fInfoType of
	SQL_ACTIVE_STATEMENTS to determine the number of active statement handles that
	an ODBC driver can support on a connection. This article explains how the
	concept of 'active statement' is far removed from the states of statement
	handles in an ODBC State Transition table.
	
	MORE INFORMATION
	================
	
	An ODBC application may be written such that one statement handle (hstmt) on a
	connection (hdbc) is used to fetch data from the back end, and a second hstmt
	within the same hdbc is used simultaneously for other tasks, such as generating
	updates. But an application must not assume that the driver will support such
	behavior from the application. The application must first call SQLGetInfo with
	the fInfoType of SQL_ACTIVE_STATEMENTS to see if multiple active hstmts are
	supported. In ODBC, an hstmt is defined as active if it has results pending. The
	term 'results' means rows from a select or the number of rows affected by an
	insert, update or delete operation (such as row count).
	
	If a driver supports only one active hstmt per hdbc, applications written as
	above will not work. They must allocate a second hdbc, make a new connection,
	and then allocate another hstmt within this new hdbc to be able to concurrently
	use both hstmts, that is, concurrently having one hstmt with results pending as
	the rows are being fetched, and using the other hstmt for other
	application-specific tasks.
	
	It must be noted, however, that even for a driver that supports only one active
	hstmt per hdbc, it may be possible to allocate more than one hstmt within the
	hdbc, that is, such a driver may support multiple hstmts per hdbc but not
	multiple active hstmts per hdbc. In such cases, applications must be careful to
	not use other hstmts within the hdbc when results are pending on a hstmt within
	the hdbc.
	
	The following examples assume a driver that supports only one active hstmt per
	hdbc, without limiting multiple hstmts per hdbc.
	
	  SQLAllocStmt(hdbc, &hstmt1)
	  SQLAllocStmt(hdbc, &hstmt2)
	
	Example 1
	---------
	
	  SQLExecDirect (hstmt1, "select * from <a zero-row table>", SQL_NTS)
	  //Since the above select generated no results, it's OK to use hstmt2
	  SQLExecDirect(hstmt2, "select * from <table>", SQL_NTS)
	
	Example 2
	---------
	
	  SQLExecDirect(hstmt1, "select * from <table that has rows>", SQL_NTS)
	  // The above statement generates a results set
	  SQLExecDirect(hstmt2, "some update statement", SQL_NTS)
	  // Error with SQLState 24000 "Invalid Cursor State"
	
	Example 3
	---------
	
	  SQLExecDirect(hstmt1, "delete  from <table that has rows>", SQL_NTS)
	  // The above delete generates a row count (the number of rows
	  affected)
	  SQLExecDirect(hstmt2, "some update statement", SQL_NTS)
	  // Error with SQLState 24000 "Invalid Cursor State"
	
	Because there are results pending on hstmt1, the last SQLExecDirect on hstmt2 in
	Examples 2 and 3 results in SQLState 24000 "Invalid Cursor state." Note that in
	example 3, if SQLRowCount had been called after the first SQLExecDirect to
	determine the number of rows affected, the second SQLExecDirect would have been
	valid.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
