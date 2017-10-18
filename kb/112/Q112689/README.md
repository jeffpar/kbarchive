---
layout: page
title: "Q112689: BUG: Use of Certain Scalar Functions May Cause SQLFetch Errors"
permalink: kb/112/Q112689/
---

## Q112689: BUG: Use of Certain Scalar Functions May Cause SQLFetch Errors

	Article: Q112689
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCDBASE: 1857 (1.01.1928)
	
	SYMPTOMS
	========
	
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
	          {fn LEFT("test"."col_DATE_Y" ,2) }        +   '-'      +
	          {fn LEFT("test"."col_DATE_MD",2)}       +   '-'  +
	          {fn RIGHT({ fn RTRIM("test"."col_DATE_MD") }  , 2  )  }
	     ,SQL_DATE)}
	     >= '1992-01-01'
	
	Errors received on SQLFetch after 1087 rows have been fetched:
	
	  [Microsoft][ODBC Single-Tier Driver]Error in predicate:
	  [Microsoft][ODBC Single-Tier Driver]Expression evaluation error
	  [Microsoft][ODBC Single-Tier Driver]Memory allocation error.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ODBC Desktop Database
	Drivers 1.0 (drivers version 1.01.1928) This problem has been fixed in drivers
	version 1.02.1403, which is available from Microsoft Product Services. For more
	information, please contact your primary support provider.
	
	Additional query words: 1.01.1928 DDD Visual C++
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
