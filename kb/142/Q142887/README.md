---
layout: page
title: "Q142887: FIX: SQL Select Inconsistency with SET ANSI OFF and ALLTRIM()"
permalink: /kb/142/Q142887/
---

## Q142887: FIX: SQL Select Inconsistency with SET ANSI OFF and ALLTRIM()

	Article: Q142887
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
	
	Using an ALLTRIM() function with an SELECT-SQL statement when SET ANSI=OFF may
	result in the return of an incorrect subset of records.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Visual FoxPro 3.0b
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a program file, and enter the following lines of code into it:
	
	     ************ Begin Program *******************
	
	     CREATE TABLE x1 (id C(4))
	     INSERT INTO x1 VALUES("AB")
	     INSERT INTO x1 VALUES("CD")
	
	     CREATE TABLE x2 (id C(4))
	     INSERT INTO x2 VALUES ("ABC")
	     INSERT INTO x2 VALUES ("CDE")
	
	     SET ANSI OFF
	     SELECT x1.* FROM x1,x2 WHERE ALLTRIM(x1.id)=ALLTRIM(x2.id)
	
	     ************* End Program ********************
	
	2. Run the program created in step 1. No records are returned from the SELECT
	  statement when there should be two records returned.
	
	3. Change "CREATE TABLE x2 (id C(4))" to "CREATE TABLE x2 (id C(5))" in the
	  program created in step 1.
	
	4. Run the program again. The records are returned correctly.
	
	Additional query words: buglist3.00 fixlist3.00b VFoxWin
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
