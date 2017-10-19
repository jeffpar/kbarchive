---
layout: page
title: "Q94984: INF: Cursor Behavior in Autocommit Mode"
permalink: /kb/094/Q94984/
---

## Q94984: INF: Cursor Behavior in Autocommit Mode

	Article: Q94984
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	1.00
	
	MS-DOS
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the behavior of cursors when autocommit mode is ON.
	Specifically, it discusses the limitations of using multiple statement handles
	in this mode.
	
	MORE INFORMATION
	================
	
	ODBC drivers that are transaction-capable support two modes for transactions:
	manual commit and autocommit. In manual commit mode, the driver begins a
	transaction when an application submits a SQL statement and no transaction is
	open. It commits or rolls back the transaction on a call to SQLTransact. In
	autocommit mode, each SQL statement is a single, complete transaction; the
	driver commits one transaction for each statement.
	
	All the statement handles belonging to a connection handle share the same
	transaction space. Thus, calling SQLTransact commits or rolls back all the
	inserts, deletes, and updates that are in progress on all statement handles
	associated with the connection. Every statement handle corresponds to a cursor
	that is automatically opened when a statement is executed. When a statement is
	committed or rolled back, the open cursor may exhibit three types of behavior:
	
	1. The cursor may be closed and deleted; any prepared statements will be lost.
	
	2. The cursor may be closed, but not deleted; the application can re-execute a
	  prepared statement.
	
	3. The cursor position is preserved; the application may continue to fetch from
	  where it left off.
	
	Suppose the driver is in autocommit mode. The current hdbc (connection handle)
	has two open hstmt's (statement handles). hstmt1 has a select statement
	executing on it that has returned 100 rows. The app has fetched 20 of them. Now
	hstmt 2 executes an update statement that finishes immediately, before any more
	rows are fetched in hstmt1. Because of autocommit mode, the update is committed.
	If hstmt1 now tries to fetch the 21st row and the cursor commit behavior is
	either (1) or (2) above, then this fetch will result in SQLSTATE 24000 - invalid
	cursor state - because the cursor has been closed as a result of the update
	commit.
	
	The above discussion applies only if the driver is transaction capable (that is,
	the SQLGetInfo with fInfoType = SQL_TXN_CAPPABLE returns 1). If the driver is
	not transaction capable (like a 1-tier ISAM driver), then there is no concept of
	a transaction commit, so hstmt1 can continue fetching.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
