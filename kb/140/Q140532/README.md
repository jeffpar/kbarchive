---
layout: page
title: "Q140532: INF: How to Use SQLSetPos in Updatable Joins w/ SQL Server"
permalink: /kb/140/Q140532/
---

## Q140532: INF: How to Use SQLSetPos in Updatable Joins w/ SQL Server

	Article: Q140532
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5; winnt:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.5 
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, versions 1.52,2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to use an updatable join using SQLSetPos and the SQL
	Server ODBC driver version 2.50.0121.
	
	MORE INFORMATION
	================
	
	An updatable join is what you need when you intend to either update, insert, or
	delete data in the underlying tables on which the join is based. The most
	frequently encountered error with the SQL Server driver when you use an
	updatable join is:
	
	  Invalid column name <column-name>
	
	This error occurs if the application does not set the pcbValue argument in
	SQLBindCol to SQL_IGNORE for columns that will not be updated. For more
	information on SQLSetPos and SQL_IGNORE, please refer to the Microsoft "ODBC 2.0
	Programmer's Reference and SDK Guide."
	
	It is worth noting that you can only update one table of a join in any single
	SQLSetPos operation. Consider a two-table updatable join: If you want to update
	one or more columns in the first table, you must set pcbValue for all the
	columns from the second table to SQL_IGNORE, and do the same for any columns in
	the first table that you do not want to be updated.
	
	Similarly, if you want to update one or more columns in the second table, you
	must set pcbValue for all the columns from the first table to SQL_IGNORE, and do
	the same for any column in the second table that you do not want to be updated.
	If you want to update columns in both tables, you have to use SQLSetPos twice,
	wrapping in a transaction if needed.
	
	The following C code illustrates how to use an updatable join:
	
	Code Sample
	-----------
	
	  /* Before running the following code do this on SQL Server:
	  Create table test1 (col1 int, col2 char(10))
	  Create table test2 (col1 int, col2 int, col3 char(10))*/ 
	
	  void RunTest(void)
	  {
	     HENV       henv;
	     HDBC       hdbc1;
	     HSTMT      hstmt1;
	     RETCODE    retcode;
	     extern HWND       hWnd;
	     SWORD        swStrLen;
	     UCHAR       Col2[50], Info[50], szConnStrOut[30];
	     int       try1=0,try2=0,try3=0;
	     SDWORD    cbCol11 = 4, cbCol12=10, cbCol21=4, cbCol22=4, cbCol23=10;
	     UDWORD r=0;
	     UWORD rgfRowStat;
	
	  // Allocate the ODBC Environment  handle
	     retcode = SQLAllocEnv (&henv);
	
	  // Allocate the Connection  handle
	     retcode = SQLAllocConnect(henv, &hdbc1);
	
	  // SQLDriverConnect that will generate a dialog prompt for the datasource
	     retcode = SQLDriverConnect(hdbc1,hWnd,(UCHAR *)"",12,
	        szConnStrOut,30, &swStrLen,SQL_DRIVER_PROMPT);
	
	  // Allocate the statement handle
	     retcode=SQLAllocStmt(hdbc1, &hstmt1);
	
	  // Set the statement options
	     retcode = SQLSetStmtOption(hstmt1, SQL_CONCURRENCY,
	  SQL_CONCUR_VALUES);
	     retcode = SQLSetStmtOption(hstmt1,
	  SQL_CURSOR_TYPE,SQL_CURSOR_KEYSET_DRIVEN);
	     retcode = SQLSetStmtOption(hstmt1, SQL_ROWSET_SIZE, 1);
	
	  // Perform the join and bind the columns in the result set
	     retcode = SQLExecDirect(hstmt1,(UCHAR *)"select * from
	  test1,test2 where test1.col1=test2.col1",SQL_NTS);
	     retcode = SQLBindCol(hstmt1, 1, SQL_C_LONG, &try1,
	  sizeof(try1), &cbCol11);
	     retcode = SQLBindCol(hstmt1, 2, SQL_C_CHAR, Col2,
	  sizeof(Col2),&cbCol12);
	     retcode = SQLBindCol(hstmt1, 3, SQL_C_LONG, &try2,
	  sizeof(try2),&cbCol21);
	     retcode = SQLBindCol(hstmt1, 4, SQL_C_LONG, &try3,
	  sizeof(try3),&cbCol22);
	     retcode = SQLBindCol(hstmt1, 5, SQL_C_CHAR, Info,
	  sizeof(Info),&cbCol23);
	
	  // Fetch the resultset and position the cursor
	     retcode = SQLExtendedFetch(hstmt1, SQL_FETCH_FIRST, 1, &r,
	  &rgfRowStat);
	
	  // Set the pcbValues so that Col1 of Test1 can be updated.
	  // Notice that all the columns that won't be updated are set to
	  // SQL_IGNORE
	
	     try1=600;
	     cbCol12=SQL_IGNORE;
	     cbCol21=SQL_IGNORE;
	     cbCol22=SQL_IGNORE;
	     cbCol23=SQL_IGNORE;
	
	  // Update the values
	     retcode = SQLSetPos(hstmt1, 1, SQL_UPDATE, SQL_LOCK_NO_CHANGE);
	
	  // Free the handles
	     retcode = SQLFreeStmt(hstmt1, SQL_DROP);
	     retcode = SQLDisconnect(hdbc1);
	     retcode = SQLFreeConnect (hdbc1);
	     retcode = SQLFreeEnv(henv);
	  }
	
	Additional query words: MFC VC++ sql 6.00 2.00 2.10 2.20 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbMFC kbODBCSearch
	Version           : WINDOWS:2.5; winnt:
	Issue type        : kbinfo
	
	=============================================================================
	
