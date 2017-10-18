---
layout: page
title: "Q190457: FIX: Extended Character Data Overwritten Upon Reselection"
permalink: kb/190/Q190457/
---

## Q190457: FIX: Extended Character Data Overwritten Upon Reselection

	Article: Q190457
	Product(s): Open Database Connectivity (ODBC)
	Version(s): Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbODBC kbOracle kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbMDACNo
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.0, versions Build 2.73.7269, Build 2.73.7283.01, Build 2.73.7283.03 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If static cursors are used with the Microsoft Oracle ODBC driver, extended ANSI
	characters are over-written the second time any particular record is read.
	
	RESOLUTION
	==========
	
	Use dynamic cursors instead of static cursors or upgrade to version 2.573.2927
	of the Microsoft Oracle ODBC driver.
	
	STATUS
	======
	
	This problem has been fixed in the 2.573.2927 version of the Microsoft Oracle
	ODBC driver. This driver can be found in the Microsoft Data Access Components
	(MDAC) 2.0, Data Access Software Development Kit (DASDK) 2.0, and Visual Studio
	6.0. This driver can be downloaded with the new Data Access SDK version 2.0 from
	the following Web address:
	
	  http://www.microsoft.com/data/
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create and Execute the following Console application. The statements to create
	the table and records are at the bottom of the code. Change the UID, PWD, and
	DSN in the code to match your server configuration.
	
	You should see the last letter change when you reselect the first record in the
	table.
	
	The data source must be set up correctly to see the behavior.
	
	Steps to Set up the Driver
	--------------------------
	
	1. Create Oracle Data Source.
	
	2. Add User Name.
	
	3. Add Server name.
	
	4. From the Options menu, choose Translation and then choose the Select button.
	
	5. Choose "MS Code Page3 Translator".
	
	6. Choose Windows Latin 1 (1252)/850.
	
	Create the table on the Oracle Server in SQL*Plus with the following code:
	
	     create table myTest (id_num int, last_name char(25));
	     insert into myTest(id_num,last_name) values (1,'johny[ASCII 224]');
	     insert into myTest(id_num,last_name) values (2,'smith[ASCII 232]');
	     insert into myTest(id_num,last_name) values (2,'james');
	
	Use the following line once you have tested the problem to remove the table from
	the Oracle server:
	
	  DROP TABLE myTest;
	
	     // Begin sample code.
	     #define STR_LEN 128+1
	
	     #include <windows.h>
	     #include <sql.h>
	     #include <sqlext.h>
	     #include <odbcinst.h>
	     #include <iostream.h>
	     #include "stdio.h"
	
	     int main()
	
	     {
	        SQLHENV    henv;
	        SQLHDBC    hdbc;
	        SQLHSTMT   hstmt;
	        SQLRETURN  retcode;
	        SQLCHAR      szLastName[STR_LEN];
	        SQLINTEGER cbLastName;
	        SQLUINTEGER    pcrow;
	        SQLUSMALLINT     rgfRowStatus;
	
	        pcrow=1;
	        szLastName[0]='\0';
	        cbLastName=0;
	        /*Allocate environment handle */ 
	        retcode = SQLAllocHandle(SQL_HANDLE_ENV, SQL_NULL_HANDLE, &henv);
	
	        if (retcode == SQL_SUCCESS || retcode == SQL_SUCCESS_WITH_INFO) {
	        /* Set the ODBC version environment attribute */ 
	        retcode = SQLSetEnvAttr(henv, SQL_ATTR_ODBC_VERSION,
	                               (void*)SQL_OV_ODBC3, 0);
	
	        if (retcode == SQL_SUCCESS || retcode == SQL_SUCCESS_WITH_INFO) {
	           /* Allocate connection handle */ 
	           retcode = SQLAllocHandle(SQL_HANDLE_DBC, henv, &hdbc);
	
	           if (retcode == SQL_SUCCESS || retcode == SQL_SUCCESS_WITH_INFO) {
	              /* Set login timeout to 5 seconds. */ 
	              /*SQLSetConnectAttr(hdbc, SQL_ATTR_LOGIN_TIMEOUT, 5, 0);
	
	              /* Connect to data source */ 
	              retcode = SQLConnect(hdbc, (SQLCHAR*) "NCORACLE73", SQL_NTS,
	                                  (SQLCHAR*) "pss", SQL_NTS,
	                                  (SQLCHAR*) "pss", SQL_NTS);
	
	              if (retcode == SQL_SUCCESS || retcode ==
	                  SQL_SUCCESS_WITH_INFO){
	                  /* Allocate statement handle */ 
	                  retcode = SQLAllocHandle(SQL_HANDLE_STMT, hdbc, &hstmt);
	
	                  if (retcode == SQL_SUCCESS || retcode ==
	
	                      SQL_SUCCESS_WITH_INFO) {
	
	                     retcode = SQLSetStmtAttr(hstmt,SQL_ATTR_CONCURRENCY,
	                               (void *)SQL_CONCUR_READ_ONLY ,SQL_NTS);
	              // Fails with static cursor but works with Dynamic.
	              // Change parameter 3 in line below to SQL_CURSOR_STATIC or
	              // SQL_CURSOR_DYNAMIC to switch cursor type.
	                    retcode = SQLSetStmtAttr(hstmt,SQL_ATTR_CURSOR_TYPE,
	                              (void *) SQL_CURSOR_STATIC  ,SQL_NTS);
	
	                    retcode = SQLPrepare(hstmt,(unsigned char *)"SELECT *
	                                         FROM myTest", SQL_NTS);
	                    retcode = SQLExecute(hstmt);
	                    retcode = SQLBindCol(hstmt,2,SQL_C_CHAR, szLastName,
	                                         STR_LEN,(long*) cbLastName);
	             //SQLFetchScroll
	                    retcode = SQLFetchScroll(hstmt, SQL_FETCH_NEXT, 0);
	                    cout << "Printing Record 1: " << szLastName << "\n";
	
	                    retcode = SQLFetchScroll(hstmt, SQL_FETCH_NEXT, 0);
	                    cout << "Printing Record 2: " << szLastName << "\n";
	
	                    retcode = SQLFetchScroll(hstmt, SQL_FETCH_FIRST, 0);
	                    cout << "Printing Record 1: " << szLastName << "\n";
	
	                    SQLFreeHandle(SQL_HANDLE_STMT, hstmt);
	                 }
	                 SQLDisconnect(hdbc);
	              }
	              SQLFreeHandle(SQL_HANDLE_DBC, hdbc);
	           }
	        }
	        SQLFreeHandle(SQL_HANDLE_ENV, henv);
	     }
	     return 1;
	
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbODBC kbOracle kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbMDACNoSweep 
	Technology        : kbAudDeveloper kbODBCSearch kbODBCOracle2737269 kbODBCOracle273728303 kbODBCOracle273728301 kbODBCOracle200Search
	Version           : :Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
