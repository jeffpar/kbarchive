---
layout: page
title: "Q131578: FIX: Math Problem with INT() Function"
permalink: /kb/131/Q131578/
---

## Q131578: FIX: Math Problem with INT() Function

{% raw %}

	Article: Q131578
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300bBUG kbvfp500fixkbbuglist kbfixlist
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The INT(nExpression) Function evaluates a numeric expression and returns
	incorrect values.
	
	RESOLUTION
	==========
	
	To work around this problem, change the SET DECIMAL setting to a larger more
	appropriate value such as 10 (the default is 2).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	Run the following code in Visual FoxPro:
	
	     pnum1 = 1000000
	     pnum2 = 999999
	
	     SET DECI TO 2       && this is default
	
	     ? int(pnum2/pnum1)  && result is 1 it should be 0
	
	     SET DECI TO 10
	
	     ? int(pnum2/pnum1)  && result is 0, which is correct
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp300bBUG kbvfp500fix kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
