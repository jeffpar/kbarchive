---
layout: page
title: "Q162673: FIX: ASCAN() Fails to Find Integer Value when Called in a Loop"
permalink: /kb/162/Q162673/
---

## Q162673: FIX: ASCAN() Fails to Find Integer Value when Called in a Loop

{% raw %}

	Article: Q162673
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbvfp kbvfp500aFIX kbvfp500fixkbbuglist kbfixlist
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ASCAN() function may sometimes fail to find an integer value that is present
	in the searched array when values within the searched array are changed in an
	iterative loop.
	
	RESOLUTION
	==========
	
	As a workaround, you can convert a value in the scanned array to a character
	string, then back to a numeric data type, before issuing the ASCAN() function.
	
	     laarraysearched[1] = STR(laarraysearched[1])
	     laarraysearched[1] = INT(VAL(laarraysearched[1]))
	
	This must be done in two separate program lines, not all in a single line as in
	the following:
	
	     laarraysearched[1] = INT(VAL(STR(laarraysearched[1])))
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been fixed in Visual FoxPro 5.0a.
	
	MORE INFORMATION
	================
	
	The ASCAN() function should return an element number if the value scanned for is
	contained in the scanned array. Under specific circumstances, ASCAN() may return
	a 0 (that is, the value is not found) when seeking an integer value if the
	searched array has been repeatedly repopulated within an iterative loop. Under
	these circumstances, ASCAN() functions properly in Visual FoxPro 3.0b.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kbvfp kbvfp500aFIX kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
