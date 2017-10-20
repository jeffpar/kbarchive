---
layout: page
title: "Q181254: INF: How to Use SQL_C_NUMERIC Data Type with Numeric Data"
permalink: /kb/181/Q181254/
---

## Q181254: INF: How to Use SQL_C_NUMERIC Data Type with Numeric Data

{% raw %}

	Article: Q181254
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ODBC 3.0 introduces a new ODBC C data type, identified by SQL_C_NUMERIC, which
	allows applications to directly handle numeric data. The C buffer used has the
	type definition of SQL_NUMERIC_STRUCT, and is a structure with fields for
	storing the precision, scale, sign, and value of the numeric data. The value
	itself is stored as a scaled integer with the least significant byte beginning
	in the leftmost position.
	
	Additional information regarding the format and use of SQL_NUMERIC_STRUCT is
	available in the ODBC 3.0 Programmer's Reference, in Appendix D (Data Types) in
	the "C Data Types" section.
	
	MORE INFORMATION
	================
	
	WARNING: ANY USE BY YOU OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN
	RISK. Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	The following sample program illustrates the use of SQL_C_NUMERIC by inserting
	123.45 into a table defined with a column whose data type is numeric or decimal,
	precision 5 and scale 2. Comments are embedded in the code to explain the key
	points. The ODBC driver used to run this program must support ODBC 3.0
	functionality.
	
	  #include <windows.h>
	  #include <sql.h>
	  #include <sqlext.h>
	
	  void main() {
	
	     SQLHENV     henv = NULL;
	     SQLHDBC     hdbc = NULL;
	     SQLHSTMT   hstmt = NULL;
	
	     SQL_NUMERIC_STRUCT     NumStr;
	     SQLINTEGER                     cbNumStr = sizeof (NumStr);
	
	     SQLAllocHandle(SQL_HANDLE_ENV, NULL, &henv);
	
	     /* Set the ODBC behavior version. */ 
	     SQLSetEnvAttr(henv,
	           SQL_ATTR_ODBC_VERSION,
	           (SQLPOINTER) SQL_OV_ODBC3,
	           SQL_IS_INTEGER);
	
	     SQLAllocHandle(SQL_HANDLE_DBC, henv, &hdbc);
	
	     /* Substitute your own connection information */ 
	     SQLConnect(hdbc,
	        (SQLCHAR *) "MyDSN", 5,
	        (SQLCHAR *) "UserID", 6,
	        (SQLCHAR *) "Password", 8);
	
	     SQLAllocHandle(SQL_HANDLE_STMT, hdbc, &hstmt);
	
	     /*
	        Set up the SQL_NUMERIC_STRUCT, NumStr, to hold "123.45".
	
	        First, we need to scale 123.45 to an integer: 12345
	        One way to switch the bytes is to convert 12345 to Hex:  0x3039
	        Since the least significant byte will be stored starting from the
	        leftmost byte, "0x3039" will be stored as "0x3930".
	
	        The precision and scale fields are not used for input to the driver,
	        only for output from the driver. The precision and scale will be set
	        in the application parameter descriptor later.
	     */ 
	
	     NumStr.sign = 1;   /* 1 if positive, 2 if negative */ 
	
	        memset (NumStr.val, 0, 16);
	     NumStr.val [0] = 0x39;
	     NumStr.val [1] = 0x30;
	
	     /* SQLBindParameter needs to be called before SQLSetDescField */ 
	     SQLBindParameter(hstmt,
	            1,
	            SQL_PARAM_INPUT,
	            SQL_C_NUMERIC,
	            SQL_NUMERIC,
	            5,
	            2,
	            &NumStr,
	            0,
	            (SQLINTEGER *) &cbNumStr);
	
	     /* Modify the fields in the implicit application parameter descriptor */ 
	     SQLHDESC   hdesc = NULL;
	
	     SQLGetStmtAttr(hstmt, SQL_ATTR_APP_PARAM_DESC, &hdesc, 0, NULL);
	     SQLSetDescField(hdesc, 1, SQL_DESC_TYPE, (SQLPOINTER) SQL_C_NUMERIC, 0);
	     SQLSetDescField(hdesc, 1, SQL_DESC_PRECISION, (SQLPOINTER) 5, 0);
	     SQLSetDescField(hdesc, 1, SQL_DESC_SCALE, (SQLPOINTER) 2, 0);
	     SQLSetDescField(hdesc, 1, SQL_DESC_DATA_PTR, (SQLPOINTER) &NumStr, 0);
	
	     SQLExecDirect(hstmt,
	           (SQLCHAR *) "INSERT INTO table (numeric_column) VALUES (?)",
	           SQL_NTS);
	
	     SQLFreeHandle(SQL_HANDLE_STMT, hstmt);
	
	     SQLDisconnect (hdbc);
	
	     SQLFreeHandle(SQL_HANDLE_DBC, hdbc);
	     SQLFreeHandle(SQL_HANDLE_ENV, henv);
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
