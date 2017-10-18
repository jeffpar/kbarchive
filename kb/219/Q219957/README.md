---
layout: page
title: "Q219957: FIX: SQLNumResultCols Results in Attentions Generation on Server"
permalink: kb/219/Q219957/
---

## Q219957: FIX: SQLNumResultCols Results in Attentions Generation on Server

	Article: Q219957
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 3.6,3.7
	Operating System(s): 
	Keyword(s): kbODBC360fix kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbODBC370fix kbMDACNoSweep
	Last Modified: 08-MAY-2002
	
	sqlsrv32.dll versions 3.70.0623, 3.60.0319
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, versions 3.6, 3.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Conditions are Async enabled and TCP/IP Sockets and SQLNumResultCols are
	issued after a SQLPrepare but prior to a SQLExecute, the driver issues SET
	FMTONLY ON to get the column information, which then ends up breaking the
	connection and results in the generation of the Attention.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next sqlsrv32.dll that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	WORKAROUND
	
	As a work around you can use either of the following:
	
	- Disable ASYNC.
	
	  -or-
	
	- Move the SQLNumResultCols call after the SQLExecute.
	
	STATUS
	======
	
	This bug was corrected in SQLSrv32.dll version 3.60.0319 and 3.70.0623.
	
	MORE INFORMATION
	================
	
	The following code should demonstrate the problem. Set your data source name
	(DSN) to Pubs up to use sockets then run. Watch a SQLTrace window and you should
	see the Attention's being generated and the application should hang when trying
	to execute the SQLNumResultCols command. An ODBC trace shows a steady string of
	SQL_STILL_EXECUTING returns. Switching the SQLNumResultCols command to occur
	after the Execute resolves the problem.
	
	  #include <windows.h>
	  #include <sql.h>
	  #include <sqlext.h>
	  #include <odbcinst.h>
	  #include <winver.h>
	  #include <string.h>
	  #include <stdio.h>
	
	  char szConnect[] = "DSN=PUBS;UID=sa;PWD=";
	
	  char szQuery[] = "SELECT au_id FROM Authors";
	
	  main()
	  {
	  	HENV henv;
	  	HDBC hdbc;
	  	HSTMT hstmt;
	  	RETCODE rtcd;
	  	short wcbOut;
	  	short cyclecnt = 0;
	
	  	char  szBuf[2001];
	  	WORD cbBufMax = 2000;  
	  	char *   pszBuf = szBuf;
	  	SQLSMALLINT parmcnt;
	  	SQLSMALLINT * parmcntptr = &parmcnt;
	
	  	rtcd = SQLAllocEnv(&henv);
	  	rtcd = SQLAllocConnect(henv, &hdbc);
	
	  	rtcd = SQLDriverConnect(hdbc, NULL,(unsigned char *) szConnect,
	  				strlen(szConnect), NULL, 0, &wcbOut,
	  				SQL_DRIVER_NOPROMPT);
	  //Needs to be in async
	  	rtcd = SQLSetConnectOption(hdbc,SQL_ASYNC_ENABLE,SQL_ASYNC_ENABLE_ON);
	  	rtcd = SQLAllocStmt(hdbc, &hstmt);
	  	do
	  	{
	  		rtcd = SQLPrepare(hstmt, (unsigned char *)szQuery, strlen(szQuery));
	  		//If the SQLNumResultCols is moved to after the execute this will work fine.
	   		do
	  		{
	  		rtcd = SQLNumResultCols(hstmt, parmcntptr);
	  		}	while (rtcd == SQL_STILL_EXECUTING);
	  		do 
	  		{
	  			rtcd = SQLExecute(hstmt);
	  		//rtcd = SQLExecDirect(hstmt,(unsigned char *) szQuery, strlen(szQuery));
	
	  		} while (rtcd == SQL_STILL_EXECUTING);
	  		//use SQLNumResultCols here and it works fine
	  /* 		do
	  		{
	  		rtcd = SQLNumResultCols(hstmt, parmcntptr);
	  		}	while (rtcd == SQL_STILL_EXECUTING);
	  */ 
	  		rtcd = SQLFreeStmt(hstmt, SQL_CLOSE);
	  		cyclecnt++;
	  	}	while (cyclecnt < 20);
	
	  	return 0;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbODBC360fix kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbODBC370fix kbMDACNoSweep 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbODBCSQLServ360 kbODBCSQLServ370
	Version           : :3.6,3.7
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
