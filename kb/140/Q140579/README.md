---
layout: page
title: "Q140579: FIX: Incorrect Results from SELECT with Nested SELECTs and OR"
permalink: kb/140/Q140579/
---

## Q140579: FIX: Incorrect Results from SELECT with Nested SELECTs and OR

	Article: Q140579
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A SELECT statement with two nested SELECTs connected by an OR may return
	incorrect results depending on which tables are open in which work areas before
	the select is run.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft Visual
	FoxPro 3.0b for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create three tables named Test1, Test2, and Test3. Place the following
	  information in each table:
	
	  Table Test1 has one field (char1) containing these records:
	
	     AAAAA
	     BBBBB
	     CCCCC
	     DDDDD
	     EEEEE
	     FFFFF
	     GGGGG
	     HHHHH
	
	  Table Test2 has two fields (Char1 and Char2) containing these records:
	
	     char1    char2
	     AAAAA    ZZZZZ
	     ZZZZZ    AAAAA
	     YYYYY    WWWWW
	     BBBBB    VVVVV
	     UUUUU    CCCCC
	     WWWWW    PPPPP
	     VVVVV
	
	  Table Test3 has one field (char1) with one record containing:
	
	     qqqqq
	
	2. Run the following program, and notice that the results of the query vary
	  depending on which tables are open and which work areas they are using:
	
	     CLOSE DATA
	     USE test1 IN 1
	     SELECT char1 FROM test1 WHERE ;
	       char1 IN (SELECT char1 from test2) OR ;
	       char1 IN (SELECT char2 from test2) ;
	       INTO CURSOR query
	     BROWSE TITLE 'Test1 open in WA1'   && returns all records from test1
	
	     CLOSE DATA
	     USE test3
	     SELECT char1 FROM test1 WHERE ;
	       char1 IN (SELECT char1 FROM test2) OR ;
	       char1 IN (SELECT char2 FROM test2) ;
	       INTO CURSOR QUERY
	     BROWSE TITLE 'Test3 open in WA1'   && returns all records from test1
	
	     CLOSE DATA
	     USE test1 IN 2
	     SELECT char1 FROM test1 WHERE ;
	       char1 IN (SELECT char1 FROM test2) OR ;
	       char1 IN (SELECT char2 FROM test2) ;
	       INTO CURSOR QUERY
	     BROWSE TITLE 'Test1 open in WA2' && returns correct records from test1
	
	     CLOSE DATA
	     SELECT char1 FROM test1 WHERE ;
	       char1 IN (SELECT char1 FROM test2) OR ;
	       char1 IN (SELECT char2 FROM test2) ;
	       INTO CURSOR QUERY
	     BROWSE TITLE 'No tables open'   && returns correct records from test1
	
	     SELECT char1 FROM test1 WHERE ;
	       char1 IN (SELECT char1 FROM test2) or ;
	       char1 IN (SELECT char2 FROM test2) ;
	       INTO CURSOR QUERY
	     BROWSE TITLE 'Test1 in WA1 and Test2 in WA2'   && returns no records
	
	Additional query words: VFoxWin fixlist3.0b buglist3.00
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
