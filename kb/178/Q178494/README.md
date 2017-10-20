---
layout: page
title: "Q178494: PRB: More Than Nine Functions in Left Join Causes Memory Error"
permalink: /kb/178/Q178494/
---

## Q178494: PRB: More Than Nine Functions in Left Join Causes Memory Error

{% raw %}

	Article: Q178494
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there are more than nine functions in your left join SQL statement the
	following error occurs:
	
	  There is not enough memory to complete this operation.
	
	RESOLUTION
	==========
	
	Create separate User Defined Functions (UDFs) to eliminate the large number of
	functions in left join.
	
	Create a program called Ztest.prg that contains the functions called by the UDF
	shown below:
	
	     FUNCTION testfun1
	     RETURN STR(a.Row1,4)+STR(a.Row2,4)+STR(a.Row3,4)+STR(a.Row4,4) ;
	     +STR(a.Row5,4)
	
	     FUNCTION testfun2
	     RETURN STR(b.Row1,4)+STR(b.Row2,4)+STR(b.Row3,4)+STR(b.Row4,4) ;
	     +STR(b.Row5,4)
	
	Use the following code to execute the new SQL SELECT statement that calls the UDF
	code:
	
	     SET PROCEDURE TO Ztest.prg
	     SELECT * FROM test1 a LEFT JOIN test2 b ON testfun1() = testfun2()
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the following commands to create two tables. Each table contains one
	  record with five numeric fields:
	
	        CREATE TABLE test1 (row1 n(4),row2 n(4),row3 n(4),row4 n(4), ;
	        row5 n(4))
	        CREATE TABLE test2 (row1 n(4),row2 n(4),row3 n(4),row4 n(4), ;
	        row5 n(4))
	        INSERT INTO test1 VALUE (1,2,3,4,5)
	        INSERT INTO test2 VALUE (1,2,3,4,5)
	
	2. Issue the command below in the Command window:
	
	        SELECT * FROM Test1 a LEFT JOIN Test2 b ON ;
	        STR(a.Row1,4)+STR(a.Row2,4)+STR(a.Row3,4)+STR(a.Row4,4)
	        +STR(a.Row5,4) ;
	        = STR(b.Row1,4)+STR(b.Row2,4)+STR(b.Row3,4)
	        +STR(b.Row4,4)+STR(b.Row5,4)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
