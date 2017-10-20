---
layout: page
title: "Q119487: BUG: Time Value Converted to Datetime Using Access ODBC Driver"
permalink: /kb/119/Q119487/
---

## Q119487: BUG: Time Value Converted to Datetime Using Access ODBC Driver

{% raw %}

	Article: Q119487
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCDBASE: 2128 (1.01.1928)
	
	SYMPTOMS
	========
	
	When a value of type time is converted and inserted into a column in a Microsoft
	Access data source, defined as of type datetime, the converted value is
	incorrectly interpreted by Microsoft Access.
	
	For example, consider the following SQL statements, executed using ODBC calls:
	
	     SQLAllocEnv(&henv);
	     SQLAllocConnect (henv, &hdbc);
	     SQLDriverConnect (hdbc, hwnd, "", 0,
	       szConnStrOut,cbConnStrOutMax,&cbConnStrOut, SQL_DRIVER_PROMPT);
	     SQLAllocStmt(hdbc, &hstmt);
	
	You can use either prepared execution or direct execution.
	
	Prepared Execution
	------------------
	
	     SQLPrepare(hstmt,"insert into test values(?)",SQL_NTS);
	
	     //Bind the parameter, define rgbValue to be a TIME_STRUCT
	
	     SQLBindParameter(hstmt,1,SQL_PARAM_INPUT, SQL_C_TIME,
	                  SQL_TIMESTAMP,16,rgbValue,cbValueMax,
	     pcbValue);
	
	     //Set appropriate time values in the rgbValue
	
	     //Execute the prepared statement
	     SQLExecute(hstmt);
	
	Direct Execution
	----------------
	
	     SQLExecDirect(hstmt,"insert into test values({t '10:10:10'})",SQL_NTS);
	
	        SQLFreeStmt (hstmt, SQL_DROP);
	        SQLDisconnect(hdbc);
	        SQLFreeConnect(hdbc);
	        SQLFreeEnv(henv);
	
	When a select is executed on that table, the value returned is as expected, with
	date part set to 0:
	
	  0000-00-00 10:10:10
	
	However, if the table is opened in Microsoft Access, the datetime field contains
	time value as 12 AM with a date value of 12/30/9999.
	
	WORKAROUND
	==========
	
	Use the timestamp value with a date part as well as time part when inserting or
	doing the conversion.
	
	For SQLBindParameter, change the fCType to SQL_C_TIMESTAMP and define rgbValue to
	be TIMESTAMP_STRUCT, and set appropriate values in date and time parts of the
	structure.
	
	For SQLExecDirect, use escape clause for timestamp data instead of the escape
	clause for time data.
	
	     //Bind the parameter, define rgbValue to be a TIMESTAMP_STRUCT
	
	     SQLBindParameter(hstmt,1,SQL_PARAM_INPUT,
	     SQL_C_TIMESTAMP,SQL_TIMESTAMP,16,rgbValue,cbValueMax,pcbValue);
	
	Direct Execution
	----------------
	
	     SQLExecDirect(hstmt, "insert into test values({ts '1990-01-01
	     10:10:10'}",SQL_NTS)
	
	This will set the date and time values correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Access ODBC driver
	version 1.01.1928. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.01.1928 ODBC MSVC VC++ DDD
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
