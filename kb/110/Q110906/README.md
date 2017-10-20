---
layout: page
title: "Q110906: PRB: SQL Invalid ORDER BY"
permalink: /kb/110/Q110906/
---

## Q110906: PRB: SQL Invalid ORDER BY

{% raw %}

	Article: Q110906
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are executing an SQL-SELECT statement with a UNION clause and an ORDER
	BY clause, the error message "SQL Invalid ORDER BY" is generated if the ORDER BY
	clause references a field name.In Visual FoxPro,the error is "SQL: Order by
	Clause is Invalid". For example, this error will occur if you type the following
	SELECT statements in the Command window:
	
	       SELECT * FROM customer ;
	            UNION ;
	       SELECT * FROM customer_a ORDER BY cno
	
	CAUSE
	=====
	
	This error message is the correct response according to page L3-872 of the
	"Language Reference."
	
	RESOLUTION
	==========
	
	To resolve this problem, replace the ORDER BY <character expression>
	clause with an ORDER BY <numeric expression> clause, where the numeric
	expression indicates the number of the column by which to order the output. Only
	the final SELECT statement can have a ORDER BY clause.
	
	The following example demonstrates the correct syntax:
	
	      ** This example will order the output by the first output field
	       SELECT * FROM customer ;
	            UNION ;
	       SELECT * FROM customer_a ORDER BY 1
	
	Additional query words: VFoxWin FoxDos FoxWin
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : MS-DOS:2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0
	
	=============================================================================
	

{% endraw %}
