---
layout: page
title: "Q136926: HOWTO: Improve Performance of SQL Queries"
permalink: /kb/136/Q136926/
---

## Q136926: HOWTO: Improve Performance of SQL Queries

	Article: Q136926
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSQL kbvfp300 kbvfp500 kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides tips to help you modify a SQL query to make it run faster.
	
	MORE INFORMATION
	================
	
	Some things to consider:
	
	- Joins slow down SQL queries. If you don't really need a FROM table, remove
	  it.
	
	- If the query involves joins, make sure there are indexes that can be used to
	  perform the join. That is, for "WHERE T1.F1 = T2.F2," make sure there are
	  indexes on T1.F1 and/or T2.F2. (If you have indexes on both, the query
	  optimizer will choose the one it thinks is better.)
	
	- Sorts slow down SQL queries. Sorts are performed to execute ORDER BY, GROUP
	  BY, SELECT DISTINCT, and UNION DISTINCT.
	
	   - Do not use SELECT DISTINCT unless you really need it. Note that if you
	     have a GROUP BY, you don't also need a SELECT DISTINCT.
	
	   - Do not use UNION DISTINCT unless you really need it. Note that if you
	     don't specify ALL or DISTINCT after UNION, the default is DISTINCT, so you
	     need to explicitly say UNION ALL.
	
	   - Do not specify both GROUP BY and ORDER BY. If specify both and they are
	     identical, the optimizer will automatically remove the ORDER BY.
	
	- Specify only those fields you need in the SELECT clause. When the query
	  engine creates temporary intermediate result tables, it has to include all
	  the fields you specified in the SELECT clause, plus any that are referenced
	  in the WHERE clause if they are needed for later execution. For complex
	  queries, a field in the SELECT clause could be copied from one table to
	  another several times. This can especially affect performance if the query
	  includes memo fields.
	
	- To take advantage of Rushmore optimization, ensure that filter conditions in
	  the WHERE clause are Rushmore optimizable. You don't always need to make sure
	  every condition is Rushmore optimizable, but make sure the Rushmore
	  optimizable ones will greatly limit the rows from each source table.
	
	For more information about the Rushmore technology and how to optimize your
	applications, please see the Visual FoxPro 3.0 Developer's Guide, chapter 17,
	"Optimizing Applications."
	
	Additional query words: speed improve faster quicker tips
	
	======================================================================
	Keywords          : kbSQL kbvfp300 kbvfp500 kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
