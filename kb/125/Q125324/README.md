---
layout: page
title: "Q125324: INF: Semantics of SELECT DISTINCT with ORDER BY"
permalink: kb/125/Q125324/
---

## Q125324: INF: Semantics of SELECT DISTINCT with ORDER BY

	Article: Q125324
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The information in this article applies to ODBC Desktop Database Drivers version
	2.0. A SELECT clause that has the DISTINCT modifier in the select list and has
	an ORDER BY and the ORDER BY clause has columns that are not present in the
	select list, causes an error due to ambiguous semantics. The article discusses
	why this occurs.
	
	MORE INFORMATION
	================
	
	ODBC Desktop Database drivers are single-tier drivers. They are written as a
	thin layer on top of the JET database engine. The JET engine is the SQL engine
	that Microsoft Access and Microsoft Visual Basic use to get to dBASE, Paradox,
	FoxPro, Btrieve, Access, Excel, and Text file formats.
	
	When a SELECT statement is executed, the JET engine always performs an implicit
	sort if a DISTINCT modifier is present; an ORDER BY clause causes another sort
	to be done, which occurs after all other sorts (if any).
	
	As an extension to ANSI 89 SQL, the JET engine allows you to ORDER BY columns
	that do not appear in the SELECT list. Thus, a SELECT statement of the form
	
	     SELECT x FROM test_table
	     ORDER BY y
	
	is a valid SQL statement. On this statement, the engine does a sort on the result
	set and throws out the columns that are not selected.
	
	However, the semantics of a statement of the form
	
	     SELECT DISTINCT x FROM test_table
	     ORDER BY y
	
	are non-deterministic. The engine does an implicit sort for the SELECT DISTINCT.
	If it has the pairs (x0,y1),(x0,y2), one of them has to go because of the
	DISTINCT x. But which one should go?
	
	The decision that the engine makes will affect where in the sort order (x0)
	appears, because the sort for the ORDER BY clause is always done last. Because
	of the non-determinism in the semantics of a SELECT statement, when you try to
	execute it, you will generate the error:
	
	  [Microsoft][ODBC Microsoft Access 2.0 Driver] ORDER BY clause (y) conflicts
	  with DISTINCT
	  SQLSTATE = "22005", NativeError = -3015
	
	Note that what you want might be obtained by the following query:
	
	     SELECT DISTINCT x,y FROM test_table
	     ORDER BY y
	
	This will cause duplicate values of x that you would not otherwise see had you
	not included y in the select list. However, in most cases, this is a very
	acceptable workaround.
	
	Additional query words: 2.00.2317 dBASE Paradox Btrieve Access FoxPro Text Excel SQL 3015 Windows NT
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	
	=============================================================================
	
