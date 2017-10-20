---
layout: page
title: "Q293659: BUG: SQL Server ODBC Driver Incorrectly Maps Unicode Datatypes"
permalink: /kb/293/Q293659/
---

## Q293659: BUG: SQL Server ODBC Driver Incorrectly Maps Unicode Datatypes

{% raw %}

	Article: Q293659
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.1,2.1 (GA),2.1 SP1,2.1 SP2,2.5,2.5 SP1,2.6,2000.80.194,3.5,3.6,3.7
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbSQLServ kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbmdac270
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, versions 2000.80.194, 3.5, 3.6, 3.7 
	- Microsoft Data Access Components versions 2.1, 2.1 (GA), 2.1 SP1, 2.1 SP2, 2.5, 2.5 SP1, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Client applications that call the ODBC API SQLBindCol() function to bind a
	Unicode data column using SQL_C_DEFAULT will be bound as SQL_C_CHAR.
	
	When you call SQLDescribeCol() on a Unicode datatype, the column's datatype will
	be reported as SQL_WCHAR, SQL_WVARCHAR, or SQL_WLONGVARCHAR. Also, the
	datalength of the column will be reported at 50% of the actual column length
	from the ODBC API function SQLDescribeCol().
	
	CAUSE
	=====
	
	The SQL Server ODBC driver intentionally maps these Unicode datatypes to
	SQL_C_CHAR to protect older applications that have been written to use
	SQL_C_DEFAULT.
	
	Mapping columns bound with SQL_C_DEFAULT to Unicode datatypes of SQL_WCHAR,
	SQL_WVARCHAR, or SQL_LONGVARCHAR could potentially break older applications.
	
	RESOLUTION
	==========
	
	Applications that require access to extended characters should not bind the
	Unicode datatype columns as SQL_C_DEFAULT. Instead, these programs should bind
	Unicode columns as SQL_WCHAR, SQL_WVARCHAR, or SQL_LONGVARCHAR in order to avoid
	this behavior in the SQL Server ODBC driver.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem:
	
	  #define UNICODE
	
	  #include <windows.h>
	  #include <sql.h>
	  #include <sqlext.h>
	  #include <stdio.h>
	  #include <string.h>
	
	  main ()
	  {
	  	HSTMT hstmt;
	  	HENV henv;
	  	HDBC hdbc;
	  	SDWORD cbValueMax;
	  	SQLRETURN sr;
	  	wchar_t buffer[200];
	  	long keyval;
	  	BYTE outbuff[102];
	  	SQLINTEGER StrLen_or_Ind1 = sizeof( long ), StrLen_or_Ind2;
	
	  	//Allocate environment handle.
	      sr = SQLAllocHandle(SQL_HANDLE_ENV, SQL_NULL_HANDLE, &henv);
	
	  	//Set the ODBC version.
	      sr = SQLSetEnvAttr(henv, SQL_ATTR_ODBC_VERSION, (void*)SQL_OV_ODBC3, 0);
	
	  	//Allocate connection handle.
	      sr = SQLAllocHandle(SQL_HANDLE_DBC, henv, &hdbc); 
	
	  	//Connect.
	      sr=SQLConnect(hdbc,L"LocalServer",SQL_NTS,L"sa",SQL_NTS,L"",SQL_NTS);
	
	  	//Allocate statement handle.
	      sr = SQLAllocHandle(SQL_HANDLE_STMT, hdbc, &hstmt);
	
	      wcscpy( buffer, L"select * from ntesttab" );
	      cbValueMax = strlen( ( char * ) buffer);
	  	memset( outbuff, 0, 100 );
	      
	  	//Execute the statement.
	      sr = SQLExecDirect(hstmt, buffer, SQL_NTS );
	
	  	//Bind the columns.
	  	sr = SQLBindCol( hstmt, 1, SQL_C_LONG, & keyval, sizeof( long ), & StrLen_or_Ind1 );
	
	  	//Here we are binding the WCHAR column to SQL_C_DEFAULT. 
	  	//If you do this, you will see that the value in outbuff is truncated. 
	  	//You will see the truncation only when you have some Unicode data.
	  	//Also, the test table ntesttab has a field which is nchar(10). 
	  	//So StrLen_or_Ind2 should report 20, but due to this bug it will 
	  	//report 10.
	  	sr = SQLBindCol( hstmt, 2, SQL_C_DEFAULT, & outbuff, 100, & StrLen_or_Ind2 );
	
	  	//Comment the above, and uncomment the following line to correct 
	  	//this problem. If you bind it to SQL_C_WCHAR, the outbuff will 
	  	//contain Unicode data and StrLen_or_Ind2 will correctly report 20.
	
	  	//sr = SQLBindCol( hstmt, 2, SQL_C_WCHAR, & outbuff, 100, & StrLen_or_Ind2 );
	
	  	//Fetch the data.
	  	sr = SQLFetch( hstmt );
	
	  	//Examine the memory for outbuff here to see the returned value as char, not wchar.
	
	  	//Free connection/statement/environment.
	  	SQLFreeStmt( hstmt, SQL_CLOSE );
	  	SQLFreeStmt( hstmt, SQL_DROP );
	  	SQLDisconnect( hdbc );
	  	SQLFreeHandle( SQL_HANDLE_DBC, hdbc );
	  	SQLFreeHandle( SQL_HANDLE_ENV, henv );
	
	      return (0); 
	  }
	
	The following is the script to create the table nTestTab:
	
	  CREATE TABLE [dbo].[ntesttab] (
	  	[id] [int] IDENTITY (1, 1) NOT NULL ,
	  	[unicodeText] [nchar] (10)  NULL 
	  ) ON [PRIMARY]
	
	REFERENCES
	==========
	
	ODBC API Programmer's Reference, MSDN, Platform SDK Documentation
	
	Additional query words: Unicode, ODBC, SQLBindCol
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbSQLServ kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbmdac270 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC210 kbMDAC210SP1 kbMDAC210SP2 kbMDAC250SP1 kbMDAC250 kbMDAC260 kbODBCSQLServ200080194 kbODBCSQLServ350 kbODBCSQLServ360 kbODBCSQLServ370 kbMDAC270
	Version           : :2.1,2.1 (GA),2.1 SP1,2.1 SP2,2.5,2.5 SP1,2.6,2000.80.194,3.5,3.6,3.7
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
