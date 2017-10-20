---
layout: page
title: "Q239099: FIX: Microsoft ODBC Driver for Oracle Truncates Error Messages"
permalink: /kb/239/Q239099/
---

## Q239099: FIX: Microsoft ODBC Driver for Oracle Truncates Error Messages

{% raw %}

	Article: Q239099
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.1,2.5,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.57
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711, Build 2.573.4202, Build 2.573.4403 
	- Microsoft Data Access Components versions 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Open Database Connectivity (ODBC) Driver for Oracle, error
	messages greater than 255 characters are randomly truncated. The number of
	characters returned to the application may vary depending on the number of
	characters in the error message. This problem does not occur when using the ODBC
	driver from Oracle.
	
	The ODBC header file SQL.H defines SQL_MAX_MESSAGE_LENGTH to be 512 characters,
	permitting messages of up to 511 characters, plus a Null termination character,
	to be returned.
	
	CAUSE
	=====
	
	Internal to the ODBC driver, the error message buffer is declared as a UCHAR
	datatype. The UCHAR type has a maximum size of 255 (0xFF) characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in MDAC 2.5 and later.
	
	MORE INFORMATION
	================
	
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a new console application in Visual C++ by using the following code. This
	code creates a stored procedure in Oracle that deliberately raises an Oracle
	error, and then returns a large error message.
	
	When the code is run, the number of characters returned in the error message is
	not the maximum defined size of 512 (511 plus the Null termination character).
	
	Please note that you must modify the code to use the correct ODBC DSN, userId,
	and password. Also, coping and pasting this code might produce compiler errors
	because of lost text formatting. Correct the text formatting in a Visual C++
	editor before compiling by bringing appropriate statements to new line.
	
	  #include <windows.h>
	  #include <stdio.h>
	  #include <sql.h>
	  #include <sqlext.h>
	
	  main()
	  {
	  	RETCODE rc;
	  	HENV henv;
	  	HDBC hdbc;
	  	HSTMT hstmt;
	  	
	
	  	char * dsn = "YourServer";
	  	char * uid = "scott";
	  	char * pwd = "tiger";
	  	char * SQLStr = "{call TESTERR}";
	
	  		SQLCHAR createProc[] = "CREATE OR REPLACE PROCEDURE TESTERR AS output_err_msg VARCHAR2(1000); raised_error_string "
	  		"VARCHAR2(2); BEGIN raised_error_string := 'This assignment will raise an exception'; EXCEPTION WHEN " 
	  		"OTHERS THEN  output_err_msg :='This error message should contain 700 characters. "
	  		"This error message should contain 700 characters. "
	  		"This error message should contain 700 characters. "
	  		"This error message should contain 700 characters. "
	  		"This error message should contain 700 characters. "
	  		"This error message should contain 700 characters. "
	  		"This error message should contain 700 characters. "
	  		"This error message should contain 700 characters. "
	  		"This error message should contain 700 characters. "
	  		"This error message should contain 700 characters. "
	  		"This error message should contain 700 characters. "
	  		"This error message should contain 700 characters. "
	  		"This error message should contain 700 characters. "
	  		"This error message should contain 700 characters. "
	  		"Errors!';raise_application_error(-20250, output_err_msg);END;";
	
	  	
	  //	Variables for SQLGetDiagRec.
	  	SQLCHAR sqlState[20];
	  	SQLCHAR errorMsg[1000];
	  	SQLSMALLINT errorMsgLen;
	  	SQLINTEGER nativeError;
	  	char szTemp[4096];
	
	  	rc = SQLAllocEnv(&henv);
	  	rc = SQLAllocConnect(henv, &hdbc);
	
	  	rc = SQLConnect(hdbc, (unsigned char *)dsn,
	  		SQL_NTS, (unsigned char *)uid,
	  		SQL_NTS, (unsigned char *)pwd, SQL_NTS);
	
	  	rc = SQLAllocHandle(SQL_HANDLE_STMT, hdbc,&hstmt);
	
	  //	Create the stored procedure in Oracle.	
	  	rc = SQLExecDirect(hstmt, (unsigned char *)createProc, SQL_NTS);
	  	SQLFreeStmt(hstmt, SQL_CLOSE);
	
	  //	Run the newly created stored procedure.
	  	rc = SQLExecDirect(hstmt, (unsigned char *)SQLStr, SQL_NTS);
	
	  //	Retrieve the raised error message.			
	  	SQLGetDiagRec(SQL_HANDLE_STMT,hstmt,1,sqlState,
	  		&nativeError,errorMsg,1000,&errorMsgLen);
	
	  //	Display the size of the returned error message, and the message itself.
	  	sprintf(szTemp, "Length=[%d] Text=[%s]", strlen((char*)errorMsg), errorMsg );
	  	MessageBox(NULL, (LPSTR) szTemp,"ODBC Error Message",0);
	
	  	SQLFreeStmt(hstmt, SQL_CLOSE);
	  	SQLFreeStmt(hstmt, SQL_DROP);
	  	SQLDisconnect(hdbc);
	  	SQLFreeConnect(hdbc);
	  	SQLFreeEnv(henv);
	  	return(TRUE);
	  };
	
	Additional query words: oracle odbc driver truncate error messages 255 512 sql_max_message_length hotfix
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC250fix kbMDACNoSweep 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC210 kbMDAC250 kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle25734202 kbODBCOracle25734403 kbODBCOracle250Search
	Version           : :2.1,2.5,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.573.4403
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
