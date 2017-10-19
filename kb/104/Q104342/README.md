---
layout: page
title: "Q104342: SQL Server System Funcs Supported by the Connectivity Kit"
permalink: /kb/104/Q104342/
---

## Q104342: SQL Server System Funcs Supported by the Connectivity Kit

	Article: Q104342
	Product(s): Microsoft FoxPro
	Version(s): 2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, version 2.6a 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft FoxPro Connectivity Kit can be used with FoxPro versions 2.5x for
	MS-DOS and Windows. The FoxPro Connectivity Kit, and the Open Database
	Connectivity (ODBC) specification in general, supports the minimum ANSI SQL
	standard. Below is a list of the SQL System functions that are supported.
	
	In FoxPro 2.6x and Visual FoxPro 3.0, the Connectivity Kit is included in the
	Professional Edition.
	
	MORE INFORMATION
	================
	
	The following table lists the supported System functions.
	
	Parameter arguments denoted as <exp> can be the name of a column, the
	result of another scaler function, or a literal, where the underlying data type
	could be represented as SQL_NUMERIC, SQL_DECIMAL, SQL_TINYINT, SQL_SMALLINT,
	SQL_INTEGER, SQL_BIGINT, SQL_FLOAT, SQL_REAL, SQL_DOUBLE, SQL_DATE, SQL_TIME, or
	SQL_TIMESTAMP.
	
	Parameter arguments listed as <value> can be a literal constant, where the
	underlying data type can be represented as SQL_NUMERIC, SQL_DECIMAL,
	SQL_TINYINT, SQL_SMALLINT, SQL_INTEGER, SQL_BIGINT, SQL_FLOAT, SQL_REAL,
	SQL_DOUBLE, SQL_DATE, SQL_TIME, or SQL_TIMESTAMP.
	
	Values returned are represented as ODBC data types.
	
	  Function            Description
	  --------------------------------------------------------------------
	
	  USER()              Returns the user's authorization name. (The
	                      user's authorization name is also available via
	                      SQLGetInfo by specifying the information type
	                      SQL_USER_NAME.)
	
	  DATABASE()          Returns the name of the database corresponding
	                      to the connection handle (hdbc). (The name of
	                      the database is also available via SQLGetInfo
	                      by specifying the information type
	                      SQL_DATABASE_NAME.)
	
	  IFNULL(exp,value)   If <exp> is null, <value> is returned. If <exp>
	                      is not null, <exp> is returned. The possible
	                      data type(s) of <value> must be compatible with
	                      the data type of <exp>.
	
	Following is an example of how the USER() function could be used from within
	FoxPro to return the user's authorization name. This example assumes that a
	valid connection to an ODBC data source has already been established and that
	the connection handle is contained in the variable mhand:
	
	FoxPro 2.x Example
	------------------
	
	        result=DBEXEC(mhand, "SELECT {FN USER()}","output")
	
	Visual FoxPro Example
	---------------------
	
	        result=SQLEXEC(mhand, "SELECT { FN USER() }", "output")
	
	REFERENCES
	==========
	
	Microsoft Open Database Connectivity Software Development Kit (SDK)
	"Programmer's Reference," version 1.0, page 530
	
	Additional query words: FoxWin FoxDos VFoxWin CK 2.50 2.50a 2.50b 2.60 2.60a
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aDOS kbFoxPro260a kbVFP300
	Version           : :2.6a,3.0
	
	=============================================================================
	
