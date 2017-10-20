---
layout: page
title: "Q126131: HOWTO: Speed Up Apps that Use the Microsoft Access ODBC Driver"
permalink: /kb/126/Q126131/
---

## Q126131: HOWTO: Speed Up Apps that Use the Microsoft Access ODBC Driver

{% raw %}

	Article: Q126131
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,2.0,2.1,2.5,2.6,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbDatabase kbMFC kbODBC kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 k
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.51 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Data Access Components versions 1.5, 2.0, 2.1, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article discusses low-level ODBC API issues and MFC programming
	considerations for improving the performance of applications that use the
	Microsoft Access ODBC driver versions 2.x or above. If you are using Visual C++
	4.0 or higher, you can also use DAO to manipulate Access databases. In general,
	if your primary target DBMS is Access, DAO will provide higher performance than
	ODBC.
	
	MORE INFORMATION
	================
	
	The Microsoft Access ODBC driver has many features including multiple ways to do
	inserts, deletes, and updates. Some ways are better than others, in terms of
	performance. By designing your application to use the higher- performance
	methods, you can maximize the speed of your ODBC application. This article
	discusses some of these higher-performance methods for using the ODBC API with
	the Microsoft Access version ODBC driver.
	
	Using Prepared Executions
	-------------------------
	
	Queries can be executed in one of two ways:
	
	- By using SQLExecDirect().
	
	- By using SQLPrepare() to prepare the query and then calling SQLExecute() to
	  execute the prepared query.
	
	If you expect to execute the query only once, use the SQLExecDirect() method. If
	you do expect to execute the query more than once, use the
	SQLPrepare()/SQLExecute() method.
	
	Each time a query is executed using SQLExecDirect(), the ODBC driver performs
	these three steps:
	
	1. Parse the query.
	
	2. Generate an execution plan.
	
	3. Execute the query using the generated execution plan.
	
	When you execute a query using the SQLPrepare()/SQLExecute method, these steps
	are broken into two parts:
	
	1. Calling SQLPrepare() parses the query and generates the execution plan, which
	  is then stored.
	
	2. Calling SQLExecute() executes the query using the stored execution plan.
	
	If a query is executed multiple times, the SQLPrepare()/SQLExecute method gives
	much better performance because the parsing and generation of the execution plan
	is done only once.
	
	Using Stored Queries
	--------------------
	
	With the Microsoft Access driver, you can use the queries stored in a Microsoft
	Access .MDB database. Stored queries cannot be created with the Microsoft Access
	driver, but they can be created by using Microsoft Access or Visual Basic. As of
	VC++ 4.0, you can use DAO to create stored procedures in Access.
	
	You can use stored queries in one of two ways with the Microsoft Access driver:
	
	- Treat the queries as views. By doing so, you can select from the query just
	  as you would from a table. This method has the advantage of being intuitive
	  and easy to use. It is not, however, the best method performance-wise. This
	  is because the select you use to invoke the query incurs the overhead of
	  syntax checking and parsing.
	
	- Treat the queries as stored procedures. You can use the '{call <query
	  name>...}' syntax to call the stored query. This is faster because syntax
	  checking is bypassed and the stored query is directly invoked. Another
	  benefit of method is that you can execute parameterized queries, by passing
	  '?' for parameters in the '{call...}' statement and using SQLBindParameter()
	  to bind the parameter markers. Parameter markers cannot be used if you treat
	  the stored queries as views.
	
	Using Transactions
	------------------
	
	When you execute multiple Insert, Delete, or Update statements, performance can
	be enhanced by turning autocommit mode off. Do this by calling
	SQLSetConnectOption() on the connection handle (HDBC). Performance is enhanced
	when not in the autocommit mode because, in the autocommit mode, the driver must
	ensure that each individual Insert, Delete, or Update statement is flushed to
	the safe store (usually disk). If these statements are grouped in a transaction,
	the driver batches the disk writes and does them only once at commit time.
	Because disk I/O takes a relatively long time, turning autocommit mode off
	enhances performance.
	
	Using Native Cursors Versus the Cursor Library
	----------------------------------------------
	
	The Microsoft Access driver supports the ODBC cursor API, so positioned Inserts,
	Deletes, and Updates can be done using the SQLSetPos() function. Using
	SQLSetPos() to perform these operations is much faster than doing the same
	operations using a SQL statement. This is because when you use SQLSetPos(), the
	table is already open; there is no need to look into the catalog. Because there
	is no SQL statement, there is nothing to parse. Performance can be further
	enhanced by wrapping these operations in a transaction.
	
	Static updateable cursors are provided by the cursor library, but using the
	cursor library to do a positioned update is much slower than using
	SQLSetPos()/SQL_UPDATE. This is because the cursor library adds a lot of
	overhead. The cursor library has to look at the buffered results and generate an
	Update statement. This statement has to be parsed and an execution plan has to
	be generated. There is also a catalog lookup involved to open the table being
	updated.
	
	Insert, Delete, and Update Performance
	--------------------------------------
	
	In general, Inserts, Deletes, and Updates can be done in one of six ways, as
	listed below in order of increasing performance. To make the comparison more
	concrete, 100 inserts were done using each of these methods into an Microsoft
	Access version 2.0 table that had five columns of text data.
	
	NOTE: These results do not represent exhaustive benchmark testing, so they should
	not be treated as such. They are provided to illustrate the relative performance
	of each of these methods.
	
	1. 100 SQLExecDirect() inserts with no transaction 5457ms
	
	2. 100 SQLExecDirect() inserts with transaction 4756ms
	
	3. 100 SQLPrepare()/SQLExecute() inserts no transaction 3515ms
	
	4. 100 SQLPrepare()/SQLExecute() inserts transaction 2994ms
	
	5. 100 SQLSetPos()/SQL_ADD inserts with no transaction 831ms
	
	6. 100 SQLSetPos()/SQL_ADD inserts with transaction 721ms
	
	As you can see, there is a big difference between adding data the fastest way
	(SQLSetPos() at 139 inserts/second) and the slowest (SQLExecDirect() at 18
	inserts/second). While these results are specific to inserts, the relative
	performance of corresponding delete and update methods will be similar.
	
	MFC Database Classes Considerations
	-----------------------------------
	
	The MFC CRecordset class prepares queries before execution by using the
	SQLPrepare() ODBC API function. The CRecordset::Requery() function can be used
	to reexecute the prepared query for the recordset.
	
	By default, the MFC database classes load the cursor library. The cursor library
	provides updateable snapshots. To get updateable recordsets without using the
	cursor library, you can use dynaset recordsets. To do this, specify
	CRecordset::dynaset as the first argument of the CRecordset::Open() function.
	
	NOTE: The database classes load the cursor library by default, so if you don't
	specify one, the CDatabase object that the CRecordset class creates by default
	will load the cursor library. Therefore, to use dynasets with the MFC database
	classes, create a CDatabase object yourself that doesn't load the cursor
	library; then pass a pointer to that object to your recordset's constructor. You
	tell the CDatabase object not to load the cursor library by passing FALSE as the
	last parameter to its Open() function. In a 32-bit Windows-based application,
	you would do this with code similar to this:
	
	     CDatabase        db;
	     db.Open("DataSourceName",FALSE,FALSE,"ODBC;",FALSE);
	     CYourRecordset   rs(&db);
	     rs.Open(CRecordset::dynaset);
	
	NOTE: As of VC++ 4.0, specifying CRecordset::dynaset as the first parameter to
	CRecordset::Open() is sufficient to instantiate and open a CDatabase object that
	will not load the cursor library. As a result, unless you require an explicitly
	created CDatabase object, you do not need to create one explicitly to use
	dynasets. Also, beginning with Visual C++ 4.2, the CDatabase::OpenEx() function
	can be used and it doesn't load the cursor library by default.
	
	A 16-bit Windows-based application cannot get updateable dynasets with the
	default MFC implementation.
	
	By using dynasets, you use the SQLSetPos() functionality of the Microsoft Access
	version 2.0 driver when performing Inserts, Deletes, or Updates. As mentioned
	earlier, this greatly increases the speed of you application.
	
	The Microsoft Access ODBC driver doesn't support MFC transactions but comes
	close. The MFC database classes require ODBC drivers to support cursor
	preservation across transaction rollbacks and commits. (See the documentation
	for SQLGetInfo and the SQL_CURSOR_COMMIT_BEHAVIOR and
	SQL_CURSOR_ROLLBACK_BEHAVIOR parameters in the "ODBC Programmer's Reference.")
	The Microsoft Access driver doesn't guarantee this, but you can use transactions
	if you requery following any transaction. This restores the cursor to the first
	record in the recordset. You must also force the CDatabase::m_bTransactions
	member variable to TRUE before calling BeginTrans(). For more information,
	please see MFC Technote #47, "Relaxing Database Transaction Requirements"
	available from Visual C++ Books Online. Also, beginning with Visual C++ version
	4.2, MFC Technical Note #68 provides specific information about performing
	transactions with the Access ODBC Driver.
	
	The code to do this would look something like this:
	
	     class CTransactDatabase : public CDatabase
	     {
	     public:
	         void SetTransactions()) { m_bTransactions=TRUE; }
	     };
	
	     .
	     .
	     .
	     CTransactDatabase   db;
	     db.Open("SomeDataSourceName",FALSE,FALSE,"ODBC;",FALSE);
	     db.SetTransactions();
	     db.BeginTrans();
	     CPerftestSet        rs(&db);
	     rs.Open(CRecordset::dynaset);
	     .
	     .
	     .
	
	Use CDatabase::CommitTrans() and CDatabase::Rollback() respectively to commit and
	rollback transactions.
	
	NOTE: The ODBC Driver Manager that ships with the Desktop Database ODBC Drivers
	version 2.0 requires that a table contain at least one row in order to do
	SQLSetPos(...SQL_ADD). An updated driver manager is available that solves this
	problem. For more information on this problem and to learn how to obtain the
	updated driver manager, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q124998 INF: Change in Behavior of SQLSetPOS on Empty Result Set
	
	
	NOTE: Article Q125727, titled "Text Truncated When Using Dynaset and RFX_Text()"
	in the Microsoft Developer Knowledge Base mentions a bug with the Visual C++
	version 2.0 MFC database classes when using dynasets. Visual C++ version 2.1
	fixes the problem.
	
	The MFC CRecordset class has a new optimization (in both 16- and 32-bit versions)
	that improves efficiency when you're adding new records in bulk to a table. A
	new option for the dwOptions parameter to the CRecordset::Open member function,
	optimizeBulkAdd, improves performance when you're adding multiple records
	consecutively without calling Requery or Close. Only those fields that are
	"dirty" prior to the first Update call are marked as "dirty" for subsequent
	AddNew/Update calls. If you are using the database classes to take advantage of
	the ::SQLSetPos API function for adding, editing, and deleting records, this
	optimization is unnecessary. If the ODBC Cursor Library is loaded or the ODBC
	driver doesn't support adding, editing, and deleting via ::SQLSetPos , this
	optimization should improve bulk add performance. To turn on this optimization,
	set the dwOptions parameter in the Open call for your recordset to :
	
	appendOnly | optimizeBulkAdd
	
	Bulk-Row Fetching with MFC
	--------------------------
	
	Beginning with Visual C++ 4.2, MFC supports bulk row fetching. Look in the online
	documentation for the topic "Recordset: Fetching Records in Bulk (ODBC)". The
	bulk fetching feature allows a recordset to read in more than one record into a
	buffer in one fetch (MoveNext call).
	
	Additional query words: MfcDatabase
	
	======================================================================
	Keywords          : kbProgramming kbDatabase kbMFC kbODBC kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC200 kbMDAC150 kbMDAC210 kbMDAC250 kbMDAC260 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.5,1.51,2.0,2.1,2.5,2.6,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
