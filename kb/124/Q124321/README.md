---
layout: page
title: "Q124321: BUG: SQLGetData Returns SQL_SUCCESS on a Binary Column"
permalink: /kb/124/Q124321/
---

## Q124321: BUG: SQLGetData Returns SQL_SUCCESS on a Binary Column

	Article: Q124321
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# QJET: 1780 (2.002317)
	
	SYMPTOMS
	========
	
	Under certain conditions when SQLGetData is called on a binary column more than
	once, it may return SQL_SUCCESS when it should return SQL_NO_DATA_FOUND. This
	happens only for binary, varbinary, or longbinary type of columns.
	
	For example, consider the following sequence of calls which demonstrate the
	problem:
	
	     SQLAllocEnv(phenv)
	     SQLAllocConnect(henv,phdbc)
	     SQLConnect(szDSN,cbDSN,szUID,cbUID,szAuthStr,cbAuthStr)
	
	     SQLAllocStmt(hdbc,phstmt)
	     SQLExecDirect(hstmt,"Create table test (col1 longbinary)",SQL_NTS)
	     SQLExecDirect(hstmt,"Insert into test values('abc')",SQL_NTS)
	     SQLExecDirect(hstmt,"Insert into test values('abcd')",SQL_NTS)
	     SQLFreeStmt(hstmt,SQL_CLOSE)
	
	     SQLSetStmtOption(hstmt,SQL_CURSOR_TYPE, SQL_CURSOR_KEYSET_DRIVEN)
	     SQLSetStmtOption(hstmt,SQL_ROWSET_SIZE,2)
	
	     SQLExecDirect(hstmt,"Select * from test",SQL_NTS)
	     SQLBindCol(hstmt,1,SQL_C_BINARY,rgbValue,cbValueMax,pcbValue)
	     SQLExtendedFetch(hstmt,SQL_FETCH_FIRST,1,pcrow,rgfRowStatus)
	
	     SQLGetData(hstmt,1,SQL_C_CHAR,cbValueMax,pcbValue)
	
	This returns SQL_SUCCESS with *rgbValue="616263" and *pcbValue=6. But calling
	SQLGetData second time on the same column like:
	
	     SQLGetData(hstmt,1,SQL_C_CHAR,VALID,100,VALID)
	
	Returns SQL_SUCCESS with *rgbValue="" and *pcbValue=0
	
	This should return SQL_NO_DATA_FOUND.
	
	The behavior occurs only if the following conditions apply:
	
	1. The column type is either binary, longbinary, or Varbinary and is bound.
	
	2. The data in the second row is longer than first row.
	
	3. A SQLExtendedFetch with fFetchType as SQL_FETCH_FIRST and SQLGetData
	  immediately following the SQLExtendedFetch call.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Access Driver version
	2.00.2317. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00.2317 ODBC VISUAL C++ MSVC MFC Windows NT
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	
