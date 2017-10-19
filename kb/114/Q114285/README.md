---
layout: page
title: "Q114285: BUG: Summary List of ODBC 1.0 Bugs"
permalink: /kb/114/Q114285/
---

## Q114285: BUG: Summary List of ODBC 1.0 Bugs

	Article: Q114285
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	The following is a list of bugs confirmed in version 1.0 of Microsoft
	Open Database Connectivity. This is not a comprehensive list; this list
	is current as of March 1, 1994.
	
	For more information on the bug listed, query in the Microsoft Knowledge
	Base on the article ID or the bug number.
	
	===========================
	
	BUG LISTING FOR VERSION 1.0
	---------------------------
	
	- BUG: Oracle Driver Errors on Delimited Column Names
	
	- BUG: Cannot Have a Pathname > 29 Char for SYSTEM.MDA
	
	- BUG: Memory Leak in the ORACLE Driver
	
	- BUG: Memory Leak in Desktop Database Drivers
	
	- BUG: Access Driver Returns Incorrect pcbValue
	
	- BUG: SQL Server SQLSetParam Fails on the 252nd Parameter
	
	- BUG: Extra Block of 256 Bytes Used by Access ODBC Driver
	
	- BUG: SQL Server ODBC Driver Removes Entry From WIN.INI
	
	- BUG: Use of Certain Scalar Functions May Cause SQLFetch Errors
	
	===================================
	
	DESCRIPTION OF BUGS FOR VERSION 1.0
	-----------------------------------
	
	---------------------------------------------------
	
	BUG: Oracle Driver Errors on Delimited Column Names
	---------------------------------------------------
	
	Article ID: Q104958
	BUG# ODBCORA: 572 (1.002816)
	
	SYMPTOMS
	========
	
	The Oracle ODBC Driver gives an error on any SELECT statement that contains an
	outer join (in the ODBC escape-clause syntax) on a delimited column name that is
	greater than 17 characters. As a result, when using Microsoft Access or
	Microsoft Visual Basic to connect to an Oracle server, you cannot perform outer
	joins on columns whose names are longer than 17 characters.
	
	So, the following query:
	
	  SELECT * FROM {oj table1 LEFT OUTER JOIN table2 ON
	  (table1.abcdefghijklmnopq = table2.col1)}
	
	works fine; note that the delimited column name (abcdefghijklmnopq) is 17 chars
	long. However, the following query:
	
	  SELECT * FROM {oj table1 LEFT OUTER JOIN table2 ON
	  (table1.abcdefghijklmnopqr = table2.col1)}
	
	gives the error:
	
	  MsgId: Unknown String Resource.
	
	The above error appears in a dialog box with an OK button. Choosing OK will cause
	SQLExecDirect or SQLExecute to return SQL_ERROR. The SQL_ERROR states:
	
	  szSqlState = "37000"
	  [PageAhead][ODBC Oracle Driver]Syntax Error
	
	While working with an ODBC Data source, the Access Engine uses delimited
	identifiers for all its queries; it also uses canonical outer join syntax for
	performing outer joins. Thus, when an Access or Visual Basic user does an outer
	join on Oracle tables, the above mentioned error occurs if any of the columns
	participating in the outer join have a name longer than 17 characters.
	
	The ODBC Access driver does not recognize a SYSTEM.MDA file for which the path is
	longer than 29 characters.
	
	The ODBC Access driver can be used to connect to secure Access databases. To do
	this, the user should specify a SYSTEM.MDA file associated with the Access
	database--by selecting the Options button in the Access Datasource Setup dialog
	box, and specifying a complete path for the SYSTEM.MDA file.
	
	If this path is longer than 29 characters, the driver gives the following error
	during SQLConnect or SQLDriverConnect:
	
	  szSqlState = '08004', *pfNativeError = -1023
	  szErrorMsg="[Microsoft][ODBC Single-Tier Driver][ODBC File
	  Library]Invalid path
	
	For example, the following path will work for SYSTEM.MDA (it is 29 characters
	long):
	
	  c:\temp\snuffy1\ok\system.mda
	
	while the following does not work (it is 30 characters long):
	
	  c:\temp\snuffy1\bad\system.mda
	
	The ODBC Desktop Database Drivers have a memory leak due to which, a memory
	allocation error occurs when a program repeatedly allocates and frees a
	statement handle with the SQL_CLOSE option.
	
	Allocating and freeing a statement handle (with fOption = SQL_CLOSE) repeatedly
	will cause a memory allocation error in the 248th iteration. This problem exists
	in all the drivers shipping with the ODBC Desktop Database Drivers (dBASE,
	FoxPro, Paradox, BTRIEVE, Access, Excel and Text). The following code fragment
	illustrates the problem:
	
	  SQLAllocEnv(&henv);
	  SQLAllocConnect (henv, &hdbc);
	  SQLDriverConnect (hdbc, hwnd, "", 0, szConnStrOut, MAX_CONN_STR_SIZE,
	
	  &cbConnStrOut, SQL_DRIVER_PROMPT);
	
	  for (i=1; i<500; i++) {
	
	  SQLAllocStmt(hdbc, &hstmt); SQLFreeStmt (hstmt, SQL_CLOSE);
	
	  }
	
	In the 248th iteration through the for loop, the following memory allocation
	error occurs:
	
	  SQLAllocStmt returned SQL_ERROR
	  SQLSTATE = S1001, pfNativeError = [Microsoft][ODBC Single-Tier
	  Driver]Memory allocation error
	
	The ODBC Access driver returns incorrect pcbValue when a column with the ODBC SQL
	type SQL_TIMESTAMP is converted to SQL_C_DATE via SQLBindCol or SQLGetData.
	
	The following assumes that there is a table called DATETEST in which column
	number 2 is a column of type datetime:
	
	- SQLExecDirect the statement:
	
	  select * from DATETEST
	
	- Do a SQLBindCol on col #2 so that fCType is SQL_C_DATE.
	
	- Do a SQLFetch.
	
	- Examine the value of *pcbValue.
	
	It will be 10; while the expected =6.
	
	The same (invalid) pcbValue is returned if, instead of SQLBindCol, data is
	retrieved through SQLGetData with fCType = SQL_C_DATE.
	
	Correct pcbValue is returned when fCType = SQL_C_TIME.
	
	--------------------------------------------------------
	
	BUG: SQL Server SQLSetParam Fails on the 252nd Parameter
	--------------------------------------------------------
	
	Article ID: Q111723 BUG# ODBCSS: 2816 (1.01.2920)
	
	The ODBC SQL Server driver returns an error with SQLSTATE S1093 when SQLSetParam
	is called for the 252nd time on a prepared statement with more than 252
	parameter markers in it.
	
	Because of this, users of Microsoft Access version 1.1 may see an error,
	
	  ODBC Call Failed
	
	when they try and update an attached table with more than 125 columns.
	
	--------------------------------------------------------
	
	BUG: Extra Block of 256 Bytes Used by Access ODBC Driver
	--------------------------------------------------------
	
	Article ID: Q111724 BUG# ODBCDBASE: 2048 (1.01.1928)
	
	The following sequence of calls,
	
	  SQLAllocEnv, SQLAllocConnect, SQLConnect (or SQLDriverConnect),
	  SQLDisconnect, SQLFreeConnect, and SQLFreeEnv
	
	will cause an extra block of 256 bytes to be used by the application that made
	the calls. This happens only with the Access ODBC Driver.
	
	------------------------------------------------------
	
	BUG: SQL Server ODBC Driver Removes Entry From WIN.INI
	------------------------------------------------------
	
	Article ID: Q112513 BUG# ODBCSS: 2834 (1.01.22807)
	
	If an existing data source is reconfigured in such a way that only its name is
	changed using either ODBC Administrator or ODBC icon from Control Panel for the
	SQL Server driver, the corresponding server entry in the WIN.INI entry (for
	non-default network or network library) is removed.
	
	For example, assume a data source called MYSOURCE is configured and maps to a SQL
	Server machine called SQLNT1. Also it is using dbmsspx3 Network Library
	(Net-Library). So in the ODBC.INI file, the server entry for [MYSOURCE] would be
	SQLNT1 and the corresponding entry in WIN.INI for this would be under SQL Server
	section as follows:
	
	  [SQL Server]
	  SQLNT1=dbmsspx3,SQLNT1
	
	Now if the data source name is changed from MYSOURCE to NEWSRC using ODBC
	Administrator or ODBC icon in the control panel, the above entry for SQLNT1 will
	be removed. This happens even though the server entry in ODBC.INI for the
	[NEWSRC] still points to SQLNT1.
	
	NOTE: In case of default network and Net-Library, no entry in needed in the
	WIN.INI.
	
	Under certain circumstances, memory allocation errors may be returned from
	drivers that ship with the ODBC Database Driver Pack. These errors occur when
	fetching a results set from a certain kind of SQL Statement that uses ODBC
	scalar functions.
	
	The following SQL query uses scalar functions and causes errors, not on
	SQLExecDirect or SQLExecute, but on SQLFetch after 1087 rows have been
	retrieved.
	
	  select *
	  from "test"
	  where
	  {fn CONVERT('19'+
	
	  {fn LEFT("test"."col_DATE_Y" ,2) } + '-' + {fn LEFT("test"."col_DATE_MD",2)}
	  + '-' + {fn RIGHT({ fn RTRIM("test"."col_DATE_MD") } , 2 ) }
	
	  ,SQL_DATE)}
	  >= '1992-01-01'
	
	Errors received on SQLFetch after 1087 rows have been fetched:
	
	  [Microsoft][ODBC Single-Tier Driver]Error in predicate:
	  [Microsoft][ODBC Single-Tier Driver]Expression evaluation error
	  [Microsoft][ODBC Single-Tier Driver]Memory allocation error.
	
	WORKAROUND
	==========
	
	Rename the column so that it has less than 17 characters.
	
	----------------------------------------------------
	
	BUG: Cannot Have a Pathname > 29 Char for SYSTEM.MDA
	----------------------------------------------------
	
	Article ID: Q105795 BUG# ODBCDBASE: 1852 (1.01.1928)
	
	Move the SYSTEM.MDA file to a different directory so that the path is less than
	29 characters.
	
	--------------------------------------------
	
	BUG: Memory Leak in Desktop Database Drivers
	--------------------------------------------
	
	
	BUG# ODBCDBASE: 1850 (1.01.1928)
	
	Use the following statement:
	
	  fOption = SQL_DROP
	
	instead of using the following in the SQLFreeStmt command:
	
	  fOption = SQL_CLOSE
	
	---------------------------------------------
	
	BUG: Access Driver Returns Incorrect pcbValue
	---------------------------------------------
	
	Article ID: Q106480 BUG# ODBCDBASE: 1858 (1.01.1928)
	
	Remove the data source and the add it back again. That will add the entry back in
	WIN.INI.
	
	--------------------------------------------------------------
	
	BUG: Use of Certain Scalar Functions May Cause SQLFetch Errors
	--------------------------------------------------------------
	
	Article ID: Q112689 BUG# ODBCDBASE: 1857 (1.01.1928)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : :1.0
	Issue type        : kbbug
	
	=============================================================================
	
