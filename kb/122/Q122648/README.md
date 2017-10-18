---
layout: page
title: "Q122648: BUG: Outer Join with Another Table in FROM May Cause SQL_ERROR"
permalink: kb/122/Q122648/
---

## Q122648: BUG: Outer Join with Another Table in FROM May Cause SQL_ERROR

	Article: Q122648
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# Addon_Bugs: 10567 (1.02.3231)
	
	SYMPTOMS
	========
	
	A left outer join between two tables along with a third table in the FROM clause
	can cause SQL_ERROR to be returned. This happens only when the outer join escape
	syntax is used and the third table appears after the escape sequence in the FROM
	clause.
	
	SQLExecDirect:
	
	     SELECT t1.col1, t1.col2, t2.col1, t2.col2
	     FROM {oj testoj1 t1 left outer join testoj2 t2 on t1.col1 = t2.col1},
	          testoj3 t3,
	     WHERE t3.col1 = t1.col1
	
	This generates a syntax error:
	
	  SQLSTATE = 37000 NativeError = 102
	  ErrorMsg = [Microsoft][ODBC SQL Server Driver][SQL Server] Incorrect syntax
	  near ','
	
	CAUSE
	=====
	
	The SQL Server driver incorrectly translates the above SELECT statement to:
	
	     SELECT t1.col1, t1.col2, t2.col1, t2.col2
	     FROM  testoj1 t1,  testoj2 t2
	     WHERE  t1.col1 *=  t2.col1 ,  testoj3 t3
	     WHERE t3.col1 = t1.col1
	
	This is incorrect syntax; hence, it causes the error.
	
	WORKAROUND
	==========
	
	Rewrite the SELECT statement such that testoj3 appears before the outer join
	escape clause:
	
	  SELECT t1.col1, t1.col2, t2.col1, t2.col2
	  FROM   testoj3 t3,
	
	  {oj testoj1 t1 left outer join testoj2 t2 on t1.col1 = t2.col1}
	
	  WHERE t3.col1 = t1.col1
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC SQL Server Driver versions
	1.02.3231. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.02.3231 kbbug1.02.3231 kbprg kberrmsg
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
