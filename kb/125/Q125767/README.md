---
layout: page
title: "Q125767: PRB: Query Too Complex Error After Execution of SQL Query"
permalink: /kb/125/Q125767/
---

## Q125767: PRB: Query Too Complex Error After Execution of SQL Query

	Article: Q125767
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	2.00.2317
	
	WINDOWS
	
	kbprg kberrmsg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the ODBC desktop drivers, the following message is displayed after
	SQExecDirect or SQLPrepare fails with a SQL_ERROR return code:
	
	  Query too complex
	
	CAUSE
	=====
	
	There are two possible causes for this:
	
	- Application is running low on stack space.
	
	- The SQL query is hitting the defined SQL limits in the driver. For instance,
	  the desktop database driver help files ODBCDRV.HLP and ODBCDRV32.HLP (16- and
	  32-bit versions, respectively) list the SQL limitations:
	
	  a. Maximum of 40 AND predicates in a WHERE clause.
	
	  b. Maximum of 16 tables in a FROM clause.
	
	  c. Maximum of 40 search conditions in a HAVING clause.
	
	If a snapshot is created on a table with more than 40 columns, Microsoft
	Foundation Classes (MFC) applications will get this error message on using the
	CRecordSet::Update method. This is because the MFC database classes use the
	Cursor Library for snapshots, and on a CRecordSet::Update, the Cursor Library
	builds a WHERE clause listing all the columns in the table. This WHERE clause
	has more than 40 AND predicates, therefore, an error is reported by the driver.
	
	Note: An MFC ODBC application that references long binary data using the
	RFX_LongBinary function may encounter this error when the recordset is opened.
	This is because the cursor library precedes calls to SQLGetData with the
	execution of a SELECT statement with a WHERE clause as described above.
	
	The long binary column does not contribute toward exceeding the 40-column limit
	because it is not referenced in the generated WHERE clause.
	
	RESOLUTION
	==========
	
	To resolve the first cause above, you must set the stack size to 20K or more.
	
	To resolve the second cause, where the error occurs on the CRecordSet::Update
	method, you must:
	
	- Force MFC to use the native cursor functionality within the driver instead of
	  using the Cursor Library. This is typically done by creating a dynaset
	  instead of a snapshot, and be ensuring that the CDatabase object used by your
	  CRecordset object does not load the cursor library. This is done by setting
	  the fifth argument of CDatabase::Open to FALSE. (This also implies you will
	  need to explicitly create and open a CDatabase object for your CRecordset
	  object.)
	
	  OR
	
	- Reduce the number of columns in the recordset.
	
	Additional query words: 2.00.2317 Access dbase fox paradox 16bit 32bit MFC database classes Windows NT
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
