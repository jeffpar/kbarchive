---
layout: page
title: "Q252699: BUG: Access ODBC Driver Cannot Insert Dates Prior to the Year 17"
permalink: /kb/252/Q252699/
---

## Q252699: BUG: Access ODBC Driver Cannot Insert Dates Prior to the Year 17

	Article: Q252699
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.1,2.5,2.6,4.0
	Operating System(s): 
	Keyword(s): kbDatabase kbJET kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC210SP2bug kbMDAC250bug
	Last Modified: 24-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Access, version 4.0 
	- Microsoft Data Access Components versions 2.1, 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a date prior to the year 1753 by using Microsoft Access ODBC
	Driver, the following error message is displayed:
	
	  [22008] [Microsoft][ODBC Microsoft Access Driver]Datetime field overflow
	  (null)
	
	RESOLUTION
	==========
	
	This is a limitation of the Jet 4.0 ODBC driver. No workaround is available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a new Microsoft Access 97 or Microsoft 2000 database.
	
	2. Create a new Microsoft Visual C++ Win32 Console application.
	
	3. Copy the following code into the application:
	
	  #include <windows.h>
	  #include <sql.h>
	  #include <sqlext.h>
	  #include <tchar.h>
	  #include <stdlib.h>
	  #include <stdio.h>
	
	  void HandleError(SQLHANDLE	hHandle, SQLSMALLINT hType, RETCODE RetCode)
	  {
	  	SQLSMALLINT	iRec = 0;
	  	SQLINTEGER	iError;
	  	TCHAR		szMessage[1000];
	  	TCHAR		szState[SQL_SQLSTATE_SIZE];
	
	  	if (RetCode == SQL_INVALID_HANDLE)
	  	{
	  		fprintf(stderr,"Invalid handle!\n");
	  		return;
	  	}
	
	  	while (SQLGetDiagRec(hType,
	  						 hHandle,
	  						 ++iRec,
	  						 (SQLCHAR *)szState,
	  						 &iError,
	  						 (SQLCHAR *)szMessage,
	  						 (SQLSMALLINT)(sizeof(szMessage) / sizeof(TCHAR)),
	  						 (SQLSMALLINT *)NULL) == SQL_SUCCESS)
	  	{
	  		fprintf(stderr,TEXT("[%5.5s] %s (%d)\n"),szState,szMessage,iError);
	  	}
	
	  }
	
	  void main(int argc, char* argv[])
	  {
	      SQLHENV henv;
	      SQLHDBC hdbc;
	      SQLHSTMT hstmt;
	      SQLRETURN nstatus;
	  	
	  	SQLCHAR szConnect[1024];
	  	SQLSMALLINT cbConnString;
	
	  	//Not checking the return codes in some cases for clarity.
	  	
	  	nstatus = SQLAllocHandle(SQL_HANDLE_ENV,NULL,&henv);
	  	nstatus = SQLSetEnvAttr(henv,SQL_ATTR_ODBC_VERSION,(SQLPOINTER) SQL_OV_ODBC3,0);
	  	nstatus = SQLAllocHandle(SQL_HANDLE_DBC,henv,&hdbc);
	  	nstatus = SQLDriverConnect(hdbc,NULL,
	  		(SQLCHAR*) "Driver={Microsoft Access Driver (*.mdb)};DBQ=C:\\db1.mdb", 
	  		SQL_NTS, szConnect, 1024, &cbConnString, SQL_DRIVER_NOPROMPT);
	  		
	  	if (nstatus != SQL_SUCCESS && nstatus != SQL_SUCCESS_WITH_INFO)
	  	{
	  		HandleError(hdbc,SQL_HANDLE_DBC,nstatus);
	  		return;
	  	}
	
	  	nstatus = SQLAllocHandle(SQL_HANDLE_STMT,hdbc,&hstmt);
	
	  	nstatus = SQLExecDirect(hstmt,(SQLCHAR*) "CREATE TABLE DateTable (dateval datetime)",SQL_NTS);								
	  	if (nstatus != SQL_SUCCESS && nstatus != SQL_SUCCESS_WITH_INFO)
	  	{
	  		HandleError(hstmt,SQL_HANDLE_STMT,nstatus);
	  		return;
	  	}
	
	  	TIMESTAMP_STRUCT dateVal;
	  	memset(&dateVal,0,sizeof(TIMESTAMP_STRUCT));
	  	dateVal.year = 1750;
	  	dateVal.month = 1;
	  	dateVal.day = 1;
	
	  	nstatus = SQLBindParameter(hstmt, 1, SQL_PARAM_INPUT, SQL_C_TYPE_TIMESTAMP, SQL_TIMESTAMP,
	  		0,0,(SQLPOINTER*) &dateVal,0,0); 
	
	  	nstatus = SQLExecDirect(hstmt, (SQLCHAR*) "INSERT INTO DateTable VALUES (?)",SQL_NTS);
	  	if (nstatus != SQL_SUCCESS && nstatus != SQL_SUCCESS_WITH_INFO)
	  	{
	  		HandleError(hstmt,SQL_HANDLE_STMT,nstatus);
	  	}
	
	  	nstatus = SQLExecDirect(hstmt,(SQLCHAR*) "DROP TABLE DateTable",SQL_NTS);								
	  	if (nstatus != SQL_SUCCESS && nstatus != SQL_SUCCESS_WITH_INFO)
	  	{
	  		HandleError(hstmt,SQL_HANDLE_STMT,nstatus);
	  	}
	
	  	nstatus = SQLFreeHandle(SQL_HANDLE_STMT, hstmt);
	  	nstatus = SQLDisconnect(hdbc);
	  	nstatus = SQLFreeHandle(SQL_HANDLE_DBC,hdbc);
	  	nstatus = SQLFreeHandle(SQL_HANDLE_ENV,henv);
	
	  	printf("Done");
	  }
	
	4. Change the connection string to reflect the location of your Access database.
	
	5. Compile and run the application. Observe errors.
	
	Additional query words: datetime incorrect insert over flow 1753 1754 1800
	
	======================================================================
	Keywords          : kbDatabase kbJET kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC210SP2bug kbMDAC250bug kbMDAC260bug 
	Technology        : kbAudDeveloper kbAccessSearch kbODBCSearch kbMDACSearch kbMDAC210 kbMDAC250 kbMDAC260 kbODBCAccess400
	Version           : :2.1,2.5,2.6,4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
