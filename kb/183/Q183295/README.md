---
layout: page
title: "Q183295: FIX: Invalid Cursor State Error with the MS Oracle ODBC Driver"
permalink: kb/183/Q183295/
---

## Q183295: FIX: Invalid Cursor State Error with the MS Oracle ODBC Driver

	Article: Q183295
	Product(s): Open Database Connectivity (ODBC)
	Version(s): Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03,Build 2.73.7356
	Operating System(s): 
	Keyword(s): kberrmsg kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbMDAC200fix kbMDAC250fix kbe
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.0, versions Build 2.73.7269, Build 2.73.7283.01, Build 2.73.7283.03, Build 2.73.7356 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Foundation Classes (MFC) ODBC database classes supplied with
	Visual C++ have a CRecordset::Requery() method that refreshes the records in an
	open recordset. The CRecordset::Requery() method calls the ODBC API function
	SQLExecute() followed by SQLExtendedFetch(). If a record in a Dynaset type
	recordset is updated before calling CRecordset::Requery(), the following error
	message is generated:
	
	  [Microsoft][ODBC driver for Oracle]Invalid cursor state.
	
	RESOLUTION
	==========
	
	Here are two ways to prevent this error when using the MFC ODBC classes:
	
	- Call CRecordset::Close() followed by CRecordset::Open() instead of
	  CRecordset::Requery() to refresh the recordset.
	
	  -or-
	
	- Use the ODBC Cursor Library and a Snapshot type recordset. Call
	  CRecordset::Requery() as usual.
	
	NOTE: If using the ODBC API directly, call SQLPrepare() before calling
	SQLExecute() and SQLExtenedFetch() to refresh the recordset.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This issue has been corrected in the Microsoft Oracle
	ODBC Driver version 2.573.2927 or higher. This driver can be found in Visual
	Studio 6.0, Data Access Software Development Kit (SDK) 2.0 or higher, and in the
	Microsoft Data Access Components (MDAC) version 2.0 or higher. You can download
	the latest version of MDAC 2.0 from the following Web address:
	
	  http://www.microsoft.com/data/
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The easiest way to reproduce the bug is to use ODBCTest. The following steps use
	ODBCTest.
	
	1. Allocate environment and connection handles and connect to an Oracle data
	  source. (Full Connect)
	
	2. Allocate the statement handle and set the following statement attributes with
	  SQLSetStmtAttr:
	
	  SQL_ATTR_CURSOR_TYPE = SQL_CURSOR_KEYSET_DRIVEN
	  SQL_ATTR_CONCURRENCY = SQL_CONCUR_VALUES
	
	3. SQLPrepare and SQLExecute the following statement (the table is located on
	  most Oracle servers):
	
	  "select deptno, dname, loc from scott.dept"
	
	4. Bind all columns (Bind col all) or call SQLBindCol on each of the columns.
	
	5. Call SQLExtendedFetch to get the first row of data.
	
	6. Modify a column and call SQLSetPos with the SQL_UPDATE option.
	
	7. Use the SQLFreeStmt with SQL_CLOSE option to close the statement handle.
	
	8. Re-execute the statement with SQLExecute.
	
	9. Call SQLExtendedFetch again. The following error occurs:
	
	  [Microsoft][ODBC driver for Oracle]Invalid cursor state.
	
	Additional query words: kbDatabase kbODBC kbOralce kbDriver kbMFC
	
	======================================================================
	Keywords          : kberrmsg kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbMDAC200fix kbMDAC250fix kberror kbMDACNoSweep 
	Technology        : kbAudDeveloper kbODBCSearch kbODBCOracle2737269 kbODBCOracle273728303 kbODBCOracle273728301 kbODBCOracle2737356 kbODBCOracle200Search
	Version           : :Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03,Build 2.73.7356
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
