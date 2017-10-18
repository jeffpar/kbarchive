---
layout: page
title: "Q157189: FIX: MLINE() with Select-SQL Group By Clause Causes Error"
permalink: kb/157/Q157189/
---

## Q157189: FIX: MLINE() with Select-SQL Group By Clause Causes Error

	Article: Q157189
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a SELECT-SQL query is grouped by a field that is displayed using the MLINE()
	command, then executing the statement produces the following error and a result
	set is not created:
	
	  SQL: Internal Error
	
	WORKAROUND
	==========
	
	You can use a combination of string functions and MEMOWIDTH as in this example:
	
	     SELECT Fld1, LEFT(Fld2,set('MEMOWIDTH')) FROM test GROUP BY 2
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and populate a table with a memo field as follows:
	
	        CREATE TABLE test (Fld1 c(5), Fld2 m)
	        INSERT INTO test VALUES("aaaaa","aaaaaaaaaaaaaaaaaaaa")
	        INSERT INTO test VALUES("bbbbb","bbbbbbbbbbbbbbbbbbbb")
	
	2. Issue the following command:
	
	        SELECT Fld1, MLINE(Fld2,1) FROM test GROUP BY 2
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
