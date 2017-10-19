---
layout: page
title: "Q157188: PRB: String Functions Cannot Be Used with SQL ORDER BY Clause"
permalink: /kb/157/Q157188/
---

## Q157188: PRB: String Functions Cannot Be Used with SQL ORDER BY Clause

	Article: Q157188
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	String functions such as LEFT(), RIGHT(), and SUBSTR() cannot be used with the
	ORDER BY clause of the SQL - SELECT statement. Doing so results in the following
	error message:
	
	  SQL Column '' is not found
	
	CAUSE
	=====
	
	ORDER BY supports only columns either by name or number, it does not support any
	other expressions.
	
	WORKAROUND
	==========
	
	Create a dummy column using the string function and then order by that column,
	as in the following example:
	
	     SELECT *,LEFT(Prod_name,5) AS x FROM PRODUCTS ORDER BY x
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open Testdata database in the HOME()+"Samples\Data\" directory, for Visual
	  FoxPro 6.0 goes to \\Program Files\Microsoft Visual Studio
	  \Common\Samples\Data.
	
	2. Issue the following command:
	
	        SELECT * FROM Products ORDER BY LEFT(Prod_name,5)
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,3.0b,5.0,6.0
	
	=============================================================================
	
