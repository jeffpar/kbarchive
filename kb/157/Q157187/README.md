---
layout: page
title: "Q157187: FIX: SQL Query Returns Different Result Set with Korean Window"
permalink: /kb/157/Q157187/
---

## Q157187: FIX: SQL Query Returns Different Result Set with Korean Window

	Article: Q157187
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbenvkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A SQL SELECT statement with a WHERE clause returns an unexpected result set if
	Visual FoxPro for Windows is running under Hangeul Windows 95 (Korean Windows
	95). Similar results have been reported when using German Windows 95 or German
	Windows NT.
	
	WORKAROUND
	==========
	
	There are two ways around this problem. Use the HAVING clause instead of the
	WHERE clause in the SQL SELECT statement, or issue the SET COLLATE TO MACHINE
	command before executing the SELECT statement.
	
	If the index field is required, then use the SET COLLATE command on the Korean or
	German setting and build whatever indexes are needed in this collating sequence
	for normal operations, such as relationship and seeks. Before running a query,
	temporarily set the collation sequence to machine, and execute the query, but
	don't order it. Then set the collation sequence back to Korean, and do a query
	on the result set and ORDER BY the desired order.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been corrected in Visual FoxPro
	5.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create two tables. The table structures are as shown below :
	
	Structure
	
	Table1             Table2
	Field1   C10       Field1   C10
	Field2   C10       Field2   C10
	
	Contents
	
	Table1             Table2
	Field1  Field2     Field1  Field2
	111     222        111     222
	222     333        222     444
	333     333        333     222
	444     111        222     11
	555     333        555     333
	
	Issue the following command:
	
	     SELECT * FROM Table1,Table2 ;
	        WHERE Table1.Field1 = Table2.Field1 ;
	        AND Table1.Field2 = Table2.Field2
	
	Run Visual FoxPro for Windows 3.0b under Korean or German Windows 95 and the
	query returns an empty cursor, but it returns the correct result set if the
	query is executed under other Windows 95 platforms.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbenv kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
