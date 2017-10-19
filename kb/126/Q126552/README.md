---
layout: page
title: "Q126552: INF: Performance Considerations with the ODBC Access 2.0 Drive"
permalink: /kb/126/Q126552/
---

## Q126552: INF: Performance Considerations with the ODBC Access 2.0 Drive

	Article: Q126552
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-AUG-2001
	
	2.00.2317
	
	WINDOWS
	
	kbusage kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses methods to enhance the performance of the ODBC Access
	version 2.0 driver. It discusses both the ODBC API issues and the Microsoft
	Foundation Database Classes (MFC) programming considerations for improving the
	speed of an application that uses the Access 2.0 driver.
	
	MORE INFORMATION
	================
	
	The ODBC Access driver is a very feature rich, high performance driver. Because
	it is feature rich, it offers multiple ways to do inserts, deletes, and updates.
	Some ways are better than others in terms of performance. Carefully designing
	your application to use such methods, whenever possible, will help you maximize
	the performance of your ODBC application.
	
	Using Prepared Executions
	-------------------------
	
	Queries can be executed in one of two ways:
	
	- Use SQLExecDirect()
	
	- Use SQLPrepare() to prepare the query and then call SQLExecute() to execute
	  the prepared query.
	
	SQLExecDirect() is a better choice when you do not expect to execute the query
	more than once. However, SQLPrepare()/SQLExecute() is faster if you execute the
	query multiple times.
	
	Every time a query has to be executed with SQLExecDirect(), the ODBC Driver has
	to parse the query and generate an execution plan for it. The query is then
	executed using the execution plan. When you use SQLPrepare(), the above steps
	are done once and the execution plan is stored; it is invoked every time
	SQLExecute() is called. This means that the performance is significantly
	enhanced if the query is executed multiple times.
	
	Using Stored Queries
	--------------------
	
	The Access 2.0 ODBC driver lets you use stored queries in an Access .MDB
	database. Stored queries cannot be created by using the Access driver; they are
	created using Access or Visual Basic. Stored queries can be used in one of 2
	ways using the Access ODBC drivers:
	
	- Treat the queries as views; by doing so, you can SELECT from the query just
	  as you would from a table. This method has the advantage of being easy to use
	  and intuitive. However, it is not the best method performance-wise. This is
	  because the SELECT you use to invoke the query incurs the overhead of syntax
	  checking and parsing.
	
	- Treat the queries as stored procedures. You can use the '{call
	  <query-name>...}' syntax to call the stored query. This is faster
	  because syntax checking is bypassed and the stored query is directly invoked.
	  Also, you can use this method to execute parameterized queries, by passing
	  "?" for parameters in the {call...} statement and using SQLBindParameter to
	  bind the parameter markers. Parameter markers cannot be used in method#1.
	
	Using Transactions
	------------------
	
	When you are executing multiple INSERT, DELETE or UPDATE statements, performance
	can be enhanced by turning autocommit mode off; this can be done by calling
	SQLSetConnectOption on the connection handle (HDBC). This is because in
	autocommit mode, the driver must ensure that each individual INSERT, DELETE, or
	UPDATE statement is flushed to the safe store (usually disk). If they are
	grouped in a transaction, the driver can clump the writes to the disk and do
	them only once during commit time. Since disk I/O takes a relatively long time,
	turning autocommit mode off enhances performance.
	
	Using Engine Cursors vs. Cursor Library
	---------------------------------------
	
	The Access 2.0 ODBC driver supports the ODBC cursor API. As a result, positioned
	inserts, deletes, and updates can be done using the SQLSetPos() function. Using
	SQLSetPos() to perform these operations is much faster than doing the same
	operations using a SQL statement. The reason is, when you use SQLSetPos, the
	table is already open; there is no need to look into the catalog. Because no SQL
	statement exists, there is nothing to parse.
	
	Performance can be further enhanced by wrapping these operations in a
	transaction. Static updateable cursors are provided by the cursor library. But
	using the cursor library to do a positioned update is much slower than using
	SQLSetPos()/SQL_UPDATE because the cursor library adds a lot of overhead. The
	cursor library has to look at the buffered results and generate an UPDATE
	statement; this update statement has to be parsed and an execution plan needs to
	be generated; there is also catalog lookup involved to open the table which is
	being updated.
	
	INSERT, DELETE, AND UPDATE Performance
	--------------------------------------
	
	In general, INSERT, DELETE, and UPDATE statements can be done six different ways.
	They are listed below in order of increasing performance. To make the comparison
	more concrete, 100 inserts were done using each of these methods into an Access
	2.0 table that had 5 columns of text data.
	
	NOTE: These do not represent exhaustive bench marking results. Hence, it should
	not be treated as such. They are just provided to illustrate the relative merits
	of these methods.
	
	1. 100 SQLExecDirect inserts with no transaction       5457ms
	2. 100 SQLExecDirect inserts with transaction          4756ms
	3. 100 SQLPrepare/SQLExecute with no transaction       3515ms
	4. 100 SQLPrepare/SQLExecute with transaction          2994ms
	5. 100 SQLSetpos/SQL_ADD inserts                        831ms
	6. 100 SQLSetpos/SQL_ADD inserts  with transaction      721ms
	
	As you can see, there is a great difference between adding data the right way
	(SQLSetpos() at 139 inserts/second) and the worst way (18 inserts/second). While
	the results above are specific to inserts, they apply equally well to deletes
	and updates.
	
	What Does This Mean if You Use the MFC Database Classes?
	--------------------------------------------------------
	
	The CRecordset C++ class provided with the MFC prepares queries before execution
	using the SQLPrepare() ODBC API function. The CRecordset::Requery() function can
	be used to re-execute the query for the CRecordset without the ODBC driver
	re-parsing the SQL statement again because the statement has already been
	prepared the first time.
	
	By default, the MFC database classes load the cursor library. The cursor library
	permits updateable snapshots. To get updateable recordsets but not use the
	cursor library, you might want to consider using a dynaset CRecordset. You
	specify this by passing CRecordset::dynaset for the first argument of
	CRecordset::Open(). With the 32-bit MFC database classes, it is not enough to
	pass CRecordset::dynaset to CRecordset::Open(). You must pass FALSE for the last
	argument of the CDatabase::Open(). This prevents the cursor library from
	loading. The code looks like this:
	
	     CDatabase db;
	     db.Open("DataSourceName",FALSE,FALSE,"ODBC;",FALSE);
	     CYourRecordset rs(&db);
	     rs.Open(CRecordset::dynaset);
	
	The 16-bit MFC database classes do not let you get updateable dynasets with the
	code that is provided. By using dynasets, using DYNSET.EXE code or 32-bit
	classes, you will be using the SQLSetPos() functionality of the Access 2.0 ODBC
	driver when performing updates, deletes, or inserts. As mentioned earlier, this
	will greatly increase the speed of your application.
	
	The Access 2.0 ODBC driver does not support MFC transactions but comes close. The
	MFC database classes require ODBC drivers to support recordset cursor
	preservation across rollbacks and commits of transactions (see documentation for
	SQLGetInfo and parameters SQL_CURSOR_COMMIT_BEHAVIOR and
	SQL_CURSOR_ROLLBACK_BEHAVIOR in the ODBC Programmer's Reference). The Access 2.0
	driver does not guarantee this; however, you can use transactions if you requery
	following any transaction so that the cursor is restored back to first record in
	the recordset. You must also force the CDatabase::m_bTransactions to TRUE before
	using BeginTrans(). Your code could look like this:
	
	     class CTransactDatabase: public CDatabase
	     {
	         public:
	         void SetTransactions(){ m_bTransactions=TRUE;}
	     };
	
	     .
	     .
	     .
	
	     CTransactDatabase db;
	     db.Open("SomeDataSourceName",FALSE,FALSE,"ODBC;",FALSE);
	     db.SetTransactions();
	     db.BeginTrans();
	     CPerftestSet rs(&db);
	     rs.Open(CRecordset::dynaset);
	     .
	     .
	     .
	
	Use CDatabase::CommitTrans() and CDatabase::Rollback() to commit and rollback
	transactions.
	
	Notes:
	------
	
	- The ODBC Driver Manager shipped with Desktop Database ODBC Drivers version
	  2.0 requires that the table be non-empty in order to do
	  SQLSetPos(...SQL_ADD). An updated driver manager is available that solves
	  this problem. For more information on this problem and how to obtain the
	  updated driver manager, please see article Q124998 "INF: Change in Behavior
	  of SQLSetPOS on Empty Result Set" that is available in the Microsoft
	  Knowledge Base.
	
	- Article Q125727, "Text Truncated When Using Dynaset and RFX_Text()" in the
	  Microsoft Developer Knowledge Base mentions a bug with the Visual C++ version
	  2.0 MFC database classes when using dynasets. Visual C++ version 2.1 fixes
	  the problem.
	
	(c) Microsoft Corporation 1995, All Rights Reserved.
	Contributions by George Rankin, Microsoft Corporation
	
	(c) Microsoft Corporation 1995, All Rights Reserved.
	Contributions by Dan Kirby, Microsoft Corporation
	
	
	Additional query words: 2.00.2317 ODBC Desktop Database Drivers Access MFC Visual C++ MSVC Basic VB Windows NT
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	
	=============================================================================
	
